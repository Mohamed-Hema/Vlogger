const toggle = document.querySelector(".toggle");
const sideMenu = document.querySelector(".sidemenu");

toggle.addEventListener("click", function toggleMenu() {
    return sideMenu.classList.toggle('show');
});

var mixer = mixitup('.shuffle', {
    controls: {
        toggleDefault: 'none'
    },
    load: {
        filter: '.tech'
    }
});


// $(".js-number-counter").each(function() {
//   let value = $(this).html();
//   let element = $(this);
//   $({ animateValue: 0 }).animate({ animateValue: value }, {
//     duration: 2000,
//     easing: 'swing', 
//     step: function () {
//       element.text(Math.round(this.animateValue));
//     }
//   });
// });

// $('.js-number-counter').countUp({
//     'time': 2000,
//     'delay': 10
// });