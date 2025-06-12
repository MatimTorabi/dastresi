
const Header = async() => {
    let header = []
    try {
        let data = await fetch("https://matimtorabi.github.io/db/db.json")
        let res = await data.json()
        header = res.menu.map((item)=>{
        if (item.dropdown.length>0) {
            return `
                        <li class="relative group h-full border-b-[2px] border-white border-solid hover:border-b-[#FE5F55] transition-all duration-300 ease-linear">
                            <a href="#" class="text-[#00000099] px-4 py-2  block font-[Yekan] hover:text-[#FE5F55] transition-all duration-300 ease-linear laptop:text-xs desktop:text-sm has-submenu ">
                                <span>${item.title}</span>
                                <i class="icon-arrow-down mr-1 text-xl align-middle"></i>
                            </a>
                            
                            <!-- سطح دوم -->
                            <ul class="absolute hidden group-hover:block bg-white w-[330px] shadow-lg right-0 mt-1 ">
                                ${item.dropdown.map((child)=>{
                                    if(child.dropdown.length>0){
                                        return `
                                        <li class="relative submenu-parent">
                                            <a href="#" class="text-[#00000099] px-4 py-3 hover:bg-gray-200 hover:text-[#0a5ade] font-[Yekan] text-xs has-submenu flex items-center justify-between">
                                                <span class="">${child.name}</span>
                                                <i class="icon-chevron-left text-black-60 text-xl"></i>
                                            </a>
                                            <!-- سطح سوم -->
                                            <ul class="absolute hidden submenu-child bg-white w-[300px] right-full top-0">
                                                ${child.dropdown.map((chi)=>{
                                                    return `
                                                        <li><a href="#" class="text-[#00000099] px-4 py-3 hover:bg-gray-200 hover:text-[#0a5ade] block font-[Yekan] text-xs">${chi.name}</a></li>
                                                    `
                                                }).join(" ")

                                                }
                                            </ul>
                                        </li>
                                        `
                                    }else{
                                        return`
                                            <li><a href="#" class="text-[#00000099] px-4 py-3 hover:bg-gray-200 hover:text-[#0a5ade] block font-[Yekan] text-xs">${child.name}</a></li>
                                        `
                                    }

                                }).join(" ")}                                
                            </ul>
                        </li>
            `
            }else{
                    return `
                        <li class="relative group h-full border-b-[2px] border-white border-solid hover:border-b-[#FE5F55] transition-all duration-300 ease-linear">
                            <a href="#" class="text-[#00000099] px-4 py-2  block font-[Yekan] hover:text-[#FE5F55] transition-all duration-300 ease-linear laptop:text-xs desktop:text-sm">
                                <span>${item.title}</span>
                                <i class="icon-arrow-down mr-1 text-xl align-middle"></i>
                            </a>
                        </li>
                    `
            }
        })
        document.querySelector(".item").innerHTML = header.join(" ")
    } catch (error) {
        console.log(error);
    }

}
 
export default Header;