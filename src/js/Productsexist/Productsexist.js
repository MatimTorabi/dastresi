
const Productsexist = async() => {
    let productsexist = []
    try {
        let data = await fetch("https://matimtorabi.github.io/db/db.json")
        let res = await data.json()
        productsexist = res.productsexist.map((item)=>{
            if (item.status==="exist") {
                return `
                    <div class="swiper-slide rounded-xl ">
                        <a href="#" class="w-full h-full">
                            <div class="w-full h-full flex justify-between flex-col relative">
                                <div class="w-full mobile:h-[138px] tablet:h-[190px] laptop:h-[272px]">
                                    <img src=${item.image} alt=${item.alt} class="w-full h-full tablet:object-cover rounded-xl">
                                </div>
                                    <div class="w-full mobile:h-[56px] tablet:h-[68px] laptop:h-[70px] flex flex-col items-center justify-center gap-2.5">
                                    <h3 class="mobile:hidden laptop:block font-[Yekan] text-[#A3A3A3] text-xs">${item.title}</h3>
                                    <p class="font-[Yekan] text-[#000000DE] text-xs line-clamp-1">${item.description}</p>
                                </div>
                                <div class="w-full mobile:h-[58px] tablet:h-[62px] laptop:h-[62px] flex flex-col gap-2 py-2.5 justify-center mobile:items-center mobile:pl-0 laptop:items-end laptop:pl-5">
                                    <span class="font-[Yekan] text-[#A3A3A3] text-xs">${item.off}</span>
                                    <div class="flex justify-center items-center gap-2.5 ">
                                        <span class="font-[Yekan] font-bold mobile:text-[12px] tablet:text-xl text-[#0a5abd]">${item.price}</span>
                                        <span class="font-[Yekan] mobile:text-[12px] tablet:text-xs text-[#A3A3A3]">تومان</span>
                                    </div>
                                </div>
                                <div class="mobile:hidden laptop:block w-[12px] h-[12px] rounded-full bg-[#000000de] absolute left-5 top-5" ></div>
                            </div>
                        </a>
                    </div>
                `
            }else{
                return `
                    <div class="swiper-slide rounded-xl ">
                        <a href="#" class="w-full h-full">
                            <div class="w-full h-full flex justify-between flex-col relative">
                                <div class="w-full mobile:h-[138px] tablet:h-[190px] laptop:h-[272px]">
                                    <img src=${item.image} alt=${item.alt} class="w-full h-full tablet:object-cover rounded-xl">
                                </div>
                                    <div class="w-full mobile:h-[56px] tablet:h-[68px] laptop:h-[70px] flex flex-col items-center justify-center gap-2.5">
                                    <h3 class="mobile:hidden laptop:block font-[Yekan] text-[#A3A3A3] text-xs">${item.title}</h3>
                                    <p class="font-[Yekan] text-[#000000DE] text-xs line-clamp-1">${item.description}</p>
                                </div>
                                <div class="w-full bg-[#FFF5F5] mobile:h-[58px] tablet:h-[62px] rounded-b-xl laptop:h-[62px] flex flex-col items-center justify-center">
                                    <span class="text-[#9b2c2c] text-sm font-[Yekan]">ناموجود</span>

                                </div>
                                <div class="mobile:hidden laptop:block w-[12px] h-[12px] rounded-full bg-[#000000de] absolute left-5 top-5" ></div>
                            </div>
                        </a>
                    </div>
                `
            }

        })
        document.querySelector(".productsexist ").innerHTML = productsexist.join(" ")
    } catch (error) {
        console.log(error);
    }

}
 
export default Productsexist;
