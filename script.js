var banner = document.createElement('div')
banner.setAttribute('class', 'banner')
var TitleBox = document.createElement('div')
var Title = document.createElement('h1')
Title.innerText = 'VANILLA'
TitleBox.append(Title);
banner.append(TitleBox);
document.querySelector('main').append(banner);
var Title_2 = document.createElement('h1')
Title_2.innerHTML = '<span>Bootstrap</span> v4.2.1 Theme'
TitleBox.append(Title_2);
var bannerbtn = document.createElement('button')
bannerbtn.setAttribute('class', 'bannerbtn')
bannerbtn.innerHTML = `DISCOVER MORE`
TitleBox.append(bannerbtn);
//...................

const About_Vanila_Box = document.createElement('div');
About_Vanila_Box.classList.add('About_Vanila_Box');
document.querySelector('main').append(About_Vanila_Box)
const About_Info = document.createElement('div');
About_Info.classList.add('About_Info');
About_Info.innerHTML = `
<h1>More About Vanilla</h1>
<p>
Vanilla is free HTML CSS template with Bootstrap<br>
v4.2.1 and you can apply this theme for your sites.<br> 
Please share our <a href = "#">website</a> to your friends or<br> collegues. Thank you.
</p>
<ul>
<li> Praesent porta urna id eros</li>
<li>Curabitur consectetur malesuada</li>
<li>Nam pretium imperdiet enim</li>
<li>Sed viverra arcu non nisi efficitur</li>
</ul>
<button>LEARN MORE ABOUT US</button>
`
About_Vanila_Box.append(About_Info)

const About_Service_Data = [

    {
        name: 'Classic Modern Design',
        info: 'Sed lacinia ligula est, at venenatis ex iaculis quis. Morbi sollicitudin nulla eget odio pellentesque.'
    },

    {
        name: ' Unique & Creative Ideas',
        info: ' Sed lacinia ligula est, at venenatis ex iaculis quis. Morbi sollicitudin nulla eget odio pellentesque.'
    },


    {
        name: 'Effective Team Work',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ligula est, at venenatis ex iaculis quis.'
    },


    {
        name: 'Effective Team Work',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ligula est, at venenatis ex iaculis quis.'
    }
];

var About_Service_box = document.createElement('div');
About_Service_box.classList.add('About_service_box')
document.querySelector('.About_Vanila_Box').append(About_Service_box)

About_Service_Data.map((e) => {
    const About_Service = document.createElement('div');
    About_Service.classList.add('About_Service')
    About_Service.innerHTML = `
    <h3>${e.name}</h3>
    <p>${e.info}</p>`
    document.querySelector('.About_service_box').append(About_Service)
})

var Slider_Container = document.createElement('div')
Slider_Container.classList.add('Slider_Container')
var mySwiper = document.createElement('div');
mySwiper.setAttribute('class', 'swiper mySwiper');
var swiper_wrapper = document.createElement('div');
swiper_wrapper.classList.add('swiper-wrapper')
mySwiper.append(swiper_wrapper)
Slider_Container.append(mySwiper)
document.querySelector('main').append(Slider_Container)


const About_Slider_Data = [
    {
        img: 'https://templatemo.com/templates/templatemo_526_vanilla/img/6th-item.jpg',
        name: 'Healthi Milkshake',
        price: '$77.00'
    },
    {
        img: 'https://templatemo.com/templates/templatemo_526_vanilla/img/2nd-item.jpg',
        name: 'Antique Decoration Photo',
        price: '$84.50'
    },
    {
        img: 'https://templatemo.com/templates/templatemo_526_vanilla/img/1st-item.jpg',
        name: 'Awesome Notes Book',
        price: ' $18.00'
    },
    {
        img: 'https://templatemo.com/templates/templatemo_526_vanilla/img/3rd-item.jpg',
        name: 'Work Hend Bag',
        price: '$36.00',
    },
    {
        img: '	https://templatemo.com/templates/templatemo_526_vanilla/img/4th-item.jpg',
        name: 'Smart Watch',
        price: '$45.00',
    },
    {
        img: 'https://templatemo.com/templates/templatemo_526_vanilla/img/5th-item.jpg',
        nme: 'PC Tablet Draw',
        price: '$63.00',
    }
]

About_Slider_Data.map((e)=>{
    console.log(e);
    var slider = document.createElement('div');
    slider.classList.add('swiper-slide');
    slider.innerHTML = `
    <img src = '${e.img}'/>
    <div>
    <h3>${e.name}</h3>
    <span>${e.price}</span>
    </div>
    `
    swiper_wrapper.append(slider)
    
})

var Blog_Conteiner = document.createElement('div');
Blog_Conteiner.classList.add('Blog_Conteiner');


var Blog_Box = document.createElement('div');
Blog_Box.classList.add('Blog_box');
Blog_Box.innerHTML=`
<p>Please do not re-distribute our template ZIP file on your template collection sites. 
You can make a screenshot and a link back to our website. This template can be used for personal or commercial purposes by end-users.</p>
`
Blog_Conteiner.append(Blog_Box)

