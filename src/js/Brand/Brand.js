
const Brand = async() => {
    let brand = []
    try {
        let data = await fetch("https://matimtorabi.github.io/db/db.json")
        let res = await data.json()
        brand = res.brand.map((item)=>{
            return `
                    <div class="swiper-slide ">
                        <div class="w-full h-full flex items-center justify-center ">
                            <div class="rounded-xl shadow-md bg-white flex items-center cursor-pointer justify-center w-full h-[96px]  transition-all duration-300 ease-in-out hover:-translate-y-3">
                                <a class="" href="#">
                                    <img src=${item.image} class="mobile:w-14 mobile:h-14 tablet:w-24 tablet:h-24 object-cover" alt=${item.alt}>
                                </a>
                            </div>
                        </div>
                    </div>
                  `
        })
        document.querySelector(".brand ").innerHTML = brand.join(" ")
    } catch (error) {
        console.log(error);
    }

}
 
export default Brand;

