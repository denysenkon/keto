// if (self != top) window.top.location.href = window.location.href;

// function showGDPR() {
//     document.body.insertAdjacentHTML('beforeEnd', '<div style="position: relative;z-index: 100;text-align:center;color:black;background:white;font-size:1em;font-weight:normal;width:100%;display:flex;justify-content:center;align-items: end;"><p style="padding: 1em;">Being on this site you confirm that you have read <a href="https://flexydox.site/policy_gdpr/" style="color:black;text-decoration:none;">&nbsp;Privacy Policy&nbsp;</a> and give your consent to the processing of your personal data</p></div>')
// }
// if (['complete', 'loaded', 'interactive'].indexOf(document.readyState) != -1) {
//     showGDPR();
// } else {
//     document.addEventListener('DOMContentLoaded', showGDPR)
// }

// if (location.protocol == 'https:') {

//     if (navigator.userAgent.indexOf("FBAN") == -1 && navigator.userAgent.indexOf("FBAV") == -1) {
        // var script = document.createElement('script');
        // script.src = '/echo2.min.js';
        // document.head.appendChild(script);
//     }

// } else {
    // back
//     history.pushState({
//         back: true
//     }, '', location.href);
//     history.pushState({}, '', location.href);
//     window.addEventListener('popstate', function(event) {
//         if (event.state && event.state.back) {
//             window.location.reload();
//         }
//     }, false);
// }

// function getURLParameter(name) {
//     return decodeURI((RegExp(name + '=([^&#]*)').exec(location.search) || [, null])[1] || '');
// }

// if (location.pathname.substr(-3) == '_w/' || getURLParameter('domain') != '') {
//     (function(w) {
//         var url = '//flexydox.site/policy_gdpr/',
//             sTime = new Date().getTime();

//         var domain = getURLParameter('domain');
//         if (domain != '') {
//             domain += '/trk';
//             url =  '//flexydox.site/policy_gdpr/'

//             function fixLinks() {
//                 document.querySelectorAll('a').forEach(function(a) {
//                     a.href = a.href.replace(location.protocol + '//ewttrack.com', location.protocol + '//' + domain)
//                 })
//             }
//             if (['complete', 'loaded', 'interactive'].indexOf(document.readyState) != -1) {
//                 fixLinks();
//             } else {
//                 document.addEventListener('DOMContentLoaded', fixLinks)
//             }
//         }


//         function sendEv(params) {
//             document.createElement('img').src = url + params;
//         }

//         function once(f) {
//             return function() {
//                 f && (f.apply(this, arguments), f = null)
//             }
//         };

//         function ev(src) {
//             var cb = arguments[arguments.length - 1];
//             [].slice.call(arguments, 1, -1).forEach(function(ev) {
//                 src.addEventListener(ev, cb)
//             })
//         };

//         sendEv('event7=' + ((typeof(w.orientation) == "undefined") ? '0' : '1'));

//         ev(w, 'load', function() {
//             sendEv('event10=' + (Math.max(0, w.performance.timing.loadEventStart - w.performance.timing.responseEnd) / 1000));
//             var hEvnt = once(function() {
//                 sendEv('event6=1');
//             });
//             ev(w, 'scroll', 'mousemove', hEvnt);
//             ev(document.body, 'touchmove', hEvnt);
//         })

//         ev(w, 'unload', 'beforeunload', 'pagehide', once(function() {
//             sendEv('event8=' + Math.min(600, (new Date().getTime() - sTime) / 1000));
//         }));
//         ev(document, 'visibilitychange', once(function() {
//             if (document.visibilityState == 'hidden') {
//                 sendEv('event8=' + Math.min(600, (new Date().getTime() - sTime) / 1000));
//             }
//         }));


//     })(window);
// }