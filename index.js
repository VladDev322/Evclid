document.addEventListener('DOMContentLoaded', function() {


  document.querySelectorAll('.work__step').forEach(function(workStep) {
    workStep.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      //change text
      document.querySelectorAll('.about__step').forEach(function(stepContent) {
        stepContent.classList.remove('about__step-active')
      })
      document.querySelector(`[data-step="${path}"]`).classList.add('about__step-active')

      //change image
      document.querySelectorAll('.work__img').forEach(function(stepImg) {
        stepImg.classList.remove('work__img-active')
      })
      document.querySelector(`[img-step="${path}"]`).classList.add('work__img-active')
    })
  })

  //SWIPER 
  const swiwer = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    autoplay: {
      delay: 3000,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      hide: 'true',
    },
  });

    //accordion
    $(function() {
      $("#accordion").accordion({
        active: true,
        collapsible: true  
      });    
    });
})

