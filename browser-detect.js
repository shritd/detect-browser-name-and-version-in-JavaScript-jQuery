If you want to create global variables for browser name and its version in JS files, you will have to add the following snippet to framework/common/jquerycompat.js:

var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
var isFirefox = typeof InstallTrigger !== 'undefined'; // Firefox 1.0+
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
// At least Safari 3+: "[object HTMLElementConstructor]"
var isChrome = !!window.chrome && !isOpera; // Chrome 1+
var isIE = /*@cc_on!@*/ false || !!document.documentMode; // At least IE6

var firefoxVersion, ieVersion, chromeVersion, safariVersion;

if (navigator.userAgent.search("Firefox") >= 0) {
    var firefoxPosition = navigator.userAgent.search("Firefox") + 8;
    firefoxVersion = navigator.userAgent.substring(firefoxPosition);
}

if (navigator.userAgent.search("MSIE") >= 0) {
    var iePosition = navigator.userAgent.search("MSIE") + 5;
    var ieEnd = navigator.userAgent.search("; Windows");
    ieVersion = navigator.userAgent.substring(iePosition, ieEnd);
}
if (navigator.userAgent.search("Chrome") >= 0) {
    var chromePosition = navigator.userAgent.search("Chrome") + 7;
    var chromeEnd = navigator.userAgent.search(" Safari");
    chromeVersion = navigator.userAgent.substring(chromePosition, chromeEnd);
}
if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
    var safariPosition = navigator.userAgent.search("Version") + 8;
    var safariEnd = navigator.userAgent.search(" Safari");
    safariVersion = navigator.userAgent.substring(safariPosition, safariEnd);
}


And finally to use it in agent.js or any other JS file,

you can just refer the variable as
if(isIE)

if(isIE && parseInt(ieVersion) == 8 )

and so on.
