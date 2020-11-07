/* wow js */
new WOW().init();


/*--------------------------------------------- 
            preload animation
----------------------------------------------*/

var w = 1;
var prg = document.getElementById('progress');
var percent = document.querySelector('#progress .progress__percent span');
var pgb = document.querySelector('#progress .progress__bar');
var intervalId = null;
var Running = document.querySelector('#progress .progress__person span');
var widthOfRunning = document.querySelector('#progress .progress__person span i').offsetWidth - 10;
Running.style.marginLeft = -widthOfRunning + "px";

var pg = function () {
    if (w <= 100) {
        percent.innerHTML = w + "%";
        pgb.style.width = w + '%';
        var x = (-widthOfRunning + ++w / 100 * Running.offsetWidth) + "px";
        Running.style.marginLeft = x;
    } else {
        clearInterval(intervalId);
    }
}
setInterval(pg, 30);
setTimeout(function () {
    prg.style.display = 'none';
    document.querySelector('.banner .banner__text-title').classList.add('bounceInLeft');
    document.querySelector('.banner .banner__text-des').classList.add('bounceInRight');
    document.querySelector('.banner .banner-img img').classList.add('bounceInUp');
}, 3100);



/*--------------------------------------------- 
            header-menu
----------------------------------------------*/

var menu = document.getElementById('header__menu');
var close = document.querySelector('#mask .close');
// open menu
menu.onclick = function () {
    document.querySelector('#mask').classList.remove('hide');
}
// close menu
document.querySelector('#mask .close').onclick = function () {
    document.querySelector('#mask').classList.add('hide');
}


/*--------------------------------------------- 
    scroll will change the header
----------------------------------------------*/

var scrollable = false;
window.onscroll = function () {
    var aTag = document.querySelectorAll('.header .header-links a');
    if (window.scrollY != 0 && scrollable == false) {
        scrollable = true;
        document.querySelector('.header').style.backgroundColor = 'white';
        document.querySelector('.header .logo img').src = 'imgs/logo1.png';
        for (let i = 0; i < aTag.length; i++) {
            aTag[i].style.color = '#16276d';
        }
        document.querySelector('.header i').style.color = 'black';
        document.querySelector('.header').style.borderBottomColor = '#ebebeb';
    } else if (window.scrollY == 0) {
        scrollable = false;
        document.querySelector('.header').style.backgroundColor = 'transparent';
        document.querySelector('.header .logo img').src = 'imgs/logo.png';
        for (let i = 0; i < aTag.length; i++) {
            aTag[i].style.color = 'white';
        }
        document.querySelector('.header i').style.color = 'white';
        document.querySelector('.header').style.borderBottomColor = 'transparent';

    }
}


/*--------------------------------------------- 
   change the content of the banner
----------------------------------------------*/

var el = document.querySelectorAll('.banner-text ul li');
var curIndex = 0;
for (let e = 0; e < el.length; e++) { // add event to each element (li tag)
    el[e].addEventListener('click', () => {
        console.log("?")
        el[curIndex].classList.toggle('selected');
        el[e].classList.toggle('selected');
        curIndex = e;
        changeBanner();
    })
}

// contents of the banner
var db = [{
    h2_1: 'Doanh nghiệp',
    h2_2: 'Phần mềm quản lý',
    p: 'Nếu bạn đang tìm kiếm một đối tác uy tín, tận tâm, nơi bạn có thể đặt trọn niềm tin để phát triển phần mềm chuyên nghiệp, chắc chắn chúng tôi là quyết định chính xác nhất của bạn. Hợp tác và cùng thành công!',
    img: 'imgs/banner1.png',
    bg: 'imgs/banner1_1.png'
},
{
    h2_1: 'Viễn thông',
    h2_2: 'Dịch vụ GTGT',
    p: 'Dịch vụ cho phép khách hàng là thuê bao di động đăng ký để nhận nội dung GTGT theo định kỳ: theo ngày, tuần,hoặc tháng một cách tự động.',
    img: 'imgs/banner2.png',
    bg: 'imgs/banner2_2.png'
},
{
    h2_1: 'Y tế',
    h2_2: 'Sản phẩm y tế',
    p: ' Nhà thuốc GPP - Phần mềm quản lý nhà thuốc PHỔ BIẾN NHẤT với hơn 100.000 nhà thuốc đang sử dụng. ',
    img: 'imgs/banner3.png',
    bg: 'imgs/banner3_3.png'
},
{
    h2_1: 'OutSourcing',
    h2_2: 'Dịch vụ IT Ourscing',
    p: 'Công ty chuyên đảm nhận thực hiện việc quản lý, lập trình và điều hành mảng công nghệ thông tin (IT) cho các doanh nghiệp',
    img: 'imgs/banner4.png',
    bg: 'imgs/banner1_1.png'
},

]

function changeBanner() {
    document.querySelector('.banner-text h2:first-child').innerHTML = db[curIndex].h2_1;    
    document.querySelector('.banner-text h2:last-child').innerHTML = db[curIndex].h2_2;
    document.querySelector('.banner-text p').innerHTML = db[curIndex].p;
    document.querySelector('.banner-img img').src = db[curIndex].img;
    document.querySelector('.banner-img').style.backgroundImage = "url(" + db[curIndex].bg + ")";
}

/* ----------- ~~~~ ----------- */

document.querySelector('.view-more-btn').onclick = function() {
    swal( {
        text: 'I will update you soon!',
        icon: 'warning'
    })
}
