  const qty = document.getElementById('qty');
  const submit = document.querySelector('.submit-btn');
  const display = document.getElementById('display-product');
  const empty = document.getElementById('empty');
  const btn = document.querySelector('.check');
  const cartNumber = document.querySelector('.cart-number');
  const cart = document.getElementById('cart')
  const cartContainer = document.querySelector('.cart-container');
  
  
 

  // Set items to local storage

  submit.onclick = function(option) {
      option.preventDefault();
      window.location.reload();
       
      let cartObject = {
          qty: qty.value,
          price: 125
      }
      window.localStorage.setItem('Item', JSON.stringify(cartObject));  
  }

  //get items from the local storage

   let item = [];

  const cartItems = () => {
      for(const [key, value] of Object.entries(localStorage)) {
          item.push(JSON.parse(value))
      }
  }

  cartItems();


  // Display items in the cart

  if( item.length > 0) {

    btn.style.display = 'block';
    cartContainer.style.display = 'block';

      for( let i = 0; i < item.length; i++) {

        display.innerHTML += `
        <div class="display-container">
           <div class="products">
               <div class="product-image"> 
                  <img src="./images/image-product-1.jpg" alt="">
               </div>
               <div> 
                  <p style="opacity: 0.6;">Autumn Limited Edition</p>
                  <div ><span style="opacity: 0.6;"> $${item[i].price}X</span> <span style="opacity: 0.6;">${item[i].qty}</span> <span style="font-weight: 900; font-size: 20px; margin-left: 10px;">$${item[i].price* item[i].qty}</span></div>
               </div>
               <div id="remove">
                  <img src="./images/icon-delete.svg" )>
               </div>
            </div>
        </div>  `

        cartNumber.textContent = item[i].qty;


        //remove an item from localstorage

   const remove = document.getElementById('remove');
   remove.value = Object.keys(localStorage)[i];

   const removeItem = () => {
       remove.onclick = function() {
           if(remove.value) {
               localStorage.removeItem(remove.value);
               location.reload();
             };   
       }
     }

     removeItem();

      }
  } else {
      empty.style.display = 'block';
      cartNumber.style.display = 'none';
  }
    


  //add and subtract quantity in the input value

  const btnAdd = document.querySelector('.plus-btn');
  const btnSubtract = document.querySelector('.minus-btn');
  const inputValue = document.getElementById('qty');


  btnAdd.onclick = function() {
     inputValue.value = parseInt(inputValue.value) + 1;
     if(inputValue.value > 1) {
        btnSubtract.disabled = false;
     }

  }

btnSubtract.onclick = function() {

    inputValue.value = parseInt(inputValue.value) - 1;

    if(inputValue.value <= 1) {
        btnSubtract.disabled = true;
    } 
}



// CSS and HTML interactions

const close = document.getElementById('close');
const show = document.getElementById('show')
const sideNav = document.getElementById('side-nav');

const showSideNav = () => {
    sideNav.style.display = 'block';
}

const hideSideNav = () => {
     sideNav.style.display = 'none';
}


cart.onclick = function() {
    if(cartContainer.style.display === 'none') {
        cartContainer.style.display = 'block'
    } else {
        cartContainer.style.display = 'none';
    }
}



const slides = document.getElementsByClassName("slides");
const mSlides = document.getElementsByClassName("m-slides");
const thumbnail = document.getElementsByClassName("thumbnail");

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }


  // Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    if (n > mSlides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = mSlides.length}
    for (i = 0; i < mSlides.length; i++) {
        mSlides[i].style.display = "none";
    }



    for (i = 0; i < thumbnail.length; i++) {
        thumbnail[i].style.opacity = '1';
        thumbnail[i].style.border = 'none';
        
    }

    slides[slideIndex - 1].style.display = "block";
    mSlides[slideIndex - 1].style.display = "block";
    thumbnail[slideIndex - 1].style.opacity = "0.7";
    thumbnail[slideIndex - 1].style.border = "2px solid orange";

  }


const modalContainer = document.getElementById('modal-container');

let width = window.innerWidth;


    const openModal = () => {
              modalContainer.style.display = 'block';
    }
    
    const closeModal = () => {

             modalContainer.style.display= 'none';  
    }


