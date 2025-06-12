
const Dastresi = async() => {
    let dastresi = []
    try {
        let data = await fetch("https://matimtorabi.github.io/db/db.json")
        let res = await data.json()
        dastresi = res.dastresi.map((item)=>{
            return `
              <div class="laptop:w-[290px] desktop:w-[312px] h-full flex flex-col justify-center items-center p-4 gap-2.5">
                <img src=${item.icon} alt=${item.alt} class="w-[64px] h-[64px] ">
                <h2 class="font-[Yekan] text-[#7E7575] text-sm font-bold text-center">${item.title}</h2>
                <p class="font-[Yekan] text-center tablet:text-[12px] laptop:text-sm text-[#2b2b2b] leading-7">${item.description}</p>
              </div>

            `
        })
        document.querySelector(".dast ").innerHTML = dastresi.join(" ")
    } catch (error) {
        console.log(error);
    }

}
 
export default Dastresi;
