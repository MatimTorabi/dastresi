const Articles = async() => {
    let articles = []
    try {
        let data = await fetch("https://matimtorabi.github.io/db/db.json")
        let res = await data.json()
        articles = res.articles.map((item)=>{
            return `
                    <div class="swiper-slide">
                      <a href="#" class="flex hover:text-[#0a5abd] items-center shadow-md  rounded-2xl">
                        <div class="w-full rounded-md  mobile:h-[140px] tablet:h-[190px] laptop:h-[215px] flex flex-col justify-center items-center">
                            <div class="w-full mobile:h-[50%] tablet:h-[65%] laptop:h-[70%]">
                                <img class="w-auto rounded-xl mobile:h-full object-cover " alt=${item.alt} src=${item.image}>
                            </div>
                            <div class="w-full flex items-center justify-center mobile:h-[50%] tablet:h-[35%] laptop:h-[30%]">
                                <h3 class="mobile:leading-6 tablet:leading-7 mobile:line-clamp-2 mobile:text-xs laptop:text-sm overflow-hidden font-[Yekan] text-[#494949]">${item.description}</h3>
                            </div>
                        </div>
                      </a>
                    </div>

                  `
        })
        document.querySelector(".articles ").innerHTML = articles.join(" ")
    } catch (error) {
        console.log(error);
    }

}
 
export default Articles;
