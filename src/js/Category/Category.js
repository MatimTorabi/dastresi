
const Category = async() => {
    let category = []
    try {
        let data = await fetch("https://matimtorabi.github.io/db/db.json")
        let res = await data.json()
        category = res.category.map((item)=>{
            return `
                  <div class="swiper-slide bg-white"><a href="" class=""><img src=${item.image} alt=${item.alt} class="w-[185px] pt-[28px] object-cover h-[185px]"></a></div>
            `
        })
        document.querySelector(".category ").innerHTML = category.join(" ")
    } catch (error) {
        console.log(error);
    }

}
 
export default Category;
