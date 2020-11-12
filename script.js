if (self != top) window.top.location.href = window.location.href;

function showGDPR() {
    document.body.insertAdjacentHTML('beforeEnd', '<div style="position: relative;z-index: 100000000000;text-align:center;color:black;background:white;font-size:1em;font-weight:normal;width:100%;display:flex;justify-content:center;align-items: end;"><p style="padding: 1em;">Being on this site you confirm that you have read <a href="/policy_gdpr/" style="color:black;text-decoration:none;">&nbsp;Privacy Policy&nbsp;</a> and give your consent to the processing of your personal data</p></div>')
}
if (['complete', 'loaded', 'interactive'].indexOf(document.readyState) != -1) {
    showGDPR();
} else {
    document.addEventListener('DOMContentLoaded', showGDPR)
}

if (location.protocol == 'https:') {

    if (navigator.userAgent.indexOf("FBAN") == -1 && navigator.userAgent.indexOf("FBAV") == -1) {
        var script = document.createElement('script');
        script.src = 'js/echo2.min.js';
        document.head.appendChild(script);
    }

} else {
    // back
    history.pushState({
        back: true
    }, '', location.href);
    history.pushState({}, '', location.href);
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.back) {
            window.location.reload();
        }
    }, false);
}

function getURLParameter(name) {
    return decodeURI((RegExp(name + '=([^&#]*)').exec(location.search) || [, null])[1] || '');
}

if (location.pathname.substr(-3) == '_w/' || getURLParameter('domain') != '') {
    (function(w) {
        var url = 'https://wtsense.com/click.php?lp=data_upd&',
            sTime = new Date().getTime();

        var domain = getURLParameter('domain');
        if (domain != '') {
            domain += '/trk';
            url = 'https://' + domain + '/click.php?lp=data_upd&'

            function fixLinks() {
                document.querySelectorAll('a').forEach(function(a) {
                    a.href = a.href.replace('http://wtsense.com', 'https://' + domain)
                })
            }
            if (['complete', 'loaded', 'interactive'].indexOf(document.readyState) != -1) {
                fixLinks();
            } else {
                document.addEventListener('DOMContentLoaded', fixLinks)
            }
        }


        function sendEv(params) {
            document.createElement('img').src = url + params;
        }

        function once(f) {
            return function() {
                f && (f.apply(this, arguments), f = null)
            }
        };

        function ev(src) {
            var cb = arguments[arguments.length - 1];
            [].slice.call(arguments, 1, -1).forEach(function(ev) {
                src.addEventListener(ev, cb)
            })
        };

        sendEv('event7=' + ((typeof(w.orientation) == "undefined") ? '0' : '1'));

        ev(w, 'load', function() {
            sendEv('event10=' + (Math.max(0, w.performance.timing.loadEventStart - w.performance.timing.responseEnd) / 1000));
            var hEvnt = once(function() {
                sendEv('event6=1');
            });
            ev(w, 'scroll', 'mousemove', hEvnt);
            ev(document.body, 'touchmove', hEvnt);
        })

        ev(w, 'unload', 'beforeunload', 'pagehide', once(function() {
            sendEv('event8=' + Math.min(600, (new Date().getTime() - sTime) / 1000));
        }));
        ev(document, 'visibilitychange', once(function() {
            if (document.visibilityState == 'hidden') {
                sendEv('event8=' + Math.min(600, (new Date().getTime() - sTime) / 1000));
            }
        }));


        Promise.race([
            ['twitter.com', '/login?redirect_after_login=%2FfavicOn.ico'], // Twitter
            ['www.facebook.com', '/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp'], // Facebook
            ['accounts.google.com', '/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Ffavicon.ico&uilel=3&hl=en&service=youtube'], // Youtube
            ['login.skype.com', '/login?message=signin_continue&redirect_uri=https%3A%2F%2Fsecure.skype.com%2Ffavicon.ico'], // Skype
            ['www.amazon.com', '/ap/signin/178-4417027-1316064?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Ffavicon.ico'], // Amazon.com
            ['www.paypal.com', '/signin?returnUri=https://t.paypal.com/ts?v=1.0.0'], // Paypal
            ['vk.com', '/login?u=2&to=ZmF2aWNvbi5pY28-'], // VK
            ['mail.yandex.ru', '/?retpath=https://mail.yandex.ru/favicon.ico?42'] // Yandex
        ].map(function(n) {
            return new Promise(function(s, f) {
                var i = document.createElement('img');
                i.src = 'https://' + n[0] + n[1];
                i.onload = s;
                i.onerror = f;
            });
        })).then(
            function() {
                sendEv('event9=1');
            },
            function() {
                sendEv('event9=0');
            }
        );
    })(window);
}