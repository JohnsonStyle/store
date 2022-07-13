      $(document).ready(function () {

          const Mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


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