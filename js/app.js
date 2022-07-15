      $(document).ready(function () {

          const Mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

          
              if ($(window).width() <800) {
      $( "h1" ).appendTo( $( ".breadcrumb" ) ); //responsive replace TITLE to UP
        } 

          //focus input Search form
          $(".searchModalfocus").click(function () {
              function focus() {
                  $(".searchModal").attr("autofocus", "autofocus").focus();
              }
              setTimeout(focus, 1000);
          });



          /**
           * Range slider
           * @requires https://github.com/leongersen/noUiSlider
           */
          var rangeSlider = function () {
              var rangeSliderWidget = document.querySelectorAll('.range-slider');
              var _loop2 = function _loop2(i) {
                  var rangeSlider = rangeSliderWidget[i].querySelector('.range-slider-ui'),
                      valueMinInput = rangeSliderWidget[i].querySelector('.range-slider-value-min'),
                      valueMaxInput = rangeSliderWidget[i].querySelector('.range-slider-value-max');
                  var options = {
                      dataStartMin: parseInt(rangeSliderWidget[i].dataset.startMin, 10),
                      dataStartMax: parseInt(rangeSliderWidget[i].dataset.startMax, 10),
                      dataMin: parseInt(rangeSliderWidget[i].dataset.min, 10),
                      dataMax: parseInt(rangeSliderWidget[i].dataset.max, 10),
                      dataStep: parseInt(rangeSliderWidget[i].dataset.step, 10)
                  };
                  var start = options.dataStartMax ? [options.dataStartMin, options.dataStartMax] : [options.dataStartMin],
                      connect = options.dataStartMax ? true : 'lower';
                  noUiSlider.create(rangeSlider, {
                      start: start,
                      connect: connect,
                      step: options.dataStep,
                      tooltips: true,
                      range: {
                          'min': options.dataMin,
                          'max': options.dataMax
                      },
                      format: {
                          to: function to(value) {
                              return parseInt(value, 10) + ' zł';
                          },
                          from: function from(value) {
                              return Number(value);
                          }
                      }
                  });
                  rangeSlider.noUiSlider.on('update', function (values, handle) {
                      var value = values[handle];
                      value = value.replace(/\D/g, '');
                      if (handle) {
                          if (valueMaxInput) {
                              valueMaxInput.value = Math.round(value);
                          }
                      } else {
                          if (valueMinInput) {
                              valueMinInput.value = Math.round(value);
                          }
                      }
                  });
                  if (valueMinInput) {
                      valueMinInput.addEventListener('change', function () {
                          rangeSlider.noUiSlider.set([this.value, null]);
                      });
                  }
                  if (valueMaxInput) {
                      valueMaxInput.addEventListener('change', function () {
                          rangeSlider.noUiSlider.set([null, this.value]);
                      });
                  }
              };
              for (var i = 0; i < rangeSliderWidget.length; i++) {
                  _loop2(i);
              }
          }();



      });



  //NAVBAR STICKY ON SCROLL
    document.addEventListener("DOMContentLoaded", function() {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 250) {
                document.getElementById('navbar-sticky').classList.add('fixed-top');

                navbar_height = document.querySelector('.navbar').offsetHeight;
                document.body.style.paddingTop = navbar_height + 'px';
            } else {
                document.getElementById('navbar-sticky').classList.remove('fixed-top');
                // remove padding top from body
                document.body.style.paddingTop = '0';
            }
        });
    });
 
 
    //DROPDOWN  effect on hover
    document.addEventListener("DOMContentLoaded", function() {
        if (window.innerWidth > 992) {
            document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem) {
                everyitem.addEventListener('mouseover', function(e) {
                    let el_link = this.querySelector('a[data-bs-toggle]');
                    if (el_link != null) {
                        let nextEl = el_link.nextElementSibling;
                        el_link.classList.add('show');
                        nextEl.classList.add('show');
                    }
                });
                everyitem.addEventListener('mouseleave', function(e) {
                    let el_link = this.querySelector('a[data-bs-toggle]');

                    if (el_link != null) {
                        let nextEl = el_link.nextElementSibling;
                        el_link.classList.remove('show');
                        nextEl.classList.remove('show');
                    }
                })
            });

        }
    });

    

//CART SIDEBAR
 

          document.getElementById("myCartIco").onclick = function() {
                              document.getElementById("myCart").classList.toggle("cartTrigger"); 
                            }
                            function closeNav() {
                              document.getElementById("myCart").classList.toggle("cartTrigger"); 

                            }
                            
                            
                            document.getElementById("filterRespons").onclick = function() {
                                document.getElementById("myCart2").classList.toggle("cartTrigger");
                            }

                            function closeNav2() {
                                document.getElementById("myCart2").classList.toggle("cartTrigger");

                            }
  
    
        
//slider   //






$('.product-carousel').slick({
		lazyLoad: 'ondemand',
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: ' <i class="arrow right"> ',
		prevArrow: '<i class="arrow left">',
		infinite: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		 
		]
});
    $('.product-carousel-2').slick({
		lazyLoad: 'ondemand',
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: ' <i class="arrow right"> ',
		prevArrow: '<i class="arrow left">',
		infinite: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		 
		]
        
      
});
    
       
     