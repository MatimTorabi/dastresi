const Card = async() => {
    let card = []
    try {
        let data = await fetch("https://matimtorabi.github.io/db/db.json")

        let res = await data.json()
        card = res.card.map((item, index)=>{
            if (index>=2) {
                return`
                    <a href="#" >
                        <div class="w-full mobile:h-[161px] laptop:h-[187px] rounded-xl hover:shadow-xl flex bg-white">
                            <img src=${item.image} alt=${item.alt} class="rounded-r-xl">
                            <div class="mobile:w-full laptop:w-auto flex flex-col justify-center">
                                <p class="text-start font-[Yekan] mobile:text-xs tablet:text-sm leading-6 line-clamp-3 text-[#000000DE]">${item.description}</p>
                                <div class="flex mobile:justify-between laptop:gap-2 pt-6 mobile:w-full laptop:w-auto pl-2.5">
                                    <span class="font-[Yekan] mobile:text-[13px] tablet:text-sm text-[#9E9E9E]">${item.off}</span>
                                    <span class="font-[Yekan] mobile:text-[13px] tablet:text-sm text-[#FE5F55]">${item.pureoff}</span>
                                </div>
                                <div class="flex flex-row items-center justify-end gap-1 pt-2.5 pl-2.5">
                                    <span class="text-[#0A5ABD] font-[Yekan] font-bold mobile:text-sm tablet:text-xl">${item.price}</span>
                                    <span class="text-[#A1A3A1] font-[Yekan] mobile:text-[10px] tablet:text-xs">تومان</span>
                                </div>
                            </div>
                        </div>
                    </a>
                `
            }

        })
        document.querySelector(".card ").innerHTML = card.join(" ")

    } catch (error) {
        console.log(error);
    }

}
 
export default Card;
