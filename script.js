const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

const colors = ["#080a11", "#637eae", "#7d5579", "#767c84", "#050a30"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});


document.addEventListener('DOMContentLoaded', function () {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const closeBtn = document.createElement('span');
  closeBtn.classList.add('close');
  closeBtn.innerHTML = '&times;';

  closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  modal.appendChild(closeBtn);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  galleryItems.forEach(item => {
      item.addEventListener('click', () => {
          const imgSrc = item.querySelector('img').src;
          modalContent.innerHTML = `<img src="${imgSrc}" alt="Image">`;
          modal.style.display = 'flex';
      });
  });
});

function contact() {
  alert('Contact button clicked!');
}


/* for gallery album*/
$(document).ready(function(){

  $('.buttons').click(function(){

      $(this).addClass('active').siblings().removeClass('active');

      var filter = $(this).attr('data-filter')

      if(filter == 'all'){
          $('.image').show(400);
      }else{
          $('.image').not('.'+filter).hide(200);
          $('.image').filter('.'+filter).show(400);
      }

  });

  $('.gallery2').magnificPopup({

      delegate:'a',
      type:'image',
      gallery:{
          enabled:true
      }

  });

});