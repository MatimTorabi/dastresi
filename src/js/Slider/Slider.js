
const Slider = async() => {
    let slider = []
    try {
        let data = await fetch("https://matimtorabi.github.io/db/db.json")
        let res = await data.json()
        slider = res.slider.map((item)=>{
            return `
                <div class="swiper-slide">
                    <a href="#" class="w-full h-full">
                        <div class="w-full h-full">
                            <img src=${item.image} alt=${item.alt} class="w-full h-full object-cover rounded-xl">
                        </div>
                    </a>
                </div>
            `
        })
        document.querySelector(".slide ").innerHTML = slider.join(" ")
    } catch (error) {
        console.log(error);
    }

}
 
export default Slider;