var Buttons_Box = document.createElement('div')
Buttons_Box.classList.add('Buttons_Box')    
Buttons_Box.innerHTML=`
<button id = "btn_1"> 2008 - 2014</button>
<button id = "btn_2" > 2014 - 2016</button>
<button id = "btn_3" > 2016 - 2019</button>
<button id = "btn_4" > 2019 - NOW</button>
`
Blog_Conteiner.append(Buttons_Box)
Buttons_Box.querySelector('#btn_2').onclick = ()=>{
    Buttons_Box.querySelector('#btn_2').style.borderColor = '#ff7d27'
    Buttons_Box.querySelector('#btn_1').style.borderColor = 'white'
    Buttons_Box.querySelector('#btn_3').style.borderColor = 'white'
    Buttons_Box.querySelector('#btn_4').style.borderColor = 'white'
    Blog_Box.style.backgroundImage = 'url(https://templatemo.com/templates/templatemo_526_vanilla/img/2nd-tab.jpg)'
    Blog_Box.querySelector('p').textContent = `
    Aliquam eu ultrices risus, sed condimentum diam. Duis risus nulla, elementum vitae nisi a, ornare maximus nisl. Morbi et vehicula est.
     Cras at vulputate justo. Cras eu nulla metus. Ut et pretium velit. Pellentesque at neque tristique dui tempor venenatis.
    `   
}
Buttons_Box.querySelector('#btn_1').onclick = ()=>{
    Buttons_Box.querySelector('#btn_1').style.borderColor = '#ff7d27'
    Buttons_Box.querySelector('#btn_2').style.borderColor = 'white'
    Buttons_Box.querySelector('#btn_3').style.borderColor = 'white'
    Buttons_Box.querySelector('#btn_4').style.borderColor = 'white'
    Blog_Box.style.backgroundImage = 'url(https://templatemo.com/templates/templatemo_526_vanilla/img/1st-tab.jpg)'
    Blog_Box.querySelector('p').textContent = `
   Please do not re-distribute our template ZIP file on your template collection sites. You can make a screenshot and a link back to our website.
    This template can be used for personal or commercial purposes by end-users.
    `   
}

Buttons_Box.querySelector('#btn_3').onclick = ()=>{
    Buttons_Box.querySelector('#btn_3').style.borderColor = '#ff7d27'
    Buttons_Box.querySelector('#btn_1').style.borderColor = 'white'
    Buttons_Box.querySelector('#btn_2').style.borderColor = 'white'
    Buttons_Box.querySelector('#btn_4').style.borderColor = 'white'
    Blog_Box.style.backgroundImage = 'url(https://templatemo.com/templates/templatemo_526_vanilla/img/3rd-tab.jpg)'
    Blog_Box.querySelector('p').textContent = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ligula est, at venenatis ex iaculis quis.
   Morbi sollicitudin nulla eget odio pellentesque, sed cursus diam iaculis.
    `   
}

Buttons_Box.querySelector('#btn_4').onclick = ()=>{
    Buttons_Box.querySelector('#btn_4').style.borderColor = '#ff7d27'
    Buttons_Box.querySelector('#btn_1').style.borderColor = 'white'
    Buttons_Box.querySelector('#btn_2').style.borderColor = 'white'
    Buttons_Box.querySelector('#btn_3').style.borderColor = 'white'
    Blog_Box.style.backgroundImage = 'url(https://templatemo.com/templates/templatemo_526_vanilla/img/4th-tab.jpg)'
    Blog_Box.querySelector('p').textContent = `
 Duis risus nulla, elementum vitae nisi a, ornare maximus nisl. Morbi et vehicula est. Cras at vulputate justo. 
 Cras eu nulla metus. Ut et pretium velit. Pellentesque at neque tristique.
    `   
}
document.querySelector('main').append(Blog_Conteiner);

Contact_Box = document.createElement('div')

Contact_Box.innerHTML = `

<div>
<input type="text" placeholder="Your name..."/>
<input type="text" placeholder="Your email..."/>
<textarea placeholder="your message..."></textarea>
<button>send message</button>
</div>
<div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197183.8373802372!2d-1.9415093691103689!3d6.781986417238027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85efd%3A0xb8d1e0b88af1f0f5!2sKumasi+Central+Market!5e0!3m2!1sen!2sth!4v1532967884907"
 width="100%" height="390" frameborder="0" style="border:0" allowfullscreen=""></iframe>
</div>
`
Contact_Box.setAttribute('class', 'Contact_Box')
document.querySelector('main').append(Contact_Box)

var footer = document.createElement('footer')

footer.innerHTML =`
    <button>BACK TO TOP</button>
    <ul>
    <li><a>
    <i class="fa-brands fa-facebook-f"></i>
    </a></li>
    <li><a>
   <i class="fa-brands fa-twitter"></i>
    </a></li>
    <li><a>
   <i class="fa-brands fa-linkedin-in"></i>
    </a></li>
    <li><a>
    <i class="fa-brands fa-google"></i>
    </a></li>
    <li><a>
<i class="fa-solid fa-basketball"></i>
    </a></li>
    </ul>
    <p>Copyright © 2019 Company Name - Design: <a>TemplateMo</a></p>

`
document.querySelector('main').append(footer)