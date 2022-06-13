      $(document).ready(function() {
                            $('.slider-for').slick({
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: false,
                                prevArrow: '<button type="button" class="slick-next-r"><i class="bx bx-chevron-up"></i></button>',
                                nextArrow: '<button type="button" class="slick-prev-l"><i class="bx bx-chevron-down"></i></button>',
                                fade: true,
                                infinite: true,
                                asNavFor: '.slider-nav'
                            });
                            $('.slider-nav').slick({
                                prevArrow: '<button type="button" class="slick-prev"><i class="bx bx-chevron-up"></i></button>',
                                nextArrow: '<button type="button" class="slick-prev"><i class="bx bx-chevron-down"></i></button>',
                                slidesToShow: 6,
                                slidesToScroll: 1,
                                asNavFor: '.slider-for',
                                dots: false,
                                infinite: false,
                                focusOnSelect: true,
                                arrows: true,
                                adaptiveHeight: true,
                                vertical: true,
                                verticalSwiping: false,
                                draggable: false,
                                responsive: [{
                                    breakpoint: 992,
                                    settings: {
                                        slidesToShow: 3,
                                        vertical: false,
                                        verticalSwiping: true,
                                    }
                                }, ],
                            })

                            //default
                            let tkaninaCode = $("#colors .option input ").first().val().replace(/\d+/g, ''), // .replace(/ /g, '')
                                colorCode = $("#colors .option input ").first().val().replace(/[^0-9]/gi, ''),
                                numImg = 1,
                                numImgIndex = 0,
                                nozki = $("#nozki .option input ").first().val(),
                                pin = $("#pin .option input ").first().val(),
                                urlPin = '/img/options/pin/' + numImg + '_' + pin + '.png',
                                urlNoz = '/img/options/nozki/' + numImg + '+' + nozki + '.png',
                                url = ('/img/product2/' + tkaninaCode.toLowerCase() + '/' + colorCode + '/' + numImg + '+baza.jpg').replace(/\s+/g, '');
                            //numImg взяти з активної .slick-track   яка активна slick-current
                            //console.log(tkaninaCode, colorCode, numImg, nozki)
                            //багнутий скрипт ЗУМ


                            $("#nozki .option input ").click(function() {
                                nozki = $(this).val(); //берем кодножки (1:1 назва файла і код)кольору 

                                $("#nozki .result").text(nozki); //вивід назви опці біля заголовк уопції
                                //console.log(nozki);
                                imgUrlNoz(); //ф-ція прогрузки url

                                //загрузка по кліку zoom reset
                                render();
                                setTimeout(loadZoom, 10);
                            })


                            $("#pin .option input ").click(function() {
                                pin = $(this).val(); //берем код pineska (1:1 назва файла і код) 
                                $("#pin .result").text(pin); //вивід назви опці біля заголовк уопції 
                                imgUrlPin(pin);
                                render();
                                setTimeout(loadZoom, 10);
                            })


                            $("#colors .option input ").click(function() {
                                colorCode = $(this).val().replace(/[^0-9]/gi, ''); //берем код кольору 
                                tkaninaCode = $(this).val().replace(/\d+/g, ''); //берем текст колекція тканини 
                                $("#colors .result").text(colorCode); //вивід назви опці біля заголовк уопції
                                //console.log($('single-color').index( this ));
                                imgUrl(tkaninaCode, colorCode); //ф-ція прогрузки url
                                //загрузка по кліку zoom reset
                                renderS();
                                render();
                                setTimeout(loadZoom, 10);
                            })

                            //  привязка до preview  +  data-slick-index
                            //get index on click to previem nav-bar    
 
          
          
          
                            $('#sImg .slick-slide').click(function() {
                                numImgIndex = $(this).attr('data-slick-index');
                                numImg = parseInt($(this).attr('data-slick-index')) + 1;
                                 
                               
                                //перевірка чи є фігура для рендерінга
                               if(this.localName === 'figure') {
                            
                                        imgUrl();
                                        imgUrlPin();
                                        imgUrlNoz();
                                        renderS();
                                        render();
                                   }
                            })

                            function loadZoom() {
                                $('.zoom').trigger('zoom.destroy');
                                $('.zoom').zoom();
                            }

                            function imgUrl() {
                                return url = ('/img/product2/' + tkaninaCode.toLowerCase() + '/' + colorCode + '/' + numImg + '+baza.jpg').replace(/\s+/g, '');
                                //$('img.tovar').attr('src', url);
                                console.log(url)
                            }

                            function imgUrlPin() {
                                return urlPin = ('/img/options/pin/' + numImg + '_' + pin + '.png').replace(/\s+/g, '');
                                //    console.log(urlPin)
                            }

                            function imgUrlNoz() {
                                return urlNoz = ('/img/options/nozki/' + numImg + '+' + nozki + '.png').replace(/\s+/g, '');
                                //   console.log(urlNoz)
                            }





                            //assets loader sample url
                            //(async () => {
                            //    [  '/img/options/pin/pin_g.png',urlPin
                            //       '/img/options/pin/pin_g.png',
                            //       '/img/options/pin/pin_g.png'
                            //    ]
                            async function render() {
                                const [nozka, face, border, back] = await Promise.all(
                                    [
                                        urlNoz,
                                        urlPin,
                                        url,
                                        url
                                    ].map(url => {
                                        const img = new Image();
                                        img.src = url;
                                        return new Promise(res => {
                                            img.onload = e => res(img);
                                        });
                                    })
                                );


                                let canvas = document.createElement('canvas');
                                canvas.id = "canvas";
                                const ctx = canvas.getContext("2d");
                                ctx.canvas.width = 2000;
                                ctx.canvas.height = 2000;

                                ctx.drawImage(border, 0, 0);
                                ctx.globalCompositeOperation = 'source-in';


                                ctx.drawImage(nozka, 0, 0);
                                ctx.globalCompositeOperation = 'destination-over';


                                ctx.drawImage(face, 0, 0);
                                ctx.globalCompositeOperation = 'destination-over';

                                ctx.drawImage(back, 0, 0, );

                                // reset
                                ctx.globalCompositeOperation = 'source-over';

                                const renderImg = new Image();
                                renderImg.src = canvas.toDataURL('image/jpeg', 0.99); 
                                //type + encode quality .

                                document.getElementById('bImg' + numImgIndex).innerHTML = '';
                                document.getElementById('bImg' + numImgIndex).appendChild(renderImg).classList.add("img-fluid");

                                // console.log('active numImgIndex='+ numImgIndex)

                                $('.zoom').zoom(); //загрузка мoдуля при старті сторінки
                            }; //end
                            render();



                            /*****************************************/




                            //render SMALL preview img //
                            async function renderS() {

                                for (let i = 0; i < $('#sImg figure').length; i++) {

                                    const [nozka, face, border, back] = await Promise.all(
                                        [
                                            ('/img/options/nozki/' + (i + 1) + '+' + nozki + '.png').replace(/\s+/g, ''),
                                            ('/img/options/pin/' + (i + 1) + '_' + pin + '.png').replace(/\s+/g, ''),
                                            ('/img/product2/' + tkaninaCode.toLowerCase() + '/' + colorCode + '/' + (i + 1) + '+baza.jpg').replace(/\s+/g, ''),
                                            ('/img/product2/' + tkaninaCode.toLowerCase() + '/' + colorCode + '/' + (i + 1) + '+baza.jpg').replace(/\s+/g, '')
                                        ].map(url => {
                                            const img = new Image();
                                            img.src = url;
                                            return new Promise(res => {
                                                img.onload = e => res(img);
                                            });
                                        })
                                    );


                                    let canvasS = document.createElement('canvas');
                                    canvasS.id = "canvasS" + i;
                                    const ctxS = canvasS.getContext("2d");
                                    const cSw = 500;
                                    const cSh = 500;
                                    ctxS.canvas.width = cSw;
                                    ctxS.canvas.height = cSh;


                                    ctxS.drawImage(border, 0, 0, cSw, cSh);
                                    ctxS.globalCompositeOperation = 'source-in';


                                    ctxS.drawImage(nozka, 0, 0, cSw, cSh);
                                    ctxS.globalCompositeOperation = 'destination-over';


                                    ctxS.drawImage(face, 0, 0, cSw, cSh);
                                    ctxS.globalCompositeOperation = 'destination-over';

                                    ctxS.drawImage(back, 0, 0, cSw, cSh);

                                    // reset
                                    ctxS.globalCompositeOperation = 'source-over';

                                    const renderImgS = new Image();
                                    renderImgS.src = canvasS.toDataURL('image/jpeg', 0.5);

                         document.getElementById('sImg' + i).innerHTML = '';
                         document.getElementById('sImg' + i).appendChild(renderImgS).classList.add("img-fluid");

                                    // console.log(renderImgS.src , i)
                                }
                            }; //end
                            renderS();




           //default HIDE all no-active options

                            $(" .single-color input").each(function(index, element) {
                                if (tkaninaCode.replace(/ /g, '') != $(this).val().replace(/\d+/g, '').replace(/ /g, '')) {
                                    $(this).parent().hide();
                                    //$(this).next('label').hide();
                                }
                            });



                            $("#tkaninaClass button ").click(function() {
                                const opTk = $(this).val();

                                $("#tkaninaClass .result").text(opTk); //назва тканини в опис

                                $(" .single-color input").each(function(index, element) {
                                    let nn = $(this).val().replace(/\d+/g, '').replace(/ /g, '')
                                    //console.log(nn + '==' + opTk)

                                    $(this).parent().hide()

                                    if (opTk === nn) {
                                       $(this).parent().toggle();
                                    } else {
                                        $(this).parent().hide();
                                    }
                                    //console.log( $(this).val(),  $(this).next('label').hide() );
                                });
                            });
                        });