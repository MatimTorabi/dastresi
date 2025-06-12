import Articles from "./Articles/Articles";
import Brand from "./Brand/Brand";
import Card from "./Card/Card";
import Category from "./Category/Category";
import Categorym from "./Categorym/Categorym";
import Dastresi from "./Dastresi/Dastresi";
import Header from "./Header/Header"
import Menu from "./Menu/Menu";
import Products from "./Products/Products";
import Productsexist from "./Productsexist/Productsexist";
import Slider from "./Slider/Slider"


function excuteslider() {
    var swiper = new Swiper(".mySwiper", {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
}

function category() {
      var swiper = new Swiper(".Category", {
      slidesPerView: 5,
      spaceBetween: 0,
      freeMode: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1100: {
          slidesPerView: 6,
          spaceBetween: 30
        },
      }

    });
}

function brand() {
    var swiper = new Swiper(".Brand", {
      slidesPerView: 4,
      spaceBetween: 20,
      freeMode: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
        1100: {
          slidesPerView: 6
        }
      }
    });
}

function articles() {
    var swiper = new Swiper(".Articles", {

    slidesPerView: 3,
    spaceBetween: 20,
    freeMode: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        1100: {
          slidesPerView: 4
        }
      }
  });
}

function products() {
    var swiper = new Swiper(".products", {

    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
  });
}

function productsexist() {
    var swiper = new Swiper(".Productsexist", {

    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
  });
}

function menu() {
      document.querySelectorAll('.submenu-parent').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.submenu-child').classList.remove('hidden');
        });
        
        item.addEventListener('mouseleave', () => {
            item.querySelector('.submenu-child').classList.add('hidden');
        });
    });
}

function men(){
        const drawerButton = document.getElementById('drawer-button');
        const drawerContainer = document.getElementById('drawer-container');
        const closeDrawer = document.getElementById('close-drawer');
        const mainDrawer = document.getElementById('main-drawer');
        
        drawerButton.addEventListener('click', () => {
            drawerContainer.classList.remove('hidden');
            setTimeout(() => {
                mainDrawer.style.transform = 'translateX(0)';
            }, 10);
        });
        
        function closeDrawerFunc() {
            mainDrawer.style.transform = 'translateX(100%)';
            setTimeout(() => {
                drawerContainer.classList.add('hidden');
            }, 300);
        }
        
        closeDrawer.addEventListener('click', closeDrawerFunc);
        
        drawerContainer.addEventListener('mouseleave', (e) => {
            if (!mainDrawer.contains(e.relatedTarget)) {
                closeDrawerFunc();
            }
        });
        
        const accordionBtns = document.querySelectorAll('.accordion-btn');
        
        accordionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const content = btn.nextElementSibling;
                const isOpen = content.style.maxHeight !== '0px' && content.style.maxHeight !== '';
                
                document.querySelectorAll('.accordion-content').forEach(item => {
                    item.style.maxHeight = '0';
                });
                
                if (!isOpen) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });
    document.querySelectorAll('.accordion-btn').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const isActive = content.classList.contains('active');
            
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.classList.remove('active');
            });
            
            if (!isActive) {
                content.classList.add('active');
            }
        });
    });
    
    document.getElementById('close-drawer').addEventListener('click', () => {
        document.getElementById('drawer-container').classList.add('hidden');
    });
}

async function all_data() {
    await Header()
    await Menu()
    await Slider()
    await Dastresi()
    await Category()
    await Categorym()
    await Brand()
    await Articles()
    await Products()
    await Productsexist()
    await Card()
    menu()
    excuteslider()
    category()
    brand()
    articles()
    products()
    productsexist()
    men()

}

all_data()