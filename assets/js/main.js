
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 24
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }


  let backtotop2 = select('.back-to-top2')
  if (backtotop2) {
    const toggleBacktotop2 = () => {
      if (window.scrollY > 100) {
        backtotop2.classList.add('active')
      } else {
        backtotop2.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop2)
    onscroll(document, toggleBacktotop2)
  }

  let backtotop3 = select('.back-to-top3')
  if (backtotop3) {
    const toggleBacktotop3 = () => {
      if (window.scrollY > 100) {
        backtotop3.classList.add('active')
      } else {
        backtotop3.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop3)
    onscroll(document, toggleBacktotop3)
  }



  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /*nuevos escripts*/



  const contenedorTarifas=document.getElementById("contenedorTarifas")
  const contenedorImg=document.getElementById("contenedorImg")
  const habi1 = document.getElementById("habi1")
  const habi2 = document.getElementById("habi2")
  const habi3 = document.getElementById("habi3")
  const habi4 = document.getElementById("habi4")
  const habi5 = document.getElementById("habi5")


  habi1.addEventListener("click",()=>{
    contenedorImg.innerHTML='<button id="fotosContButton"><img src="./assets/img/botonVolver.png" alt=""></button><img src="./assets/img/imgHabi/colibriPrivada.jpg" alt=""><p>HABITACION PRIVADA CON BAÑO</p>'
    contenedorTarifas.classList.add("none")
    contenedorImg.classList.remove("none")
    contenedorImg.classList.add("fotosCont")

    
    const buttonCloseImg=document.getElementById("fotosContButton")
    buttonCloseImg.addEventListener("click",()=>{
      contenedorImg.classList.add("none")
      contenedorTarifas.classList.remove("none")
     
    })
  })

  habi2.addEventListener("click",()=>{
    contenedorImg.innerHTML='<button id="fotosContButton"><img src="./assets/img/botonVolver.png" alt=""></button><img src="./assets/img/imgHabi/familiarPublico.jpg" alt=""><p>HABITACION FAMILIAR BAÑO PUBLICO</p>'
    contenedorTarifas.classList.add("none")
    contenedorImg.classList.remove("none")
    contenedorImg.classList.add("fotosCont")

    
    const buttonCloseImg=document.getElementById("fotosContButton")
    buttonCloseImg.addEventListener("click",()=>{
      contenedorImg.classList.add("none")
      contenedorTarifas.classList.remove("none")
     
    })
  })

  habi3.addEventListener("click",()=>{
    contenedorImg.innerHTML='<button id="fotosContButton"><img src="./assets/img/botonVolver.png" alt=""></button><img src="./assets/img/imgHabi/familiarPrivada.jpg" alt=""><p>HABITACION FAMILIAR CON BAÑO</p>'
    contenedorTarifas.classList.add("none")
    contenedorImg.classList.remove("none")
    contenedorImg.classList.add("fotosCont")

    
    const buttonCloseImg=document.getElementById("fotosContButton")
    buttonCloseImg.addEventListener("click",()=>{
      contenedorImg.classList.add("none")
      contenedorTarifas.classList.remove("none")
     
    })
  })


  /*traducciones*/
  const carga_idiomas= ()=>{
    const idiom=localStorage.getItem('idioma');
    console.log(idiom);
    if (idiom=="ingles") {
      document.getElementById('titulo').textContent = "THE BRIDGE ECOLODGE"
      document.getElementById('nav1').textContent = "Home"
      document.getElementById('nav2').textContent = "Hostal"
      document.getElementById('nav3').textContent = "Transportation"
      document.getElementById('nav4').textContent = "Rates"
      document.getElementById('nav5').textContent = "Images"
      document.getElementById('nav6').textContent = "Contacts"
      document.getElementById('texto1').textContent = "We look forward to sharing some time with you in this beautiful setting, there are 6 acres of gardens, wild jungle with a river and natural springs. We invite you to relax, explore and discover Colombia's incredible natural diversity in the flowers, fruit trees and birds that thrive here. The name, ECOLODGE EL PUENTE, was inspired by the elegant 4-arch bridge (puente) at the entrance that was once part of a railway line. It was only used once before the country fell into civil war 60 years ago and has never been used again. More evidence can be seen at the end of the road and several tunnels near the Santa Rita waterfalls. The property is owned by a Canadian family, his Colombian wife and their family, it was purchased in 2016, extensively renovated and opened in 2017. We hope you enjoy your time here, as we do."
      document.getElementById('titleSC').textContent = "Complementary services"
      document.getElementById('pSC').textContent = "Breakfast- served 7-10am outside reception- fresh local coffee available at 6-50. Guest kitchen- located in the log house- from 8:00 a.m. to 5:00 p.m. to 9:00 p.m. Wifi network Puente De La Explanación password salento123. Luggage storage- Luggage can be left at the reception before check-in at 2 p.m. and after check out at 11 am. Parking- Free secure parking, gate locked at night with light and security camera. Clothesline- covered drying lines of the log house, feel free to use them. Bonfire- on request if weather permits. While you are staying with us you will be covered by our courtesy insurance policy (health and valuables)."
      document.getElementById('titleSdad').textContent = "SECURITY"
      document.getElementById('pSdad').textContent = "Boquia is very safe, a family community, everyone knows each other and is very friendly. The road is well lit at night. So far, in 5 years we have never had a theft or problem here. The dogs also act as a visual impediment, but in fact they are big babies, they bark when you arrive and they will greet you, don't be scared, they don't bite, they are very trustworthy with people, we only ask you not to run because they think it's a game and could hurt you. We also have a camera system that records the activities of the last two months. Lockers are provided in bedrooms, we also have a safe at reception if you want to store any valuables for added security."
      document.getElementById('titleTC').textContent = "COFFEE TOURS"
      document.getElementById('pTC').innerHTML = "See how coffee is grown, harvested, roasted- savor freshly brewed coffee for that We recommend the following coffee farms.<br >.Don Elias<br >.La Arzacia<br >.El ocaso<br >- Our horse guide usually goes here<br >- English and Spanish, excursions on request Ocaso travel times approx. 1 hour and a half, you can go at any time of the day, until 6 in the afternoon. It is a rather interesting activity to be carried out here in Salento, it is one of the characteristics that Quindío has, which is coffee and the information they provide us is always very complete."
      document.getElementById('titleSA').textContent="ADDITIONAL SERVICES"
      document.getElementById('servicios').innerHTML='-Laundry- 20,000 per load. Please allow up to 24 hours to dry depending on the weather as we dry it naturally. <br> -Mountain bikes- 2 bikes 40,000 (each) per day. <br> -Bar- club colombia <i style="font-size: 15px; color: black">(6.000)</i> - gold, red and black- wine red <i style="font-size: 15px; color: black">(40,000)</i>, better and cheaper than in salento- glass of wine <i style="font-size: 15px; color: black">(12.000)</i>- Ron Cartavio <i style="font-size: 15px; color: black">(60,000)</i>- shot of rum <i style="font-size: 15px; color: black">(6,000)</ <br> -Breakfast- if you arrive before check-in or are very hungry, you will be charged 12,000 if you order breakfast. <br>-dinner- vegetarian or with meat <i style="font-size: 15px; color: black">(3 hours in advance as it is served at 7PM)</i> 25,000. <br>'
      document.getElementById('titleTR').textContent="TRANSPORTATION"
      document.getElementById('pTR').innerHTML="<b> -Private transportation:</b> <br> *Salento 20,000 <br> *Armenia airport 140,000 <br> *Armenia terminal 100,000 <br> *Pereira airport 160,000 <br> *pereira terminal 140,000 <br> *santa rosa 300,000 <br> *cocora 60,000 <br> *Filandia 70,000 <br>"
      document.getElementById('pTR2').innerHTML="<b> -Public transportation:</b> <br> *SALENTO- usually the bus runs every 20 minutes, <br> it costs 1,500 from boquia to Salento, it's 10 minutes until<br> the main park. the first bus leaves at 6:00-6.30<br> A.M. and The last bus leaves at 9:00 p.m.<br> *ARMENIA- On this side of the road, look for the <br> sign in the driver's window that says for <br> Salento since they also pass to Pereira, it costs 3,900<br> From Boquia and from Salento it costs 5,500, to Armenia <br> with a process of 40-50 minutes.<br> *PEREIRA- On this side of the road, without fixed hours, so <br> general every hour and a half, $8,000, 50 minutes to the <br> terminal transportation.<br> *Medellin- take the bus directly from Salento<br> (usually medium to large size bus). 8:30 a.m.<br> 4:30 pm. 8:30 pm. The salento bus station is located<br> at the entrance of the town before the fire station.<br>"
      document.getElementById('titleTfas').textContent="Rates"
      document.getElementById('pTfas').textContent="These are the rates for our rooms."
      document.getElementById('pTfas2').innerHTML='<i>(40,000 per person addition)</i>'
      document.getElementById('pTfas3').innerHTML='PRIVATE ROOM WITH BATHROOM (CAPACITYX2)'
      document.getElementById('pTfas4').innerHTML='PUBLIC BATHROOM GROUP ROOM (CAPACITYX9)'
      document.getElementById('pTfas5').innerHTML='FAMILY ROOM WITH BATHROOM (CAPACITYX5)'
      document.getElementById('pTfas6').innerHTML='PRIVATE TENT (CAPACITYX2)'
      document.getElementById('pTfas7').innerHTML='ZENZU CABIN (CAPACITYX2)'
      document.getElementById('titlePlio').innerHTML='Images'
      document.getElementById('pPlio').innerHTML='some images for you to know us more <br> <i> (choose the section of images you want to see) </i>'
      document.getElementById('filtHabi').innerHTML='bedrooms'
      document.getElementById('filtPaije').innerHTML='landscape photos'
      document.getElementById('titleContact').innerHTML='Contacts'
      document.getElementById('pContact').innerHTML='If you want to make a reservation please contact us to advise you.'
      document.getElementById('titleDir').innerHTML='Our address'
      document.getElementById('titleTel').innerHTML='phone number'

      btnIn.classList.remove("active")
      btnIn2.classList.add("active")
      
    }
  }
  window.onload=function() {
    carga_idiomas()
  }
  const btnIn = document.getElementById('btn-in')
  const btnIn2 = document.getElementById('btn-in2')
  const cambio_A_Ingles = () => {

    localStorage.setItem('idioma', 'ingles');

    btnIn.classList.remove("active")
    btnIn2.classList.add("active")

    document.getElementById('titulo').textContent = "THE BRIDGE ECOLODGE"
    document.getElementById('nav1').textContent = "Home"
    document.getElementById('nav2').textContent = "Hostal"
    document.getElementById('nav3').textContent = "Transportation"
    document.getElementById('nav4').textContent = "Rates"
    document.getElementById('nav5').textContent = "Images"
    document.getElementById('nav6').textContent = "Contacts"
    document.getElementById('texto1').textContent = "We look forward to sharing some time with you in this beautiful setting, there are 6 acres of gardens, wild jungle with a river and natural springs. We invite you to relax, explore and discover Colombia's incredible natural diversity in the flowers, fruit trees and birds that thrive here. The name, ECOLODGE EL PUENTE, was inspired by the elegant 4-arch bridge (puente) at the entrance that was once part of a railway line. It was only used once before the country fell into civil war 60 years ago and has never been used again. More evidence can be seen at the end of the road and several tunnels near the Santa Rita waterfalls. The property is owned by a Canadian family, his Colombian wife and their family, it was purchased in 2016, extensively renovated and opened in 2017. We hope you enjoy your time here, as we do."
    document.getElementById('titleSC').textContent = "Complementary services"
    document.getElementById('pSC').textContent = '<p id="pSC">Breakfast- served from 7:00am to 10:00am in the dining room off reception- fresh local coffee available from 6:50am. Guest kitchen- located in the log house- from 8:00 a.m. to 5:00 p.m. to 9:00 p.m. Wifi network Puente De La Explanación password salento123. Luggage storage- Luggage can be left at the reception before check-in at 2 p.m. and after check out at 11 am. Parking- Free secure parking, gate locked at night with light and security camera. Clothesline- covered drying lines of the log house, feel free to use them. Bonfire- on request if weather permits. While you are staying with us you will be covered by our courtesy insurance policy (health and valuables).</p>'
    document.getElementById('titleSdad').textContent = "SECURITY"
    document.getElementById('pSdad').textContent = "Boquia is very safe, a family community, everyone knows each other and is very friendly. The road is well lit at night. So far, in 5 years we have never had a theft or problem here. The dogs also act as a visual impediment, but in fact they are big babies, they bark when you arrive and they will greet you, don't be scared, they don't bite, they are very trustworthy with people, we only ask you not to run because they think it's a game and could hurt you. We also have a camera system that records the activities of the last two months. Lockers are provided in bedrooms, we also have a safe at reception if you want to store any valuables for added security."
    document.getElementById('titleTC').textContent = "COFFEE TOURS"
    document.getElementById('pTC').innerHTML = '<p id="pTC">See how coffee is grown, harvested, roasted- taste freshly brewed coffeeFor this we recommend the Finca de Don Elías, where in fact we have links and you could ask at reception about tickets that cost 25,000 thousand pesos.<br> -Our horse guide usually goes here<br> -English and Spanish, excursions on request Ocaso<br> travel times approx. from 40 minutes to 50 minutes, they can go at any time of the day, until 6 pm.<br> It is a rather interesting activity to be carried out here in Salento, it is one of the <br>characteristics that Quindío has, which is coffee, and the information they provide us is always very complete.</p>'
    document.getElementById('titleSA').textContent="ADDITIONAL SERVICES"
    document.getElementById('servicios').innerHTML='<p id="services">-Laundry- 20,000 per load. Please allow up to 24 hours to dry depending on the weather as we dry it naturally. <br>-Mountain bikes- 2 bikes 40,000 (each) per day. <br>-Bar- club colombia <i style="font-size: 15px; color: black">(6.000)</i>- gold, red and black- wine red <i style="font-size: 15px; color: black">(40,000)</i>,better and cheaper than in salento- glass of wine <i style="font-size: 15px; color: black">(12.000)</i>-Ron Cartavio <i style="font-size: 15px; color: black">(60,000)</i>- shot of rum <i style="font-size: 15px; color: black">(6,000)</ <br>-Breakfast- if you arrive before check-in or are very hungry, you will be charged 12,000 if you ask for breakfast. <br>-dinner- vegetarian or with meat <i style="font-size: 15px; color: black">(3 hours in advance as it is served at 7PM)</i> 25,000 pesos. <br></p>'
    document.getElementById('titleTR').textContent="TRANSPORTATION"
    document.getElementById('pTR').innerHTML="<b> -Private transportation:</b> <br> *Salento 20,000 <br> *Armenia airport 140,000 <br> *Armenia terminal 100,000 <br> *Pereira airport 160,000 <br> *pereira terminal 140,000 <br> *santa rosa 300,000 <br> *cocora 60,000 <br> *Filandia 70,000 <br>"
    document.getElementById('pTR2').innerHTML="<b> -Public transportation:</b> <br> *SALENTO- usually the bus runs every 20 minutes, <br> it costs 1,500 from boquia to Salento, it's 10 minutes until<br> the main park. the first bus leaves at 6:00-6.30<br> A.M. and The last bus leaves at 9:00 p.m.<br> *ARMENIA- On this side of the road, look for the <br> sign in the driver's window that says for <br> Salento since they also pass to Pereira, it costs 3,900<br> From Boquia and from Salento it costs 5,500, to Armenia <br> with a process of 40-50 minutes.<br> *PEREIRA- On this side of the road, without fixed hours, so <br> general every hour and a half, $8,000, 50 minutes to the <br> terminal transportation.<br> *Medellin- take the bus directly from Salento<br> (usually medium to large size bus). 8:30 a.m.<br> 4:30 pm. 8:30 pm. The salento bus station is located<br> at the entrance of the town before the fire station.<br>"
    document.getElementById('titleTfas').textContent="Rates"
    document.getElementById('pTfas').textContent="These are the rates for our rooms."
    document.getElementById('pTfas2').innerHTML='<i>(40,000 per person addition)</i>'
    document.getElementById('pTfas3').innerHTML='PRIVATE ROOM WITH BATHROOM (CAPACITYX2)'
    document.getElementById('pTfas4').innerHTML='PUBLIC BATHROOM GROUP ROOM (CAPACITYX9)'
    document.getElementById('pTfas5').innerHTML='FAMILY ROOM WITH BATHROOM (CAPACITYX5)'
    document.getElementById('pTfas6').innerHTML='PRIVATE TENT (CAPACITYX2)'
    document.getElementById('pTfas7').innerHTML='ZENZU CABIN (CAPACITYX2)'
    document.getElementById('titlePlio').innerHTML='Images'
    document.getElementById('pPlio').innerHTML='some images for you to know us more <br> <i> (choose the section of images you want to see) </i>'
    document.getElementById('filtHabi').innerHTML='bedrooms'
    document.getElementById('filtPaije').innerHTML='landscape photos'
    document.getElementById('titleContact').innerHTML='Contacts'
    document.getElementById('pContact').innerHTML='If you want to make a reservation please contact us to advise you.'
    document.getElementById('titleDir').innerHTML='Our address'
    document.getElementById('titleTel').innerHTML='phone number'
   }
  btnIn.addEventListener('click', cambio_A_Ingles)
  const cambio_A_Español = () => {

    localStorage.setItem('idioma', 'español');
    window.location.reload()
    btnIn2.classList.remove("active")
    btnIn.classList.add("active")
   }
  btnIn2.addEventListener('click', cambio_A_Español)



  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

})()