let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = ()=>
{
    

     searchForm.classList.toggle('active');
    ShoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar .classList.remove('active');
    

}


let ShoppingCart = document.querySelector('.Shopping-cart');
document.querySelector('#cart-btn').onclick = () =>
{
    ShoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar .classList.remove('active');


}

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
    ShoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
     navbar .classList.remove('active');

}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>
{
    navbar .classList.toggle('active');
    loginForm.classList.remove('active');
    ShoppingCart.classList.remove('active');
    searchForm.classList.remove('active');


}



window.onscroll = () =>
{
    searchForm.classList.remove('active');
    ShoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar .classList.remove('active');
    
    


}

 var swiper = new Swiper(".product-slider", {
      loop: true,
      spaceBetween: 20,
      autoplay: {
        dalay: 7500,
        disableOnInteraction: false,

      },
      
    
      breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          
        },
        1020: {
          slidesPerView: 3,
          
        },
      },
    });




  var swiper = new Swiper(".review-slider", {
      loop: true,
      spaceBetween: 20,
      autoplay: {
        dalay: 7500,
        disableOnInteraction: false,

      },
      
    
      breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          
        },
        1020: {
          slidesPerView: 3,
          
        },
      },
    });

