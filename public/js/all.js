var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// method to check has class using javascript
function hasClass(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';

    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

$(function () {

    $('[data-toggle="tooltip"]').tooltip();
    var $select = $('.selectize').selectize();
    $('.venobox').venobox();
    $('.input-selectize').selectize({
        persist: false,
        create: function create(input) {
            return {
                value: input,
                text: input
            };
        }
    });
    $(".datepicker").flatpickr({
        dateFormat: 'Y-m-d',
        wrap: true
    });

    $("#checkAll").click(function () {
        $("input[type='checkbox'].custom-control-input").prop('checked', $(this).prop('checked'));
    });

    $('button[type="submit"]').click(function () {
        validateSelectize();
    });
    $('.selectize').change(function () {
        validateSelectize();
    });
});

function validateSelectize() {
    var is_required = $('.selectize').attr('required');
    if (typeof is_required !== false || is_required !== 'undefined') {
        var val_select = $('.selectize').val();
        if (val_select == '') {
            $('.selectize').addClass('is-invalid');
        } else {
            $('.selectize').removeClass('is-invalid');
        }
    }
}

function confirmButton(event, form) {
    var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Are you sure?';
    var text = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Once deleted, you will not be able to recover this data';
    var icon = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'warning';

    swal({
        title: title,
        text: text,
        icon: icon,
        buttons: true,
        dangerMode: true
    }).then(function (isConfirm) {
        if (isConfirm) {
            $(form).submit();
        }
    });
}

function clickMenu(val) {
    var navmiddle = $('.nav-middle');
    var navbottom = $('.nav-bottom');

    $(".menu-top").each(function (index) {
        if ($(this).data('key') == val) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
    $(".menu-dropdown").each(function (index) {
        if ($(this).data('pair') == val) {
            showDropdown($(this));
        } else {
            hideDropdown($(this));
        }
    });

    showDropdown(navmiddle);
    hideDropdown(navbottom);
    resetMenu();
}

function clickSubmenu(val) {
    var navbottom = $('.nav-bottom');

    $(".menu-middle").each(function (index) {
        if ($(this).data('key') == val) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
    $(".submenu-dropdown").each(function (index) {
        if ($(this).data('pair') == val) {
            showDropdown($(this));
        } else {
            hideDropdown($(this));
        }
    });

    showDropdown(navbottom);
}

function resetMenu() {
    hideDropdown($(".submenu-dropdown"));
    notActiveMenu($(".menu-middle"));
    notActiveMenu($(".menu-bottom"));
}

function showDropdown(val) {
    val.removeClass('d-none');
}
function hideDropdown(val) {
    val.addClass('d-none');
}

function activeMenu(val) {
    val.addClass('active');
}
function notActiveMenu(val) {
    val.removeClass('active');
}

function checkAll() {
    var checkboxes = document.getElementsByTagName('input'),
        val = null;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == 'checkbox') {
            if (val === null) val = checkboxes[i].checked;
            checkboxes[i].checked = val;
        }
    }
}

function toggleChecked(nilai) {
    var elm = document.getElementById("checkedValues" + nilai);
    elm.checked = !elm.checked;
}

!function (t, e) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.swal = e() : t.swal = e();
}(this, function () {
    return function (t) {
        function e(o) {
            if (n[o]) return n[o].exports;var r = n[o] = { i: o, l: !1, exports: {} };return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
        }var n = {};return e.m = t, e.c = n, e.d = function (t, n, o) {
            e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: o });
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default;
            } : function () {
                return t;
            };return e.d(n, "a", n), n;
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, e.p = "", e(e.s = 8);
    }([function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var o = "swal-button";e.CLASS_NAMES = { MODAL: "swal-modal", OVERLAY: "swal-overlay", SHOW_MODAL: "swal-overlay--show-modal", MODAL_TITLE: "swal-title", MODAL_TEXT: "swal-text", ICON: "swal-icon", ICON_CUSTOM: "swal-icon--custom", CONTENT: "swal-content", FOOTER: "swal-footer", BUTTON_CONTAINER: "swal-button-container", BUTTON: o, CONFIRM_BUTTON: o + "--confirm", CANCEL_BUTTON: o + "--cancel", DANGER_BUTTON: o + "--danger", BUTTON_LOADING: o + "--loading", BUTTON_LOADER: o + "__loader" }, e.default = e.CLASS_NAMES;
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.getNode = function (t) {
            var e = "." + t;return document.querySelector(e);
        }, e.stringToNode = function (t) {
            var e = document.createElement("div");return e.innerHTML = t.trim(), e.firstChild;
        }, e.insertAfter = function (t, e) {
            var n = e.nextSibling;e.parentNode.insertBefore(t, n);
        }, e.removeNode = function (t) {
            t.parentElement.removeChild(t);
        }, e.throwErr = function (t) {
            throw t = t.replace(/ +(?= )/g, ""), "SweetAlert: " + (t = t.trim());
        }, e.isPlainObject = function (t) {
            if ("[object Object]" !== Object.prototype.toString.call(t)) return !1;var e = Object.getPrototypeOf(t);return null === e || e === Object.prototype;
        }, e.ordinalSuffixOf = function (t) {
            var e = t % 10,
                n = t % 100;return 1 === e && 11 !== n ? t + "st" : 2 === e && 12 !== n ? t + "nd" : 3 === e && 13 !== n ? t + "rd" : t + "th";
        };
    }, function (t, e, n) {
        "use strict";
        function o(t) {
            for (var n in t) {
                e.hasOwnProperty(n) || (e[n] = t[n]);
            }
        }Object.defineProperty(e, "__esModule", { value: !0 }), o(n(25));var r = n(26);e.overlayMarkup = r.default, o(n(27)), o(n(28)), o(n(29));var i = n(0),
            a = i.default.MODAL_TITLE,
            s = i.default.MODAL_TEXT,
            c = i.default.ICON,
            l = i.default.FOOTER;e.iconMarkup = '\n  <div class="' + c + '"></div>', e.titleMarkup = '\n  <div class="' + a + '"></div>\n', e.textMarkup = '\n  <div class="' + s + '"></div>', e.footerMarkup = '\n  <div class="' + l + '"></div>\n';
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var o = n(1);e.CONFIRM_KEY = "confirm", e.CANCEL_KEY = "cancel";var r = { visible: !0, text: null, value: null, className: "", closeModal: !0 },
            i = Object.assign({}, r, { visible: !1, text: "Cancel", value: null }),
            a = Object.assign({}, r, { text: "OK", value: !0 });e.defaultButtonList = { cancel: i, confirm: a };var s = function s(t) {
            switch (t) {case e.CONFIRM_KEY:
                    return a;case e.CANCEL_KEY:
                    return i;default:
                    var n = t.charAt(0).toUpperCase() + t.slice(1);return Object.assign({}, r, { text: n, value: t });}
        },
            c = function c(t, e) {
            var n = s(t);return !0 === e ? Object.assign({}, n, { visible: !0 }) : "string" == typeof e ? Object.assign({}, n, { visible: !0, text: e }) : o.isPlainObject(e) ? Object.assign({ visible: !0 }, n, e) : Object.assign({}, n, { visible: !1 });
        },
            l = function l(t) {
            for (var e = {}, n = 0, o = Object.keys(t); n < o.length; n++) {
                var r = o[n],
                    a = t[r],
                    s = c(r, a);e[r] = s;
            }return e.cancel || (e.cancel = i), e;
        },
            u = function u(t) {
            var n = {};switch (t.length) {case 1:
                    n[e.CANCEL_KEY] = Object.assign({}, i, { visible: !1 });break;case 2:
                    n[e.CANCEL_KEY] = c(e.CANCEL_KEY, t[0]), n[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t[1]);break;default:
                    o.throwErr("Invalid number of 'buttons' in array (" + t.length + ").\n      If you want more than 2 buttons, you need to use an object!");}return n;
        };e.getButtonListOpts = function (t) {
            var n = e.defaultButtonList;return "string" == typeof t ? n[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t) : Array.isArray(t) ? n = u(t) : o.isPlainObject(t) ? n = l(t) : !0 === t ? n = u([!0, !0]) : !1 === t ? n = u([!1, !1]) : void 0 === t && (n = e.defaultButtonList), n;
        };
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var o = n(1),
            r = n(2),
            i = n(0),
            a = i.default.MODAL,
            s = i.default.OVERLAY,
            c = n(30),
            l = n(31),
            u = n(32),
            f = n(33);e.injectElIntoModal = function (t) {
            var e = o.getNode(a),
                n = o.stringToNode(t);return e.appendChild(n), n;
        };var d = function d(t) {
            t.className = a, t.textContent = "";
        },
            p = function p(t, e) {
            d(t);var n = e.className;n && t.classList.add(n);
        };e.initModalContent = function (t) {
            var e = o.getNode(a);p(e, t), c.default(t.icon), l.initTitle(t.title), l.initText(t.text), f.default(t.content), u.default(t.buttons, t.dangerMode);
        };var m = function m() {
            var t = o.getNode(s),
                e = o.stringToNode(r.modalMarkup);t.appendChild(e);
        };e.default = m;
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var o = n(3),
            r = { isOpen: !1, promise: null, actions: {}, timer: null },
            i = Object.assign({}, r);e.resetState = function () {
            i = Object.assign({}, r);
        }, e.setActionValue = function (t) {
            if ("string" == typeof t) return a(o.CONFIRM_KEY, t);for (var e in t) {
                a(e, t[e]);
            }
        };var a = function a(t, e) {
            i.actions[t] || (i.actions[t] = {}), Object.assign(i.actions[t], { value: e });
        };e.setActionOptionsFor = function (t, e) {
            var n = (void 0 === e ? {} : e).closeModal,
                o = void 0 === n || n;Object.assign(i.actions[t], { closeModal: o });
        }, e.default = i;
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var o = n(1),
            r = n(3),
            i = n(0),
            a = i.default.OVERLAY,
            s = i.default.SHOW_MODAL,
            c = i.default.BUTTON,
            l = i.default.BUTTON_LOADING,
            u = n(5);e.openModal = function () {
            o.getNode(a).classList.add(s), u.default.isOpen = !0;
        };var f = function f() {
            o.getNode(a).classList.remove(s), u.default.isOpen = !1;
        };e.onAction = function (t) {
            void 0 === t && (t = r.CANCEL_KEY);var e = u.default.actions[t],
                n = e.value;if (!1 === e.closeModal) {
                var i = c + "--" + t;o.getNode(i).classList.add(l);
            } else f();u.default.promise.resolve(n);
        }, e.getState = function () {
            var t = Object.assign({}, u.default);return delete t.promise, delete t.timer, t;
        }, e.stopLoading = function () {
            for (var t = document.querySelectorAll("." + c), e = 0; e < t.length; e++) {
                t[e].classList.remove(l);
            }
        };
    }, function (t, e) {
        var n;n = function () {
            return this;
        }();try {
            n = n || Function("return this")() || (0, eval)("this");
        } catch (t) {
            "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
        }t.exports = n;
    }, function (t, e, n) {
        (function (e) {
            t.exports = e.sweetAlert = n(9);
        }).call(e, n(7));
    }, function (t, e, n) {
        (function (e) {
            t.exports = e.swal = n(10);
        }).call(e, n(7));
    }, function (t, e, n) {
        "undefined" != typeof window && n(11), n(16);var o = n(23).default;t.exports = o;
    }, function (t, e, n) {
        var o = n(12);"string" == typeof o && (o = [[t.i, o, ""]]);var r = { insertAt: "top" };r.transform = void 0;n(14)(o, r);o.locals && (t.exports = o.locals);
    }, function (t, e, n) {
        e = t.exports = n(13)(void 0), e.push([t.i, '.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button[not:disabled]:hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel[not:disabled]:hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger[not:disabled]:hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:scroll;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}', ""]);
    }, function (t, e) {
        function n(t, e) {
            var n = t[1] || "",
                r = t[3];if (!r) return n;if (e && "function" == typeof btoa) {
                var i = o(r);return [n].concat(r.sources.map(function (t) {
                    return "/*# sourceURL=" + r.sourceRoot + t + " */";
                })).concat([i]).join("\n");
            }return [n].join("\n");
        }function o(t) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */";
        }t.exports = function (t) {
            var e = [];return e.toString = function () {
                return this.map(function (e) {
                    var o = n(e, t);return e[2] ? "@media " + e[2] + "{" + o + "}" : o;
                }).join("");
            }, e.i = function (t, n) {
                "string" == typeof t && (t = [[null, t, ""]]);for (var o = {}, r = 0; r < this.length; r++) {
                    var i = this[r][0];"number" == typeof i && (o[i] = !0);
                }for (r = 0; r < t.length; r++) {
                    var a = t[r];"number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
                }
            }, e;
        };
    }, function (t, e, n) {
        function o(t, e) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n],
                    r = m[o.id];if (r) {
                    r.refs++;for (var i = 0; i < r.parts.length; i++) {
                        r.parts[i](o.parts[i]);
                    }for (; i < o.parts.length; i++) {
                        r.parts.push(u(o.parts[i], e));
                    }
                } else {
                    for (var a = [], i = 0; i < o.parts.length; i++) {
                        a.push(u(o.parts[i], e));
                    }m[o.id] = { id: o.id, refs: 1, parts: a };
                }
            }
        }function r(t, e) {
            for (var n = [], o = {}, r = 0; r < t.length; r++) {
                var i = t[r],
                    a = e.base ? i[0] + e.base : i[0],
                    s = i[1],
                    c = i[2],
                    l = i[3],
                    u = { css: s, media: c, sourceMap: l };o[a] ? o[a].parts.push(u) : n.push(o[a] = { id: a, parts: [u] });
            }return n;
        }function i(t, e) {
            var n = v(t.insertInto);if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o = w[w.length - 1];if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), w.push(e);else {
                if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e);
            }
        }function a(t) {
            if (null === t.parentNode) return !1;t.parentNode.removeChild(t);var e = w.indexOf(t);e >= 0 && w.splice(e, 1);
        }function s(t) {
            var e = document.createElement("style");return t.attrs.type = "text/css", l(e, t.attrs), i(t, e), e;
        }function c(t) {
            var e = document.createElement("link");return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", l(e, t.attrs), i(t, e), e;
        }function l(t, e) {
            Object.keys(e).forEach(function (n) {
                t.setAttribute(n, e[n]);
            });
        }function u(t, e) {
            var n, o, r, i;if (e.transform && t.css) {
                if (!(i = e.transform(t.css))) return function () {};t.css = i;
            }if (e.singleton) {
                var l = h++;n = g || (g = s(e)), o = f.bind(null, n, l, !1), r = f.bind(null, n, l, !0);
            } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(e), o = p.bind(null, n, e), r = function r() {
                a(n), n.href && URL.revokeObjectURL(n.href);
            }) : (n = s(e), o = d.bind(null, n), r = function r() {
                a(n);
            });return o(t), function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;o(t = e);
                } else r();
            };
        }function f(t, e, n, o) {
            var r = n ? "" : o.css;if (t.styleSheet) t.styleSheet.cssText = x(e, r);else {
                var i = document.createTextNode(r),
                    a = t.childNodes;a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
            }
        }function d(t, e) {
            var n = e.css,
                o = e.media;if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;else {
                for (; t.firstChild;) {
                    t.removeChild(t.firstChild);
                }t.appendChild(document.createTextNode(n));
            }
        }function p(t, e, n) {
            var o = n.css,
                r = n.sourceMap,
                i = void 0 === e.convertToAbsoluteUrls && r;(e.convertToAbsoluteUrls || i) && (o = y(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");var a = new Blob([o], { type: "text/css" }),
                s = t.href;t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
        }var m = {},
            b = function (t) {
            var e;return function () {
                return void 0 === e && (e = t.apply(this, arguments)), e;
            };
        }(function () {
            return window && document && document.all && !window.atob;
        }),
            v = function (t) {
            var e = {};return function (n) {
                return void 0 === e[n] && (e[n] = t.call(this, n)), e[n];
            };
        }(function (t) {
            return document.querySelector(t);
        }),
            g = null,
            h = 0,
            w = [],
            y = n(15);t.exports = function (t, e) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");e = e || {}, e.attrs = "object" == _typeof(e.attrs) ? e.attrs : {}, e.singleton || (e.singleton = b()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");var n = r(t, e);return o(n, e), function (t) {
                for (var i = [], a = 0; a < n.length; a++) {
                    var s = n[a],
                        c = m[s.id];c.refs--, i.push(c);
                }if (t) {
                    o(r(t, e), e);
                }for (var a = 0; a < i.length; a++) {
                    var c = i[a];if (0 === c.refs) {
                        for (var l = 0; l < c.parts.length; l++) {
                            c.parts[l]();
                        }delete m[c.id];
                    }
                }
            };
        };var x = function () {
            var t = [];return function (e, n) {
                return t[e] = n, t.filter(Boolean).join("\n");
            };
        }();
    }, function (t, e) {
        t.exports = function (t) {
            var e = "undefined" != typeof window && window.location;if (!e) throw new Error("fixUrls requires window.location");if (!t || "string" != typeof t) return t;var n = e.protocol + "//" + e.host,
                o = n + e.pathname.replace(/\/[^\/]*$/, "/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
                var r = e.trim().replace(/^"(.*)"$/, function (t, e) {
                    return e;
                }).replace(/^'(.*)'$/, function (t, e) {
                    return e;
                });if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r)) return t;var i;return i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")";
            });
        };
    }, function (t, e, n) {
        var o = n(17);"undefined" == typeof window || window.Promise || (window.Promise = o), n(21), String.prototype.includes || (String.prototype.includes = function (t, e) {
            "use strict";
            return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e);
        }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", { value: function value(t, e) {
                if (null == this) throw new TypeError('"this" is null or not defined');var n = Object(this),
                    o = n.length >>> 0;if (0 === o) return !1;for (var r = 0 | e, i = Math.max(r >= 0 ? r : o - Math.abs(r), 0); i < o;) {
                    if (function (t, e) {
                        return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e);
                    }(n[i], t)) return !0;i++;
                }return !1;
            } }), "undefined" != typeof window && function (t) {
            t.forEach(function (t) {
                t.hasOwnProperty("remove") || Object.defineProperty(t, "remove", { configurable: !0, enumerable: !0, writable: !0, value: function value() {
                        this.parentNode.removeChild(this);
                    } });
            });
        }([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
    }, function (t, e, n) {
        (function (e) {
            !function (n) {
                function o() {}function r(t, e) {
                    return function () {
                        t.apply(e, arguments);
                    };
                }function i(t) {
                    if ("object" != _typeof(this)) throw new TypeError("Promises must be constructed via new");if ("function" != typeof t) throw new TypeError("not a function");this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(t, this);
                }function a(t, e) {
                    for (; 3 === t._state;) {
                        t = t._value;
                    }if (0 === t._state) return void t._deferreds.push(e);t._handled = !0, i._immediateFn(function () {
                        var n = 1 === t._state ? e.onFulfilled : e.onRejected;if (null === n) return void (1 === t._state ? s : c)(e.promise, t._value);var o;try {
                            o = n(t._value);
                        } catch (t) {
                            return void c(e.promise, t);
                        }s(e.promise, o);
                    });
                }function s(t, e) {
                    try {
                        if (e === t) throw new TypeError("A promise cannot be resolved with itself.");if (e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e)) {
                            var n = e.then;if (e instanceof i) return t._state = 3, t._value = e, void l(t);if ("function" == typeof n) return void f(r(n, e), t);
                        }t._state = 1, t._value = e, l(t);
                    } catch (e) {
                        c(t, e);
                    }
                }function c(t, e) {
                    t._state = 2, t._value = e, l(t);
                }function l(t) {
                    2 === t._state && 0 === t._deferreds.length && i._immediateFn(function () {
                        t._handled || i._unhandledRejectionFn(t._value);
                    });for (var e = 0, n = t._deferreds.length; e < n; e++) {
                        a(t, t._deferreds[e]);
                    }t._deferreds = null;
                }function u(t, e, n) {
                    this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n;
                }function f(t, e) {
                    var n = !1;try {
                        t(function (t) {
                            n || (n = !0, s(e, t));
                        }, function (t) {
                            n || (n = !0, c(e, t));
                        });
                    } catch (t) {
                        if (n) return;n = !0, c(e, t);
                    }
                }var d = setTimeout;i.prototype.catch = function (t) {
                    return this.then(null, t);
                }, i.prototype.then = function (t, e) {
                    var n = new this.constructor(o);return a(this, new u(t, e, n)), n;
                }, i.all = function (t) {
                    var e = Array.prototype.slice.call(t);return new i(function (t, n) {
                        function o(i, a) {
                            try {
                                if (a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a)) {
                                    var s = a.then;if ("function" == typeof s) return void s.call(a, function (t) {
                                        o(i, t);
                                    }, n);
                                }e[i] = a, 0 == --r && t(e);
                            } catch (t) {
                                n(t);
                            }
                        }if (0 === e.length) return t([]);for (var r = e.length, i = 0; i < e.length; i++) {
                            o(i, e[i]);
                        }
                    });
                }, i.resolve = function (t) {
                    return t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.constructor === i ? t : new i(function (e) {
                        e(t);
                    });
                }, i.reject = function (t) {
                    return new i(function (e, n) {
                        n(t);
                    });
                }, i.race = function (t) {
                    return new i(function (e, n) {
                        for (var o = 0, r = t.length; o < r; o++) {
                            t[o].then(e, n);
                        }
                    });
                }, i._immediateFn = "function" == typeof e && function (t) {
                    e(t);
                } || function (t) {
                    d(t, 0);
                }, i._unhandledRejectionFn = function (t) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
                }, i._setImmediateFn = function (t) {
                    i._immediateFn = t;
                }, i._setUnhandledRejectionFn = function (t) {
                    i._unhandledRejectionFn = t;
                }, void 0 !== t && t.exports ? t.exports = i : n.Promise || (n.Promise = i);
            }(this);
        }).call(e, n(18).setImmediate);
    }, function (t, e, n) {
        function o(t, e) {
            this._id = t, this._clearFn = e;
        }var r = Function.prototype.apply;e.setTimeout = function () {
            return new o(r.call(setTimeout, window, arguments), clearTimeout);
        }, e.setInterval = function () {
            return new o(r.call(setInterval, window, arguments), clearInterval);
        }, e.clearTimeout = e.clearInterval = function (t) {
            t && t.close();
        }, o.prototype.unref = o.prototype.ref = function () {}, o.prototype.close = function () {
            this._clearFn.call(window, this._id);
        }, e.enroll = function (t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
        }, e.unenroll = function (t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
        }, e._unrefActive = e.active = function (t) {
            clearTimeout(t._idleTimeoutId);var e = t._idleTimeout;e >= 0 && (t._idleTimeoutId = setTimeout(function () {
                t._onTimeout && t._onTimeout();
            }, e));
        }, n(19), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate;
    }, function (t, e, n) {
        (function (t, e) {
            !function (t, n) {
                "use strict";
                function o(t) {
                    "function" != typeof t && (t = new Function("" + t));for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) {
                        e[n] = arguments[n + 1];
                    }var o = { callback: t, args: e };return l[c] = o, s(c), c++;
                }function r(t) {
                    delete l[t];
                }function i(t) {
                    var e = t.callback,
                        o = t.args;switch (o.length) {case 0:
                            e();break;case 1:
                            e(o[0]);break;case 2:
                            e(o[0], o[1]);break;case 3:
                            e(o[0], o[1], o[2]);break;default:
                            e.apply(n, o);}
                }function a(t) {
                    if (u) setTimeout(a, 0, t);else {
                        var e = l[t];if (e) {
                            u = !0;try {
                                i(e);
                            } finally {
                                r(t), u = !1;
                            }
                        }
                    }
                }if (!t.setImmediate) {
                    var s,
                        c = 1,
                        l = {},
                        u = !1,
                        f = t.document,
                        d = Object.getPrototypeOf && Object.getPrototypeOf(t);d = d && d.setTimeout ? d : t, "[object process]" === {}.toString.call(t.process) ? function () {
                        s = function s(t) {
                            e.nextTick(function () {
                                a(t);
                            });
                        };
                    }() : function () {
                        if (t.postMessage && !t.importScripts) {
                            var e = !0,
                                n = t.onmessage;return t.onmessage = function () {
                                e = !1;
                            }, t.postMessage("", "*"), t.onmessage = n, e;
                        }
                    }() ? function () {
                        var e = "setImmediate$" + Math.random() + "$",
                            n = function n(_n) {
                            _n.source === t && "string" == typeof _n.data && 0 === _n.data.indexOf(e) && a(+_n.data.slice(e.length));
                        };t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), s = function s(n) {
                            t.postMessage(e + n, "*");
                        };
                    }() : t.MessageChannel ? function () {
                        var t = new MessageChannel();t.port1.onmessage = function (t) {
                            a(t.data);
                        }, s = function s(e) {
                            t.port2.postMessage(e);
                        };
                    }() : f && "onreadystatechange" in f.createElement("script") ? function () {
                        var t = f.documentElement;s = function s(e) {
                            var n = f.createElement("script");n.onreadystatechange = function () {
                                a(e), n.onreadystatechange = null, t.removeChild(n), n = null;
                            }, t.appendChild(n);
                        };
                    }() : function () {
                        s = function s(t) {
                            setTimeout(a, 0, t);
                        };
                    }(), d.setImmediate = o, d.clearImmediate = r;
                }
            }("undefined" == typeof self ? void 0 === t ? this : t : self);
        }).call(e, n(7), n(20));
    }, function (t, e) {
        function n() {
            throw new Error("setTimeout has not been defined");
        }function o() {
            throw new Error("clearTimeout has not been defined");
        }function r(t) {
            if (u === setTimeout) return setTimeout(t, 0);if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);try {
                return u(t, 0);
            } catch (e) {
                try {
                    return u.call(null, t, 0);
                } catch (e) {
                    return u.call(this, t, 0);
                }
            }
        }function i(t) {
            if (f === clearTimeout) return clearTimeout(t);if ((f === o || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);try {
                return f(t);
            } catch (e) {
                try {
                    return f.call(null, t);
                } catch (e) {
                    return f.call(this, t);
                }
            }
        }function a() {
            b && p && (b = !1, p.length ? m = p.concat(m) : v = -1, m.length && s());
        }function s() {
            if (!b) {
                var t = r(a);b = !0;for (var e = m.length; e;) {
                    for (p = m, m = []; ++v < e;) {
                        p && p[v].run();
                    }v = -1, e = m.length;
                }p = null, b = !1, i(t);
            }
        }function c(t, e) {
            this.fun = t, this.array = e;
        }function l() {}var u,
            f,
            d = t.exports = {};!function () {
            try {
                u = "function" == typeof setTimeout ? setTimeout : n;
            } catch (t) {
                u = n;
            }try {
                f = "function" == typeof clearTimeout ? clearTimeout : o;
            } catch (t) {
                f = o;
            }
        }();var p,
            m = [],
            b = !1,
            v = -1;d.nextTick = function (t) {
            var e = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
                e[n - 1] = arguments[n];
            }m.push(new c(t, e)), 1 !== m.length || b || r(s);
        }, c.prototype.run = function () {
            this.fun.apply(null, this.array);
        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function (t) {
            return [];
        }, d.binding = function (t) {
            throw new Error("process.binding is not supported");
        }, d.cwd = function () {
            return "/";
        }, d.chdir = function (t) {
            throw new Error("process.chdir is not supported");
        }, d.umask = function () {
            return 0;
        };
    }, function (t, e, n) {
        "use strict";
        n(22).polyfill();
    }, function (t, e, n) {
        "use strict";
        function o(t, e) {
            if (void 0 === t || null === t) throw new TypeError("Cannot convert first argument to object");for (var n = Object(t), o = 1; o < arguments.length; o++) {
                var r = arguments[o];if (void 0 !== r && null !== r) for (var i = Object.keys(Object(r)), a = 0, s = i.length; a < s; a++) {
                    var c = i[a],
                        l = Object.getOwnPropertyDescriptor(r, c);void 0 !== l && l.enumerable && (n[c] = r[c]);
                }
            }return n;
        }function r() {
            Object.assign || Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: o });
        }t.exports = { assign: o, polyfill: r };
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var o = n(24),
            r = n(6),
            i = n(5),
            a = n(36),
            s = function s() {
            for (var t = [], e = 0; e < arguments.length; e++) {
                t[e] = arguments[e];
            }if ("undefined" != typeof window) {
                var n = a.getOpts.apply(void 0, t);return new Promise(function (t, e) {
                    i.default.promise = { resolve: t, reject: e }, o.default(n), setTimeout(function () {
                        r.openModal();
                    });
                });
            }
        };s.close = r.onAction, s.getState = r.getState, s.setActionValue = i.setActionValue, s.stopLoading = r.stopLoading, s.setDefaults = a.setDefaults, e.default = s;
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var o = n(1),
            r = n(0),
            i = r.default.MODAL,
            a = n(4),
            s = n(34),
            c = n(35),
            l = n(1);e.init = function (t) {
            o.getNode(i) || (document.body || l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"), s.default(), a.default()), a.initModalContent(t), c.default(t);
        }, e.default = e.init;
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var o = n(0),
            r = o.default.MODAL;e.modalMarkup = '\n  <div class="' + r + '"></div>', e.default = e.modalMarkup;
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var o = n(0),
            r = o.default.OVERLAY,
            i = '<div \n    class="' + r + '"\n    tabIndex="-1">\n  </div>';e.default = i;
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var o = n(0),
            r = o.default.ICON;e.errorIconMarkup = function () {
            var t = r + "--error",
                e = t + "__line";return '\n    <div class="' + t + '__x-mark">\n      <span class="' + e + " " + e + '--left"></span>\n      <span class="' + e + " " + e + '--right"></span>\n    </div>\n  ';
        }, e.warningIconMarkup = function () {
            var t = r + "--warning";return '\n    <span class="' + t + '__body">\n      <span class="' + t + '__dot"></span>\n    </span>\n  ';
        }, e.successIconMarkup = function () {
            var t = r + "--success";return '\n    <span class="' + t + "__line " + t + '__line--long"></span>\n    <span class="' + t + "__line " + t + '__line--tip"></span>\n\n    <div class="' + t + '__ring"></div>\n    <div class="' + t + '__hide-corners"></div>\n  ';
        };
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var o = n(0),
            r = o.default.CONTENT;e.contentMarkup = '\n  <div class="' + r + '">\n\n  </div>\n';
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var o = n(0),
            r = o.default.BUTTON_CONTAINER,
            i = o.default.BUTTON,
            a = o.default.BUTTON_LOADER;e.buttonMarkup = '\n  <div class="' + r + '">\n\n    <button\n      class="' + i + '"\n    ></button>\n\n    <div class="' + a + '">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n';
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var o = n(4),
            r = n(2),
            i = n(0),
            a = i.default.ICON,
            s = i.default.ICON_CUSTOM,
            c = ["error", "warning", "success", "info"],
            l = { error: r.errorIconMarkup(), warning: r.warningIconMarkup(), success: r.successIconMarkup() },
            u = function u(t, e) {
            var n = a + "--" + t;e.classList.add(n);var o = l[t];o && (e.innerHTML = o);
        },
            f = function f(t, e) {
            e.classList.add(s);var n = document.createElement("img");n.src = t, e.appendChild(n);
        },
            d = function d(t) {
            if (t) {
                var e = o.injectElIntoModal(r.iconMarkup);c.includes(t) ? u(t, e) : f(t, e);
            }
        };e.default = d;
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var o = n(2),
            r = n(4),
            i = function i(t) {
            navigator.userAgent.includes("AppleWebKit") && (t.style.display = "none", t.offsetHeight, t.style.display = "");
        };e.initTitle = function (t) {
            if (t) {
                var e = r.injectElIntoModal(o.titleMarkup);e.textContent = t, i(e);
            }
        }, e.initText = function (t) {
            if (t) {
                var e = r.injectElIntoModal(o.textMarkup);e.textContent = t, i(e);
            }
        };
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var o = n(1),
            r = n(4),
            i = n(0),
            a = i.default.BUTTON,
            s = i.default.DANGER_BUTTON,
            c = n(3),
            l = n(2),
            u = n(6),
            f = n(5),
            d = function d(t, e, n) {
            var r = e.text,
                i = e.value,
                d = e.className,
                p = e.closeModal,
                m = o.stringToNode(l.buttonMarkup),
                b = m.querySelector("." + a),
                v = a + "--" + t;b.classList.add(v), d && b.classList.add(d), n && t === c.CONFIRM_KEY && b.classList.add(s), b.textContent = r;var g = {};return g[t] = i, f.setActionValue(g), f.setActionOptionsFor(t, { closeModal: p }), b.addEventListener("click", function () {
                return u.onAction(t);
            }), m;
        },
            p = function p(t, e) {
            var n = r.injectElIntoModal(l.footerMarkup);for (var o in t) {
                var i = t[o],
                    a = d(o, i, e);i.visible && n.appendChild(a);
            }0 === n.children.length && n.remove();
        };e.default = p;
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var o = n(3),
            r = n(4),
            i = n(2),
            a = n(5),
            s = n(6),
            c = n(0),
            l = c.default.CONTENT,
            u = function u(t) {
            t.addEventListener("input", function (t) {
                var e = t.target,
                    n = e.value;a.setActionValue(n);
            }), t.addEventListener("keyup", function (t) {
                if ("Enter" === t.key) return s.onAction(o.CONFIRM_KEY);
            }), setTimeout(function () {
                t.focus(), a.setActionValue("");
            }, 0);
        },
            f = function f(t, e, n) {
            var o = document.createElement(e),
                r = l + "__" + e;o.classList.add(r);for (var i in n) {
                var a = n[i];o[i] = a;
            }"input" === e && u(o), t.appendChild(o);
        },
            d = function d(t) {
            if (t) {
                var e = r.injectElIntoModal(i.contentMarkup),
                    n = t.element,
                    o = t.attributes;"string" == typeof n ? f(e, n, o) : e.appendChild(n);
            }
        };e.default = d;
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var o = n(1),
            r = n(2),
            i = function i() {
            var t = o.stringToNode(r.overlayMarkup);document.body.appendChild(t);
        };e.default = i;
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var o = n(5),
            r = n(6),
            i = n(1),
            a = n(3),
            s = n(0),
            c = s.default.MODAL,
            l = s.default.BUTTON,
            u = s.default.OVERLAY,
            f = function f(t) {
            t.preventDefault(), v();
        },
            d = function d(t) {
            t.preventDefault(), g();
        },
            p = function p(t) {
            if (o.default.isOpen) switch (t.key) {case "Escape":
                    return r.onAction(a.CANCEL_KEY);}
        },
            m = function m(t) {
            if (o.default.isOpen) switch (t.key) {case "Tab":
                    return f(t);}
        },
            b = function b(t) {
            if (o.default.isOpen) return "Tab" === t.key && t.shiftKey ? d(t) : void 0;
        },
            v = function v() {
            var t = i.getNode(l);t && (t.tabIndex = 0, t.focus());
        },
            g = function g() {
            var t = i.getNode(c),
                e = t.querySelectorAll("." + l),
                n = e.length - 1,
                o = e[n];o && o.focus();
        },
            h = function h(t) {
            t[t.length - 1].addEventListener("keydown", m);
        },
            w = function w(t) {
            t[0].addEventListener("keydown", b);
        },
            y = function y() {
            var t = i.getNode(c),
                e = t.querySelectorAll("." + l);e.length && (h(e), w(e));
        },
            x = function x(t) {
            if (i.getNode(u) === t.target) return r.onAction(a.CANCEL_KEY);
        },
            _ = function _(t) {
            var e = i.getNode(u);e.removeEventListener("click", x), t && e.addEventListener("click", x);
        },
            k = function k(t) {
            o.default.timer && clearTimeout(o.default.timer), t && (o.default.timer = window.setTimeout(function () {
                return r.onAction(a.CANCEL_KEY);
            }, t));
        },
            O = function O(t) {
            t.closeOnEsc ? document.addEventListener("keyup", p) : document.removeEventListener("keyup", p), t.dangerMode ? v() : g(), y(), _(t.closeOnClickOutside), k(t.timer);
        };e.default = O;
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var o = n(1),
            r = n(3),
            i = n(37),
            a = n(38),
            s = { title: null, text: null, icon: null, buttons: r.defaultButtonList, content: null, className: null, closeOnClickOutside: !0, closeOnEsc: !0, dangerMode: !1, timer: null },
            c = Object.assign({}, s);e.setDefaults = function (t) {
            c = Object.assign({}, s, t);
        };var l = function l(t) {
            var e = t && t.button,
                n = t && t.buttons;return void 0 !== e && void 0 !== n && o.throwErr("Cannot set both 'button' and 'buttons' options!"), void 0 !== e ? { confirm: e } : n;
        },
            u = function u(t) {
            return o.ordinalSuffixOf(t + 1);
        },
            f = function f(t, e) {
            o.throwErr(u(e) + " argument ('" + t + "') is invalid");
        },
            d = function d(t, e) {
            var n = t + 1,
                r = e[n];o.isPlainObject(r) || void 0 === r || o.throwErr("Expected " + u(n) + " argument ('" + r + "') to be a plain object");
        },
            p = function p(t, e) {
            var n = t + 1,
                r = e[n];void 0 !== r && o.throwErr("Unexpected " + u(n) + " argument (" + r + ")");
        },
            m = function m(t, e, n, r) {
            var i = typeof e === "undefined" ? "undefined" : _typeof(e),
                a = "string" === i,
                s = e instanceof Element;if (a) {
                if (0 === n) return { text: e };if (1 === n) return { text: e, title: r[0] };if (2 === n) return d(n, r), { icon: e };f(e, n);
            } else {
                if (s && 0 === n) return d(n, r), { content: e };if (o.isPlainObject(e)) return p(n, r), e;f(e, n);
            }
        };e.getOpts = function () {
            for (var t = [], e = 0; e < arguments.length; e++) {
                t[e] = arguments[e];
            }var n = {};t.forEach(function (e, o) {
                var r = m(0, e, o, t);Object.assign(n, r);
            });var o = l(n);n.buttons = r.getButtonListOpts(o), delete n.button, n.content = i.getContentOpts(n.content);var u = Object.assign({}, s, c, n);return Object.keys(u).forEach(function (t) {
                a.DEPRECATED_OPTS[t] && a.logDeprecation(t);
            }), u;
        };
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var o = n(1),
            r = { element: "input", attributes: { placeholder: "" } };e.getContentOpts = function (t) {
            var e = {};return o.isPlainObject(t) ? Object.assign(e, t) : t instanceof Element ? { element: t } : "input" === t ? r : null;
        };
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.logDeprecation = function (t) {
            var n = e.DEPRECATED_OPTS[t],
                o = n.onlyRename,
                r = n.replacement,
                i = n.subOption,
                a = n.link,
                s = o ? "renamed" : "deprecated",
                c = 'SweetAlert warning: "' + t + '" option has been ' + s + ".";if (r) {
                c += " Please use" + (i ? ' "' + i + '" in ' : " ") + '"' + r + '" instead.';
            }var l = "https://sweetalert.js.org";c += a ? " More details: " + l + a : " More details: " + l + "/guides/#upgrading-from-1x", console.warn(c);
        }, e.DEPRECATED_OPTS = { type: { replacement: "icon", link: "/docs/#icon" }, imageUrl: { replacement: "icon", link: "/docs/#icon" }, customClass: { replacement: "className", onlyRename: !0, link: "/docs/#classname" }, imageSize: {}, showCancelButton: { replacement: "buttons", link: "/docs/#buttons" }, showConfirmButton: { replacement: "button", link: "/docs/#button" }, confirmButtonText: { replacement: "button", link: "/docs/#button" }, confirmButtonColor: {}, cancelButtonText: { replacement: "buttons", link: "/docs/#buttons" }, closeOnConfirm: { replacement: "button", subOption: "closeModal", link: "/docs/#button" }, closeOnCancel: { replacement: "buttons", subOption: "closeModal", link: "/docs/#buttons" }, showLoaderOnConfirm: { replacement: "buttons" }, animation: {}, inputType: { replacement: "content", link: "/docs/#content" }, inputValue: { replacement: "content", link: "/docs/#content" }, inputPlaceholder: { replacement: "content", link: "/docs/#content" }, html: { replacement: "content", link: "/docs/#content" }, allowEscapeKey: { replacement: "closeOnEsc", onlyRename: !0, link: "/docs/#closeonesc" }, allowClickOutside: { replacement: "closeOnClickOutside", onlyRename: !0, link: "/docs/#closeonclickoutside" } };
    }]);
});
/*
 * VenoBox - jQuery Plugin
 * version: 1.8.2
 * @requires jQuery >= 1.7.0
 *
 * Examples at http://veno.es/venobox/
 * License: MIT License
 * License URI: https://github.com/nicolafranchini/VenoBox/blob/master/LICENSE
 * Copyright 2013-2017 Nicola Franchini - @nicolafranchini
 *
 */
!function (e) {
    "use strict";
    var o, t, a, i, s, n, c, r, d, l, v, u, b, p, m, f, h, g, k, x, y, w, C, _, P, B, E, O, U, D, M, N, V, z, R, X, Y, j, W, q;e.fn.extend({ venobox: function venobox($) {
            var I = this,
                A = { arrowsColor: "#B6B6B6", autoplay: !1, bgcolor: "#fff", border: "0", closeBackground: "#161617", closeColor: "#d2d2d2", framewidth: "", frameheight: "", infinigall: !1, htmlClose: "&times;", htmlNext: "<span>Next</span>", htmlPrev: "<span>Prev</span>", numeratio: !1, numerationBackground: "#161617", numerationColor: "#d2d2d2", numerationPosition: "top", overlayClose: !0, overlayColor: "rgba(23,23,23,0.85)", spinner: "double-bounce", spinColor: "#d2d2d2", titleattr: "title", titleBackground: "#161617", titleColor: "#d2d2d2", titlePosition: "top", cb_pre_open: function cb_pre_open() {
                    return !0;
                }, cb_post_open: function cb_post_open() {}, cb_pre_close: function cb_pre_close() {
                    return !0;
                }, cb_post_close: function cb_post_close() {}, cb_post_resize: function cb_post_resize() {}, cb_after_nav: function cb_after_nav() {}, cb_init: function cb_init() {} },
                H = e.extend(A, $);return H.cb_init(I), this.each(function () {
                function $() {
                    y = O.data("gall"), h = O.data("numeratio"), b = O.data("infinigall"), p = e('.vbox-item[data-gall="' + y + '"]'), w = p.eq(p.index(O) + 1), C = p.eq(p.index(O) - 1), w.length || b !== !0 || (w = p.eq(0)), p.length > 1 ? (U = p.index(O) + 1, a.html(U + " / " + p.length)) : U = 1, h === !0 ? a.show() : a.hide(), "" !== x ? i.show() : i.hide(), w.length || b === !0 ? (e(".vbox-next").css("display", "block"), _ = !0) : (e(".vbox-next").css("display", "none"), _ = !1), p.index(O) > 0 || b === !0 ? (e(".vbox-prev").css("display", "block"), P = !0) : (e(".vbox-prev").css("display", "none"), P = !1), (P === !0 || _ === !0) && (r.on(ne.DOWN, T), r.on(ne.MOVE, Z), r.on(ne.UP, F));
                }function A(e) {
                    return e.length < 1 ? !1 : m ? !1 : (m = !0, g = e.data("overlay") || e.data("overlaycolor"), v = e.data("framewidth"), u = e.data("frameheight"), s = e.data("border"), t = e.data("bgcolor"), d = e.data("href") || e.attr("href"), o = e.data("autoplay"), x = e.attr(e.data("titleattr")) || "", e === C && r.addClass("animated").addClass("swipe-right"), e === w && r.addClass("animated").addClass("swipe-left"), void r.animate({ opacity: 0 }, 500, function () {
                        k.css("background", g), r.removeClass("animated").removeClass("swipe-left").removeClass("swipe-right").css({ "margin-left": 0, "margin-right": 0 }), "iframe" == e.data("vbtype") ? J() : "inline" == e.data("vbtype") ? oe() : "ajax" == e.data("vbtype") ? G() : "video" == e.data("vbtype") || "vimeo" == e.data("vbtype") || "youtube" == e.data("vbtype") ? K(o) : (r.html('<img src="' + d + '">'), te()), O = e, $(), m = !1, H.cb_after_nav(O, U, w, C);
                    }));
                }function Q(e) {
                    27 === e.keyCode && S(), 37 == e.keyCode && P === !0 && A(C), 39 == e.keyCode && _ === !0 && A(w);
                }function S() {
                    var o = H.cb_pre_close(O, U, w, C);return o === !1 ? !1 : (e("body").off("keydown", Q).removeClass("vbox-open"), O.focus(), void k.animate({ opacity: 0 }, 500, function () {
                        k.remove(), m = !1, H.cb_post_close();
                    }));
                }function T(e) {
                    r.addClass("animated"), V = R = e.pageY, z = X = e.pageX, D = !0;
                }function Z(e) {
                    if (D === !0) {
                        X = e.pageX, R = e.pageY, j = X - z, W = R - V;var o = Math.abs(j),
                            t = Math.abs(W);o > t && 100 >= o && (e.preventDefault(), r.css("margin-left", j));
                    }
                }function F(e) {
                    if (D === !0) {
                        D = !1;var o = O,
                            t = !1;Y = X - z, 0 > Y && _ === !0 && (o = w, t = !0), Y > 0 && P === !0 && (o = C, t = !0), Math.abs(Y) >= q && t === !0 ? A(o) : r.css({ "margin-left": 0, "margin-right": 0 });
                    }
                }function G() {
                    e.ajax({ url: d, cache: !1 }).done(function (e) {
                        r.html('<div class="vbox-inline">' + e + "</div>"), te();
                    }).fail(function () {
                        r.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>'), ae();
                    });
                }function J() {
                    r.html('<iframe class="venoframe" src="' + d + '"></iframe>'), ae();
                }function K(e) {
                    var o,
                        t = L(d),
                        a = e ? "?rel=0&autoplay=1" : "?rel=0",
                        i = a + ee(d);"vimeo" == t.type ? o = "https://player.vimeo.com/video/" : "youtube" == t.type && (o = "https://www.youtube.com/embed/"), r.html('<iframe class="venoframe vbvid" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0" src="' + o + t.id + i + '"></iframe>'), ae();
                }function L(e) {
                    if (e.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), RegExp.$3.indexOf("youtu") > -1) var o = "youtube";else if (RegExp.$3.indexOf("vimeo") > -1) var o = "vimeo";return { type: o, id: RegExp.$6 };
                }function ee(e) {
                    var o = "",
                        t = decodeURIComponent(e),
                        a = t.split("?");if (void 0 !== a[1]) {
                        var i,
                            s,
                            n = a[1].split("&");for (s = 0; s < n.length; s++) {
                            i = n[s].split("="), o = o + "&" + i[0] + "=" + i[1];
                        }
                    }return encodeURI(o);
                }function oe() {
                    r.html('<div class="vbox-inline">' + e(d).html() + "</div>"), ae();
                }function te() {
                    N = r.find("img"), N.length ? N.each(function () {
                        e(this).one("load", function () {
                            ae();
                        });
                    }) : ae();
                }function ae() {
                    i.html(x), r.find(">:first-child").addClass("figlio").css({ width: v, height: u, padding: s, background: t }), e("img.figlio").on("dragstart", function (e) {
                        e.preventDefault();
                    }), ie(), r.animate({ opacity: "1" }, "slow", function () {});
                }function ie() {
                    var o = r.outerHeight(),
                        t = e(window).height();f = t > o + 60 ? (t - o) / 2 : "30px", r.css("margin-top", f), r.css("margin-bottom", f), H.cb_post_resize();
                }if (O = e(this), O.data("venobox")) return !0;I.VBclose = function () {
                    S();
                }, O.addClass("vbox-item"), O.data("framewidth", H.framewidth), O.data("frameheight", H.frameheight), O.data("border", H.border), O.data("bgcolor", H.bgcolor), O.data("numeratio", H.numeratio), O.data("infinigall", H.infinigall), O.data("overlaycolor", H.overlayColor), O.data("titleattr", H.titleattr), O.data("venobox", !0), O.on("click", function (b) {
                    b.preventDefault(), O = e(this);var p = H.cb_pre_open(O);if (p === !1) return !1;switch (I.VBnext = function () {
                        A(w);
                    }, I.VBprev = function () {
                        A(C);
                    }, g = O.data("overlay") || O.data("overlaycolor"), v = O.data("framewidth"), u = O.data("frameheight"), o = O.data("autoplay") || H.autoplay, s = O.data("border"), t = O.data("bgcolor"), _ = !1, P = !1, m = !1, d = O.data("href") || O.attr("href"), l = O.data("css") || "", x = O.attr(O.data("titleattr")) || "", B = '<div class="vbox-preloader">', H.spinner) {case "rotating-plane":
                            B += '<div class="sk-rotating-plane"></div>';break;case "double-bounce":
                            B += '<div class="sk-double-bounce"><div class="sk-child sk-double-bounce1"></div><div class="sk-child sk-double-bounce2"></div></div>';break;case "wave":
                            B += '<div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>';break;case "wandering-cubes":
                            B += '<div class="sk-wandering-cubes"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div></div>';break;case "spinner-pulse":
                            B += '<div class="sk-spinner sk-spinner-pulse"></div>';break;case "three-bounce":
                            B += '<div class="sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div>';break;case "cube-grid":
                            B += '<div class="sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div>';}return B += "</div>", E = '<a class="vbox-next">' + H.htmlNext + '</a><a class="vbox-prev">' + H.htmlPrev + "</a>", M = '<div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">' + H.htmlClose + "</div>", n = '<div class="vbox-overlay ' + l + '" style="background:' + g + '">' + B + '<div class="vbox-container"><div class="vbox-content"></div></div>' + M + E + "</div>", e("body").append(n).addClass("vbox-open"), e(".vbox-preloader .sk-child, .vbox-preloader .sk-rotating-plane, .vbox-preloader .sk-rect, .vbox-preloader .sk-cube, .vbox-preloader .sk-spinner-pulse").css("background-color", H.spinColor), k = e(".vbox-overlay"), c = e(".vbox-container"), r = e(".vbox-content"), a = e(".vbox-num"), i = e(".vbox-title"), i.css(H.titlePosition, "-1px"), i.css({ color: H.titleColor, "background-color": H.titleBackground }), e(".vbox-close").css({ color: H.closeColor, "background-color": H.closeBackground }), e(".vbox-num").css(H.numerationPosition, "-1px"), e(".vbox-num").css({ color: H.numerationColor, "background-color": H.numerationBackground }), e(".vbox-next span, .vbox-prev span").css({ "border-top-color": H.arrowsColor, "border-right-color": H.arrowsColor }), r.html(""), r.css("opacity", "0"), k.css("opacity", "0"), $(), k.animate({ opacity: 1 }, 250, function () {
                        "iframe" == O.data("vbtype") ? J() : "inline" == O.data("vbtype") ? oe() : "ajax" == O.data("vbtype") ? G() : "video" == O.data("vbtype") || "vimeo" == O.data("vbtype") || "youtube" == O.data("vbtype") ? K(o) : (r.html('<img src="' + d + '">'), te()), H.cb_post_open(O, U, w, C);
                    }), e("body").keydown(Q), e(".vbox-prev").on("click", function () {
                        A(C);
                    }), e(".vbox-next").on("click", function () {
                        A(w);
                    }), !1;
                });var se = ".vbox-overlay";H.overlayClose || (se = ".vbox-close"), e(document).on("click", se, function (o) {
                    (e(o.target).is(".vbox-overlay") || e(o.target).is(".vbox-content") || e(o.target).is(".vbox-close") || e(o.target).is(".vbox-preloader")) && S();
                }), z = 0, X = 0, Y = 0, q = 50, D = !1;var ne = { DOWN: "touchmousedown", UP: "touchmouseup", MOVE: "touchmousemove" },
                    ce = function ce(o) {
                    var t;switch (o.type) {case "mousedown":
                            t = ne.DOWN;break;case "mouseup":
                            t = ne.UP;break;case "mouseout":
                            t = ne.UP;break;case "mousemove":
                            t = ne.MOVE;break;default:
                            return;}var a = de(t, o, o.pageX, o.pageY);e(o.target).trigger(a);
                },
                    re = function re(o) {
                    var t;switch (o.type) {case "touchstart":
                            t = ne.DOWN;break;case "touchend":
                            t = ne.UP;break;case "touchmove":
                            t = ne.MOVE;break;default:
                            return;}var a,
                        i = o.originalEvent.touches[0];a = t == ne.UP ? de(t, o, null, null) : de(t, o, i.pageX, i.pageY), e(o.target).trigger(a);
                },
                    de = function de(o, t, a, i) {
                    return e.Event(o, { pageX: a, pageY: i, originalEvent: t });
                };"ontouchstart" in window ? (e(document).on("touchstart", re), e(document).on("touchmove", re), e(document).on("touchend", re)) : (e(document).on("mousedown", ce), e(document).on("mouseup", ce), e(document).on("mouseout", ce), e(document).on("mousemove", ce)), e(window).resize(function () {
                    e(".vbox-content").length && setTimeout(ie(), 800);
                });
            });
        } });
}(jQuery);
/*! selectize.js - v0.12.4 | https://github.com/selectize/selectize.js | Apache License (v2) */
!function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery", "sifter", "microplugin"], b) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = b(require("jquery"), require("sifter"), require("microplugin")) : a.Selectize = b(a.jQuery, a.Sifter, a.MicroPlugin);
}(this, function (a, b, c) {
    "use strict";
    var d = function d(a, b) {
        if ("string" != typeof b || b.length) {
            var c = "string" == typeof b ? new RegExp(b, "i") : b,
                d = function d(a) {
                var b = 0;if (3 === a.nodeType) {
                    var e = a.data.search(c);if (e >= 0 && a.data.length > 0) {
                        var f = a.data.match(c),
                            g = document.createElement("span");g.className = "highlight";var h = a.splitText(e),
                            i = (h.splitText(f[0].length), h.cloneNode(!0));g.appendChild(i), h.parentNode.replaceChild(g, h), b = 1;
                    }
                } else if (1 === a.nodeType && a.childNodes && !/(script|style)/i.test(a.tagName)) for (var j = 0; j < a.childNodes.length; ++j) {
                    j += d(a.childNodes[j]);
                }return b;
            };return a.each(function () {
                d(this);
            });
        }
    };a.fn.removeHighlight = function () {
        return this.find("span.highlight").each(function () {
            this.parentNode.firstChild.nodeName;var a = this.parentNode;a.replaceChild(this.firstChild, this), a.normalize();
        }).end();
    };var e = function e() {};e.prototype = { on: function on(a, b) {
            this._events = this._events || {}, this._events[a] = this._events[a] || [], this._events[a].push(b);
        }, off: function off(a, b) {
            var c = arguments.length;return 0 === c ? delete this._events : 1 === c ? delete this._events[a] : (this._events = this._events || {}, void (a in this._events != !1 && this._events[a].splice(this._events[a].indexOf(b), 1)));
        }, trigger: function trigger(a) {
            if (this._events = this._events || {}, a in this._events != !1) for (var b = 0; b < this._events[a].length; b++) {
                this._events[a][b].apply(this, Array.prototype.slice.call(arguments, 1));
            }
        } }, e.mixin = function (a) {
        for (var b = ["on", "off", "trigger"], c = 0; c < b.length; c++) {
            a.prototype[b[c]] = e.prototype[b[c]];
        }
    };var f = /Mac/.test(navigator.userAgent),
        g = 65,
        h = 13,
        i = 27,
        j = 37,
        k = 38,
        l = 80,
        m = 39,
        n = 40,
        o = 78,
        p = 8,
        q = 46,
        r = 16,
        s = f ? 91 : 17,
        t = f ? 18 : 17,
        u = 9,
        v = 1,
        w = 2,
        x = !/android/i.test(window.navigator.userAgent) && !!document.createElement("input").validity,
        y = function y(a) {
        return "undefined" != typeof a;
    },
        z = function z(a) {
        return "undefined" == typeof a || null === a ? null : "boolean" == typeof a ? a ? "1" : "0" : a + "";
    },
        A = function A(a) {
        return (a + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    },
        B = {};B.before = function (a, b, c) {
        var d = a[b];a[b] = function () {
            return c.apply(a, arguments), d.apply(a, arguments);
        };
    }, B.after = function (a, b, c) {
        var d = a[b];a[b] = function () {
            var b = d.apply(a, arguments);return c.apply(a, arguments), b;
        };
    };var C = function C(a) {
        var b = !1;return function () {
            b || (b = !0, a.apply(this, arguments));
        };
    },
        D = function D(a, b) {
        var c;return function () {
            var d = this,
                e = arguments;window.clearTimeout(c), c = window.setTimeout(function () {
                a.apply(d, e);
            }, b);
        };
    },
        E = function E(a, b, c) {
        var d,
            e = a.trigger,
            f = {};a.trigger = function () {
            var c = arguments[0];return b.indexOf(c) === -1 ? e.apply(a, arguments) : void (f[c] = arguments);
        }, c.apply(a, []), a.trigger = e;for (d in f) {
            f.hasOwnProperty(d) && e.apply(a, f[d]);
        }
    },
        F = function F(a, b, c, d) {
        a.on(b, c, function (b) {
            for (var c = b.target; c && c.parentNode !== a[0];) {
                c = c.parentNode;
            }return b.currentTarget = c, d.apply(this, [b]);
        });
    },
        G = function G(a) {
        var b = {};if ("selectionStart" in a) b.start = a.selectionStart, b.length = a.selectionEnd - b.start;else if (document.selection) {
            a.focus();var c = document.selection.createRange(),
                d = document.selection.createRange().text.length;c.moveStart("character", -a.value.length), b.start = c.text.length - d, b.length = d;
        }return b;
    },
        H = function H(a, b, c) {
        var d,
            e,
            f = {};if (c) for (d = 0, e = c.length; d < e; d++) {
            f[c[d]] = a.css(c[d]);
        } else f = a.css();b.css(f);
    },
        I = function I(b, c) {
        if (!b) return 0;var d = a("<test>").css({ position: "absolute", top: -99999, left: -99999, width: "auto", padding: 0, whiteSpace: "pre" }).text(b).appendTo("body");H(c, d, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]);var e = d.width();return d.remove(), e;
    },
        J = function J(a) {
        var b = null,
            c = function c(_c, d) {
            var e, f, g, h, i, j, k, l;_c = _c || window.event || {}, d = d || {}, _c.metaKey || _c.altKey || (d.force || a.data("grow") !== !1) && (e = a.val(), _c.type && "keydown" === _c.type.toLowerCase() && (f = _c.keyCode, g = f >= 97 && f <= 122 || f >= 65 && f <= 90 || f >= 48 && f <= 57 || 32 === f, f === q || f === p ? (l = G(a[0]), l.length ? e = e.substring(0, l.start) + e.substring(l.start + l.length) : f === p && l.start ? e = e.substring(0, l.start - 1) + e.substring(l.start + 1) : f === q && "undefined" != typeof l.start && (e = e.substring(0, l.start) + e.substring(l.start + 1))) : g && (j = _c.shiftKey, k = String.fromCharCode(_c.keyCode), k = j ? k.toUpperCase() : k.toLowerCase(), e += k)), h = a.attr("placeholder"), !e && h && (e = h), i = I(e, a) + 4, i !== b && (b = i, a.width(i), a.triggerHandler("resize")));
        };a.on("keydown keyup update blur", c), c();
    },
        K = function K(a) {
        var b = document.createElement("div");return b.appendChild(a.cloneNode(!0)), b.innerHTML;
    },
        L = function L(a, b) {
        b || (b = {});var c = "Selectize";console.error(c + ": " + a), b.explanation && (console.group && console.group(), console.error(b.explanation), console.group && console.groupEnd());
    },
        M = function M(c, d) {
        var e,
            f,
            g,
            h,
            i = this;h = c[0], h.selectize = i;var j = window.getComputedStyle && window.getComputedStyle(h, null);if (g = j ? j.getPropertyValue("direction") : h.currentStyle && h.currentStyle.direction, g = g || c.parents("[dir]:first").attr("dir") || "", a.extend(i, { order: 0, settings: d, $input: c, tabIndex: c.attr("tabindex") || "", tagType: "select" === h.tagName.toLowerCase() ? v : w, rtl: /rtl/i.test(g), eventNS: ".selectize" + ++M.count, highlightedValue: null, isOpen: !1, isDisabled: !1, isRequired: c.is("[required]"), isInvalid: !1, isLocked: !1, isFocused: !1, isInputHidden: !1, isSetup: !1, isShiftDown: !1, isCmdDown: !1, isCtrlDown: !1, ignoreFocus: !1, ignoreBlur: !1, ignoreHover: !1, hasOptions: !1, currentResults: null, lastValue: "", caretPos: 0, loading: 0, loadedSearches: {}, $activeOption: null, $activeItems: [], optgroups: {}, options: {}, userOptions: {}, items: [], renderCache: {}, onSearchChange: null === d.loadThrottle ? i.onSearchChange : D(i.onSearchChange, d.loadThrottle) }), i.sifter = new b(this.options, { diacritics: d.diacritics }), i.settings.options) {
            for (e = 0, f = i.settings.options.length; e < f; e++) {
                i.registerOption(i.settings.options[e]);
            }delete i.settings.options;
        }if (i.settings.optgroups) {
            for (e = 0, f = i.settings.optgroups.length; e < f; e++) {
                i.registerOptionGroup(i.settings.optgroups[e]);
            }delete i.settings.optgroups;
        }i.settings.mode = i.settings.mode || (1 === i.settings.maxItems ? "single" : "multi"), "boolean" != typeof i.settings.hideSelected && (i.settings.hideSelected = "multi" === i.settings.mode), i.initializePlugins(i.settings.plugins), i.setupCallbacks(), i.setupTemplates(), i.setup();
    };return e.mixin(M), "undefined" != typeof c ? c.mixin(M) : L("Dependency MicroPlugin is missing", { explanation: 'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.' }), a.extend(M.prototype, { setup: function setup() {
            var b,
                c,
                d,
                e,
                g,
                h,
                i,
                j,
                k,
                l,
                m = this,
                n = m.settings,
                o = m.eventNS,
                p = a(window),
                q = a(document),
                u = m.$input;if (i = m.settings.mode, j = u.attr("class") || "", b = a("<div>").addClass(n.wrapperClass).addClass(j).addClass(i), c = a("<div>").addClass(n.inputClass).addClass("items").appendTo(b), d = a('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex", u.is(":disabled") ? "-1" : m.tabIndex), h = a(n.dropdownParent || b), e = a("<div>").addClass(n.dropdownClass).addClass(i).hide().appendTo(h), g = a("<div>").addClass(n.dropdownContentClass).appendTo(e), (l = u.attr("id")) && (d.attr("id", l + "-selectized"), a("label[for='" + l + "']").attr("for", l + "-selectized")), m.settings.copyClassesToDropdown && e.addClass(j), b.css({ width: u[0].style.width }), m.plugins.names.length && (k = "plugin-" + m.plugins.names.join(" plugin-"), b.addClass(k), e.addClass(k)), (null === n.maxItems || n.maxItems > 1) && m.tagType === v && u.attr("multiple", "multiple"), m.settings.placeholder && d.attr("placeholder", n.placeholder), !m.settings.splitOn && m.settings.delimiter) {
                var w = m.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");m.settings.splitOn = new RegExp("\\s*" + w + "+\\s*");
            }u.attr("autocorrect") && d.attr("autocorrect", u.attr("autocorrect")), u.attr("autocapitalize") && d.attr("autocapitalize", u.attr("autocapitalize")), m.$wrapper = b, m.$control = c, m.$control_input = d, m.$dropdown = e, m.$dropdown_content = g, e.on("mouseenter", "[data-selectable]", function () {
                return m.onOptionHover.apply(m, arguments);
            }), e.on("mousedown click", "[data-selectable]", function () {
                return m.onOptionSelect.apply(m, arguments);
            }), F(c, "mousedown", "*:not(input)", function () {
                return m.onItemSelect.apply(m, arguments);
            }), J(d), c.on({ mousedown: function mousedown() {
                    return m.onMouseDown.apply(m, arguments);
                }, click: function click() {
                    return m.onClick.apply(m, arguments);
                } }), d.on({ mousedown: function mousedown(a) {
                    a.stopPropagation();
                }, keydown: function keydown() {
                    return m.onKeyDown.apply(m, arguments);
                }, keyup: function keyup() {
                    return m.onKeyUp.apply(m, arguments);
                }, keypress: function keypress() {
                    return m.onKeyPress.apply(m, arguments);
                }, resize: function resize() {
                    m.positionDropdown.apply(m, []);
                }, blur: function blur() {
                    return m.onBlur.apply(m, arguments);
                }, focus: function focus() {
                    return m.ignoreBlur = !1, m.onFocus.apply(m, arguments);
                }, paste: function paste() {
                    return m.onPaste.apply(m, arguments);
                } }), q.on("keydown" + o, function (a) {
                m.isCmdDown = a[f ? "metaKey" : "ctrlKey"], m.isCtrlDown = a[f ? "altKey" : "ctrlKey"], m.isShiftDown = a.shiftKey;
            }), q.on("keyup" + o, function (a) {
                a.keyCode === t && (m.isCtrlDown = !1), a.keyCode === r && (m.isShiftDown = !1), a.keyCode === s && (m.isCmdDown = !1);
            }), q.on("mousedown" + o, function (a) {
                if (m.isFocused) {
                    if (a.target === m.$dropdown[0] || a.target.parentNode === m.$dropdown[0]) return !1;m.$control.has(a.target).length || a.target === m.$control[0] || m.blur(a.target);
                }
            }), p.on(["scroll" + o, "resize" + o].join(" "), function () {
                m.isOpen && m.positionDropdown.apply(m, arguments);
            }), p.on("mousemove" + o, function () {
                m.ignoreHover = !1;
            }), this.revertSettings = { $children: u.children().detach(), tabindex: u.attr("tabindex") }, u.attr("tabindex", -1).hide().after(m.$wrapper), a.isArray(n.items) && (m.setValue(n.items), delete n.items), x && u.on("invalid" + o, function (a) {
                a.preventDefault(), m.isInvalid = !0, m.refreshState();
            }), m.updateOriginalInput(), m.refreshItems(), m.refreshState(), m.updatePlaceholder(), m.isSetup = !0, u.is(":disabled") && m.disable(), m.on("change", this.onChange), u.data("selectize", m), u.addClass("selectized"), m.trigger("initialize"), n.preload === !0 && m.onSearchChange("");
        }, setupTemplates: function setupTemplates() {
            var b = this,
                c = b.settings.labelField,
                d = b.settings.optgroupLabelField,
                e = { optgroup: function optgroup(a) {
                    return '<div class="optgroup">' + a.html + "</div>";
                }, optgroup_header: function optgroup_header(a, b) {
                    return '<div class="optgroup-header">' + b(a[d]) + "</div>";
                }, option: function option(a, b) {
                    return '<div class="option">' + b(a[c]) + "</div>";
                }, item: function item(a, b) {
                    return '<div class="item">' + b(a[c]) + "</div>";
                }, option_create: function option_create(a, b) {
                    return '<div class="create">Add <strong>' + b(a.input) + "</strong>&hellip;</div>";
                } };b.settings.render = a.extend({}, e, b.settings.render);
        }, setupCallbacks: function setupCallbacks() {
            var a,
                b,
                c = { initialize: "onInitialize", change: "onChange", item_add: "onItemAdd", item_remove: "onItemRemove", clear: "onClear", option_add: "onOptionAdd", option_remove: "onOptionRemove", option_clear: "onOptionClear", optgroup_add: "onOptionGroupAdd", optgroup_remove: "onOptionGroupRemove", optgroup_clear: "onOptionGroupClear", dropdown_open: "onDropdownOpen", dropdown_close: "onDropdownClose", type: "onType", load: "onLoad", focus: "onFocus", blur: "onBlur" };for (a in c) {
                c.hasOwnProperty(a) && (b = this.settings[c[a]], b && this.on(a, b));
            }
        }, onClick: function onClick(a) {
            var b = this;b.isFocused || (b.focus(), a.preventDefault());
        }, onMouseDown: function onMouseDown(b) {
            var c = this,
                d = b.isDefaultPrevented();a(b.target);if (c.isFocused) {
                if (b.target !== c.$control_input[0]) return "single" === c.settings.mode ? c.isOpen ? c.close() : c.open() : d || c.setActiveItem(null), !1;
            } else d || window.setTimeout(function () {
                c.focus();
            }, 0);
        }, onChange: function onChange() {
            this.$input.trigger("change");
        }, onPaste: function onPaste(b) {
            var c = this;return c.isFull() || c.isInputHidden || c.isLocked ? void b.preventDefault() : void (c.settings.splitOn && setTimeout(function () {
                var b = c.$control_input.val();if (b.match(c.settings.splitOn)) for (var d = a.trim(b).split(c.settings.splitOn), e = 0, f = d.length; e < f; e++) {
                    c.createItem(d[e]);
                }
            }, 0));
        }, onKeyPress: function onKeyPress(a) {
            if (this.isLocked) return a && a.preventDefault();var b = String.fromCharCode(a.keyCode || a.which);return this.settings.create && "multi" === this.settings.mode && b === this.settings.delimiter ? (this.createItem(), a.preventDefault(), !1) : void 0;
        }, onKeyDown: function onKeyDown(a) {
            var b = (a.target === this.$control_input[0], this);if (b.isLocked) return void (a.keyCode !== u && a.preventDefault());switch (a.keyCode) {case g:
                    if (b.isCmdDown) return void b.selectAll();break;case i:
                    return void (b.isOpen && (a.preventDefault(), a.stopPropagation(), b.close()));case o:
                    if (!a.ctrlKey || a.altKey) break;case n:
                    if (!b.isOpen && b.hasOptions) b.open();else if (b.$activeOption) {
                        b.ignoreHover = !0;var c = b.getAdjacentOption(b.$activeOption, 1);c.length && b.setActiveOption(c, !0, !0);
                    }return void a.preventDefault();case l:
                    if (!a.ctrlKey || a.altKey) break;case k:
                    if (b.$activeOption) {
                        b.ignoreHover = !0;var d = b.getAdjacentOption(b.$activeOption, -1);d.length && b.setActiveOption(d, !0, !0);
                    }return void a.preventDefault();case h:
                    return void (b.isOpen && b.$activeOption && (b.onOptionSelect({ currentTarget: b.$activeOption }), a.preventDefault()));case j:
                    return void b.advanceSelection(-1, a);case m:
                    return void b.advanceSelection(1, a);case u:
                    return b.settings.selectOnTab && b.isOpen && b.$activeOption && (b.onOptionSelect({ currentTarget: b.$activeOption }), b.isFull() || a.preventDefault()), void (b.settings.create && b.createItem() && a.preventDefault());case p:case q:
                    return void b.deleteSelection(a);}return !b.isFull() && !b.isInputHidden || (f ? a.metaKey : a.ctrlKey) ? void 0 : void a.preventDefault();
        }, onKeyUp: function onKeyUp(a) {
            var b = this;if (b.isLocked) return a && a.preventDefault();var c = b.$control_input.val() || "";b.lastValue !== c && (b.lastValue = c, b.onSearchChange(c), b.refreshOptions(), b.trigger("type", c));
        }, onSearchChange: function onSearchChange(a) {
            var b = this,
                c = b.settings.load;c && (b.loadedSearches.hasOwnProperty(a) || (b.loadedSearches[a] = !0, b.load(function (d) {
                c.apply(b, [a, d]);
            })));
        }, onFocus: function onFocus(a) {
            var b = this,
                c = b.isFocused;return b.isDisabled ? (b.blur(), a && a.preventDefault(), !1) : void (b.ignoreFocus || (b.isFocused = !0, "focus" === b.settings.preload && b.onSearchChange(""), c || b.trigger("focus"), b.$activeItems.length || (b.showInput(), b.setActiveItem(null), b.refreshOptions(!!b.settings.openOnFocus)), b.refreshState()));
        }, onBlur: function onBlur(a, b) {
            var c = this;if (c.isFocused && (c.isFocused = !1, !c.ignoreFocus)) {
                if (!c.ignoreBlur && document.activeElement === c.$dropdown_content[0]) return c.ignoreBlur = !0, void c.onFocus(a);var d = function d() {
                    c.close(), c.setTextboxValue(""), c.setActiveItem(null), c.setActiveOption(null), c.setCaret(c.items.length), c.refreshState(), b && b.focus && b.focus(), c.ignoreFocus = !1, c.trigger("blur");
                };c.ignoreFocus = !0, c.settings.create && c.settings.createOnBlur ? c.createItem(null, !1, d) : d();
            }
        }, onOptionHover: function onOptionHover(a) {
            this.ignoreHover || this.setActiveOption(a.currentTarget, !1);
        }, onOptionSelect: function onOptionSelect(b) {
            var c,
                d,
                e = this;b.preventDefault && (b.preventDefault(), b.stopPropagation()), d = a(b.currentTarget), d.hasClass("create") ? e.createItem(null, function () {
                e.settings.closeAfterSelect && e.close();
            }) : (c = d.attr("data-value"), "undefined" != typeof c && (e.lastQuery = null, e.setTextboxValue(""), e.addItem(c), e.settings.closeAfterSelect ? e.close() : !e.settings.hideSelected && b.type && /mouse/.test(b.type) && e.setActiveOption(e.getOption(c))));
        }, onItemSelect: function onItemSelect(a) {
            var b = this;b.isLocked || "multi" === b.settings.mode && (a.preventDefault(), b.setActiveItem(a.currentTarget, a));
        }, load: function load(a) {
            var b = this,
                c = b.$wrapper.addClass(b.settings.loadingClass);b.loading++, a.apply(b, [function (a) {
                b.loading = Math.max(b.loading - 1, 0), a && a.length && (b.addOption(a), b.refreshOptions(b.isFocused && !b.isInputHidden)), b.loading || c.removeClass(b.settings.loadingClass), b.trigger("load", a);
            }]);
        }, setTextboxValue: function setTextboxValue(a) {
            var b = this.$control_input,
                c = b.val() !== a;c && (b.val(a).triggerHandler("update"), this.lastValue = a);
        }, getValue: function getValue() {
            return this.tagType === v && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter);
        }, setValue: function setValue(a, b) {
            var c = b ? [] : ["change"];E(this, c, function () {
                this.clear(b), this.addItems(a, b);
            });
        }, setActiveItem: function setActiveItem(b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l = this;if ("single" !== l.settings.mode) {
                if (b = a(b), !b.length) return a(l.$activeItems).removeClass("active"), l.$activeItems = [], void (l.isFocused && l.showInput());if (d = c && c.type.toLowerCase(), "mousedown" === d && l.isShiftDown && l.$activeItems.length) {
                    for (k = l.$control.children(".active:last"), g = Array.prototype.indexOf.apply(l.$control[0].childNodes, [k[0]]), h = Array.prototype.indexOf.apply(l.$control[0].childNodes, [b[0]]), g > h && (j = g, g = h, h = j), e = g; e <= h; e++) {
                        i = l.$control[0].childNodes[e], l.$activeItems.indexOf(i) === -1 && (a(i).addClass("active"), l.$activeItems.push(i));
                    }c.preventDefault();
                } else "mousedown" === d && l.isCtrlDown || "keydown" === d && this.isShiftDown ? b.hasClass("active") ? (f = l.$activeItems.indexOf(b[0]), l.$activeItems.splice(f, 1), b.removeClass("active")) : l.$activeItems.push(b.addClass("active")[0]) : (a(l.$activeItems).removeClass("active"), l.$activeItems = [b.addClass("active")[0]]);l.hideInput(), this.isFocused || l.focus();
            }
        }, setActiveOption: function setActiveOption(b, c, d) {
            var e,
                f,
                g,
                h,
                i,
                j = this;j.$activeOption && j.$activeOption.removeClass("active"), j.$activeOption = null, b = a(b), b.length && (j.$activeOption = b.addClass("active"), !c && y(c) || (e = j.$dropdown_content.height(), f = j.$activeOption.outerHeight(!0), c = j.$dropdown_content.scrollTop() || 0, g = j.$activeOption.offset().top - j.$dropdown_content.offset().top + c, h = g, i = g - e + f, g + f > e + c ? j.$dropdown_content.stop().animate({ scrollTop: i }, d ? j.settings.scrollDuration : 0) : g < c && j.$dropdown_content.stop().animate({ scrollTop: h }, d ? j.settings.scrollDuration : 0)));
        }, selectAll: function selectAll() {
            var a = this;"single" !== a.settings.mode && (a.$activeItems = Array.prototype.slice.apply(a.$control.children(":not(input)").addClass("active")), a.$activeItems.length && (a.hideInput(), a.close()), a.focus());
        }, hideInput: function hideInput() {
            var a = this;a.setTextboxValue(""), a.$control_input.css({ opacity: 0, position: "absolute", left: a.rtl ? 1e4 : -1e4 }), a.isInputHidden = !0;
        }, showInput: function showInput() {
            this.$control_input.css({ opacity: 1, position: "relative", left: 0 }), this.isInputHidden = !1;
        }, focus: function focus() {
            var a = this;a.isDisabled || (a.ignoreFocus = !0, a.$control_input[0].focus(), window.setTimeout(function () {
                a.ignoreFocus = !1, a.onFocus();
            }, 0));
        }, blur: function blur(a) {
            this.$control_input[0].blur(), this.onBlur(null, a);
        }, getScoreFunction: function getScoreFunction(a) {
            return this.sifter.getScoreFunction(a, this.getSearchOptions());
        }, getSearchOptions: function getSearchOptions() {
            var a = this.settings,
                b = a.sortField;return "string" == typeof b && (b = [{ field: b }]), { fields: a.searchField, conjunction: a.searchConjunction, sort: b };
        }, search: function search(b) {
            var c,
                d,
                e,
                f = this,
                g = f.settings,
                h = this.getSearchOptions();if (g.score && (e = f.settings.score.apply(this, [b]), "function" != typeof e)) throw new Error('Selectize "score" setting must be a function that returns a function');if (b !== f.lastQuery ? (f.lastQuery = b, d = f.sifter.search(b, a.extend(h, { score: e })), f.currentResults = d) : d = a.extend(!0, {}, f.currentResults), g.hideSelected) for (c = d.items.length - 1; c >= 0; c--) {
                f.items.indexOf(z(d.items[c].id)) !== -1 && d.items.splice(c, 1);
            }return d;
        }, refreshOptions: function refreshOptions(b) {
            var c, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;"undefined" == typeof b && (b = !0);var t = this,
                u = a.trim(t.$control_input.val()),
                v = t.search(u),
                w = t.$dropdown_content,
                x = t.$activeOption && z(t.$activeOption.attr("data-value"));for (g = v.items.length, "number" == typeof t.settings.maxOptions && (g = Math.min(g, t.settings.maxOptions)), h = {}, i = [], c = 0; c < g; c++) {
                for (j = t.options[v.items[c].id], k = t.render("option", j), l = j[t.settings.optgroupField] || "", m = a.isArray(l) ? l : [l], e = 0, f = m && m.length; e < f; e++) {
                    l = m[e], t.optgroups.hasOwnProperty(l) || (l = ""), h.hasOwnProperty(l) || (h[l] = document.createDocumentFragment(), i.push(l)), h[l].appendChild(k);
                }
            }for (this.settings.lockOptgroupOrder && i.sort(function (a, b) {
                var c = t.optgroups[a].$order || 0,
                    d = t.optgroups[b].$order || 0;return c - d;
            }), n = document.createDocumentFragment(), c = 0, g = i.length; c < g; c++) {
                l = i[c], t.optgroups.hasOwnProperty(l) && h[l].childNodes.length ? (o = document.createDocumentFragment(), o.appendChild(t.render("optgroup_header", t.optgroups[l])), o.appendChild(h[l]), n.appendChild(t.render("optgroup", a.extend({}, t.optgroups[l], { html: K(o), dom: o })))) : n.appendChild(h[l]);
            }if (w.html(n), t.settings.highlight && v.query.length && v.tokens.length) for (w.removeHighlight(), c = 0, g = v.tokens.length; c < g; c++) {
                d(w, v.tokens[c].regex);
            }if (!t.settings.hideSelected) for (c = 0, g = t.items.length; c < g; c++) {
                t.getOption(t.items[c]).addClass("selected");
            }p = t.canCreate(u), p && (w.prepend(t.render("option_create", { input: u })), s = a(w[0].childNodes[0])), t.hasOptions = v.items.length > 0 || p, t.hasOptions ? (v.items.length > 0 ? (r = x && t.getOption(x), r && r.length ? q = r : "single" === t.settings.mode && t.items.length && (q = t.getOption(t.items[0])), q && q.length || (q = s && !t.settings.addPrecedence ? t.getAdjacentOption(s, 1) : w.find("[data-selectable]:first"))) : q = s, t.setActiveOption(q), b && !t.isOpen && t.open()) : (t.setActiveOption(null), b && t.isOpen && t.close());
        }, addOption: function addOption(b) {
            var c,
                d,
                e,
                f = this;if (a.isArray(b)) for (c = 0, d = b.length; c < d; c++) {
                f.addOption(b[c]);
            } else (e = f.registerOption(b)) && (f.userOptions[e] = !0, f.lastQuery = null, f.trigger("option_add", e, b));
        }, registerOption: function registerOption(a) {
            var b = z(a[this.settings.valueField]);return "undefined" != typeof b && null !== b && !this.options.hasOwnProperty(b) && (a.$order = a.$order || ++this.order, this.options[b] = a, b);
        }, registerOptionGroup: function registerOptionGroup(a) {
            var b = z(a[this.settings.optgroupValueField]);return !!b && (a.$order = a.$order || ++this.order, this.optgroups[b] = a, b);
        }, addOptionGroup: function addOptionGroup(a, b) {
            b[this.settings.optgroupValueField] = a, (a = this.registerOptionGroup(b)) && this.trigger("optgroup_add", a, b);
        }, removeOptionGroup: function removeOptionGroup(a) {
            this.optgroups.hasOwnProperty(a) && (delete this.optgroups[a], this.renderCache = {}, this.trigger("optgroup_remove", a));
        }, clearOptionGroups: function clearOptionGroups() {
            this.optgroups = {}, this.renderCache = {}, this.trigger("optgroup_clear");
        }, updateOption: function updateOption(b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = this;if (b = z(b), f = z(c[k.settings.valueField]), null !== b && k.options.hasOwnProperty(b)) {
                if ("string" != typeof f) throw new Error("Value must be set in option data");j = k.options[b].$order, f !== b && (delete k.options[b], g = k.items.indexOf(b), g !== -1 && k.items.splice(g, 1, f)), c.$order = c.$order || j, k.options[f] = c, h = k.renderCache.item, i = k.renderCache.option, h && (delete h[b], delete h[f]), i && (delete i[b], delete i[f]), k.items.indexOf(f) !== -1 && (d = k.getItem(b), e = a(k.render("item", c)), d.hasClass("active") && e.addClass("active"), d.replaceWith(e)), k.lastQuery = null, k.isOpen && k.refreshOptions(!1);
            }
        }, removeOption: function removeOption(a, b) {
            var c = this;a = z(a);var d = c.renderCache.item,
                e = c.renderCache.option;d && delete d[a], e && delete e[a], delete c.userOptions[a], delete c.options[a], c.lastQuery = null, c.trigger("option_remove", a), c.removeItem(a, b);
        }, clearOptions: function clearOptions() {
            var a = this;a.loadedSearches = {}, a.userOptions = {}, a.renderCache = {}, a.options = a.sifter.items = {}, a.lastQuery = null, a.trigger("option_clear"), a.clear();
        }, getOption: function getOption(a) {
            return this.getElementWithValue(a, this.$dropdown_content.find("[data-selectable]"));
        }, getAdjacentOption: function getAdjacentOption(b, c) {
            var d = this.$dropdown.find("[data-selectable]"),
                e = d.index(b) + c;return e >= 0 && e < d.length ? d.eq(e) : a();
        }, getElementWithValue: function getElementWithValue(b, c) {
            if (b = z(b), "undefined" != typeof b && null !== b) for (var d = 0, e = c.length; d < e; d++) {
                if (c[d].getAttribute("data-value") === b) return a(c[d]);
            }return a();
        }, getItem: function getItem(a) {
            return this.getElementWithValue(a, this.$control.children());
        }, addItems: function addItems(b, c) {
            for (var d = a.isArray(b) ? b : [b], e = 0, f = d.length; e < f; e++) {
                this.isPending = e < f - 1, this.addItem(d[e], c);
            }
        }, addItem: function addItem(b, c) {
            var d = c ? [] : ["change"];E(this, d, function () {
                var d,
                    e,
                    f,
                    g,
                    h,
                    i = this,
                    j = i.settings.mode;return b = z(b), i.items.indexOf(b) !== -1 ? void ("single" === j && i.close()) : void (i.options.hasOwnProperty(b) && ("single" === j && i.clear(c), "multi" === j && i.isFull() || (d = a(i.render("item", i.options[b])), h = i.isFull(), i.items.splice(i.caretPos, 0, b), i.insertAtCaret(d), (!i.isPending || !h && i.isFull()) && i.refreshState(), i.isSetup && (f = i.$dropdown_content.find("[data-selectable]"), i.isPending || (e = i.getOption(b), g = i.getAdjacentOption(e, 1).attr("data-value"), i.refreshOptions(i.isFocused && "single" !== j), g && i.setActiveOption(i.getOption(g))), !f.length || i.isFull() ? i.close() : i.positionDropdown(), i.updatePlaceholder(), i.trigger("item_add", b, d), i.updateOriginalInput({ silent: c })))));
            });
        }, removeItem: function removeItem(b, c) {
            var d,
                e,
                f,
                g = this;d = b instanceof a ? b : g.getItem(b), b = z(d.attr("data-value")), e = g.items.indexOf(b), e !== -1 && (d.remove(), d.hasClass("active") && (f = g.$activeItems.indexOf(d[0]), g.$activeItems.splice(f, 1)), g.items.splice(e, 1), g.lastQuery = null, !g.settings.persist && g.userOptions.hasOwnProperty(b) && g.removeOption(b, c), e < g.caretPos && g.setCaret(g.caretPos - 1), g.refreshState(), g.updatePlaceholder(), g.updateOriginalInput({ silent: c }), g.positionDropdown(), g.trigger("item_remove", b, d));
        }, createItem: function createItem(b, c) {
            var d = this,
                e = d.caretPos;b = b || a.trim(d.$control_input.val() || "");var f = arguments[arguments.length - 1];if ("function" != typeof f && (f = function f() {}), "boolean" != typeof c && (c = !0), !d.canCreate(b)) return f(), !1;d.lock();var g = "function" == typeof d.settings.create ? this.settings.create : function (a) {
                var b = {};return b[d.settings.labelField] = a, b[d.settings.valueField] = a, b;
            },
                h = C(function (a) {
                if (d.unlock(), !a || "object" != (typeof a === "undefined" ? "undefined" : _typeof(a))) return f();var b = z(a[d.settings.valueField]);return "string" != typeof b ? f() : (d.setTextboxValue(""), d.addOption(a), d.setCaret(e), d.addItem(b), d.refreshOptions(c && "single" !== d.settings.mode), void f(a));
            }),
                i = g.apply(this, [b, h]);return "undefined" != typeof i && h(i), !0;
        }, refreshItems: function refreshItems() {
            this.lastQuery = null, this.isSetup && this.addItem(this.items), this.refreshState(), this.updateOriginalInput();
        }, refreshState: function refreshState() {
            this.refreshValidityState(), this.refreshClasses();
        }, refreshValidityState: function refreshValidityState() {
            if (!this.isRequired) return !1;var a = !this.items.length;this.isInvalid = a, this.$control_input.prop("required", a), this.$input.prop("required", !a);
        }, refreshClasses: function refreshClasses() {
            var b = this,
                c = b.isFull(),
                d = b.isLocked;b.$wrapper.toggleClass("rtl", b.rtl), b.$control.toggleClass("focus", b.isFocused).toggleClass("disabled", b.isDisabled).toggleClass("required", b.isRequired).toggleClass("invalid", b.isInvalid).toggleClass("locked", d).toggleClass("full", c).toggleClass("not-full", !c).toggleClass("input-active", b.isFocused && !b.isInputHidden).toggleClass("dropdown-active", b.isOpen).toggleClass("has-options", !a.isEmptyObject(b.options)).toggleClass("has-items", b.items.length > 0), b.$control_input.data("grow", !c && !d);
        }, isFull: function isFull() {
            return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems;
        }, updateOriginalInput: function updateOriginalInput(a) {
            var b,
                c,
                d,
                e,
                f = this;if (a = a || {}, f.tagType === v) {
                for (d = [], b = 0, c = f.items.length; b < c; b++) {
                    e = f.options[f.items[b]][f.settings.labelField] || "", d.push('<option value="' + A(f.items[b]) + '" selected="selected">' + A(e) + "</option>");
                }d.length || this.$input.attr("multiple") || d.push('<option value="" selected="selected"></option>'), f.$input.html(d.join(""));
            } else f.$input.val(f.getValue()), f.$input.attr("value", f.$input.val());f.isSetup && (a.silent || f.trigger("change", f.$input.val()));
        }, updatePlaceholder: function updatePlaceholder() {
            if (this.settings.placeholder) {
                var a = this.$control_input;this.items.length ? a.removeAttr("placeholder") : a.attr("placeholder", this.settings.placeholder), a.triggerHandler("update", { force: !0 });
            }
        }, open: function open() {
            var a = this;a.isLocked || a.isOpen || "multi" === a.settings.mode && a.isFull() || (a.focus(), a.isOpen = !0, a.refreshState(), a.$dropdown.css({ visibility: "hidden", display: "block" }), a.positionDropdown(), a.$dropdown.css({ visibility: "visible" }), a.trigger("dropdown_open", a.$dropdown));
        }, close: function close() {
            var a = this,
                b = a.isOpen;"single" === a.settings.mode && a.items.length && (a.hideInput(), a.$control_input.blur()), a.isOpen = !1, a.$dropdown.hide(), a.setActiveOption(null), a.refreshState(), b && a.trigger("dropdown_close", a.$dropdown);
        }, positionDropdown: function positionDropdown() {
            var a = this.$control,
                b = "body" === this.settings.dropdownParent ? a.offset() : a.position();b.top += a.outerHeight(!0), this.$dropdown.css({ width: a.outerWidth(), top: b.top, left: b.left });
        }, clear: function clear(a) {
            var b = this;b.items.length && (b.$control.children(":not(input)").remove(), b.items = [], b.lastQuery = null, b.setCaret(0), b.setActiveItem(null), b.updatePlaceholder(), b.updateOriginalInput({ silent: a }), b.refreshState(), b.showInput(), b.trigger("clear"));
        }, insertAtCaret: function insertAtCaret(b) {
            var c = Math.min(this.caretPos, this.items.length);0 === c ? this.$control.prepend(b) : a(this.$control[0].childNodes[c]).before(b), this.setCaret(c + 1);
        }, deleteSelection: function deleteSelection(b) {
            var c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l = this;if (e = b && b.keyCode === p ? -1 : 1, f = G(l.$control_input[0]), l.$activeOption && !l.settings.hideSelected && (i = l.getAdjacentOption(l.$activeOption, -1).attr("data-value")), g = [], l.$activeItems.length) {
                for (k = l.$control.children(".active:" + (e > 0 ? "last" : "first")), h = l.$control.children(":not(input)").index(k), e > 0 && h++, c = 0, d = l.$activeItems.length; c < d; c++) {
                    g.push(a(l.$activeItems[c]).attr("data-value"));
                }b && (b.preventDefault(), b.stopPropagation());
            } else (l.isFocused || "single" === l.settings.mode) && l.items.length && (e < 0 && 0 === f.start && 0 === f.length ? g.push(l.items[l.caretPos - 1]) : e > 0 && f.start === l.$control_input.val().length && g.push(l.items[l.caretPos]));if (!g.length || "function" == typeof l.settings.onDelete && l.settings.onDelete.apply(l, [g]) === !1) return !1;for ("undefined" != typeof h && l.setCaret(h); g.length;) {
                l.removeItem(g.pop());
            }return l.showInput(), l.positionDropdown(), l.refreshOptions(!0), i && (j = l.getOption(i), j.length && l.setActiveOption(j)), !0;
        }, advanceSelection: function advanceSelection(a, b) {
            var c,
                d,
                e,
                f,
                g,
                h,
                i = this;0 !== a && (i.rtl && (a *= -1), c = a > 0 ? "last" : "first", d = G(i.$control_input[0]), i.isFocused && !i.isInputHidden ? (f = i.$control_input.val().length, g = a < 0 ? 0 === d.start && 0 === d.length : d.start === f, g && !f && i.advanceCaret(a, b)) : (h = i.$control.children(".active:" + c), h.length && (e = i.$control.children(":not(input)").index(h), i.setActiveItem(null), i.setCaret(a > 0 ? e + 1 : e))));
        }, advanceCaret: function advanceCaret(a, b) {
            var c,
                d,
                e = this;0 !== a && (c = a > 0 ? "next" : "prev", e.isShiftDown ? (d = e.$control_input[c](), d.length && (e.hideInput(), e.setActiveItem(d), b && b.preventDefault())) : e.setCaret(e.caretPos + a));
        }, setCaret: function setCaret(b) {
            var c = this;if (b = "single" === c.settings.mode ? c.items.length : Math.max(0, Math.min(c.items.length, b)), !c.isPending) {
                var d, e, f, g;for (f = c.$control.children(":not(input)"), d = 0, e = f.length; d < e; d++) {
                    g = a(f[d]).detach(), d < b ? c.$control_input.before(g) : c.$control.append(g);
                }
            }c.caretPos = b;
        }, lock: function lock() {
            this.close(), this.isLocked = !0, this.refreshState();
        }, unlock: function unlock() {
            this.isLocked = !1, this.refreshState();
        }, disable: function disable() {
            var a = this;a.$input.prop("disabled", !0), a.$control_input.prop("disabled", !0).prop("tabindex", -1), a.isDisabled = !0, a.lock();
        }, enable: function enable() {
            var a = this;a.$input.prop("disabled", !1), a.$control_input.prop("disabled", !1).prop("tabindex", a.tabIndex), a.isDisabled = !1, a.unlock();
        }, destroy: function destroy() {
            var b = this,
                c = b.eventNS,
                d = b.revertSettings;b.trigger("destroy"), b.off(), b.$wrapper.remove(), b.$dropdown.remove(), b.$input.html("").append(d.$children).removeAttr("tabindex").removeClass("selectized").attr({ tabindex: d.tabindex }).show(), b.$control_input.removeData("grow"), b.$input.removeData("selectize"), a(window).off(c), a(document).off(c), a(document.body).off(c), delete b.$input[0].selectize;
        }, render: function render(b, c) {
            var d,
                e,
                f = "",
                g = !1,
                h = this;return "option" !== b && "item" !== b || (d = z(c[h.settings.valueField]), g = !!d), g && (y(h.renderCache[b]) || (h.renderCache[b] = {}), h.renderCache[b].hasOwnProperty(d)) ? h.renderCache[b][d] : (f = a(h.settings.render[b].apply(this, [c, A])), "option" === b || "option_create" === b ? f.attr("data-selectable", "") : "optgroup" === b && (e = c[h.settings.optgroupValueField] || "", f.attr("data-group", e)), "option" !== b && "item" !== b || f.attr("data-value", d || ""), g && (h.renderCache[b][d] = f[0]), f[0]);
        }, clearCache: function clearCache(a) {
            var b = this;"undefined" == typeof a ? b.renderCache = {} : delete b.renderCache[a];
        }, canCreate: function canCreate(a) {
            var b = this;if (!b.settings.create) return !1;var c = b.settings.createFilter;return a.length && ("function" != typeof c || c.apply(b, [a])) && ("string" != typeof c || new RegExp(c).test(a)) && (!(c instanceof RegExp) || c.test(a));
        } }), M.count = 0, M.defaults = { options: [], optgroups: [], plugins: [], delimiter: ",", splitOn: null, persist: !0, diacritics: !0, create: !1, createOnBlur: !1, createFilter: null, highlight: !0, openOnFocus: !0, maxOptions: 1e3, maxItems: null, hideSelected: null, addPrecedence: !1, selectOnTab: !1, preload: !1, allowEmptyOption: !1, closeAfterSelect: !1, scrollDuration: 60, loadThrottle: 300, loadingClass: "loading", dataAttr: "data-data", optgroupField: "optgroup", valueField: "value", labelField: "text", optgroupLabelField: "label", optgroupValueField: "value", lockOptgroupOrder: !1, sortField: "$order", searchField: ["text"], searchConjunction: "and", mode: null, wrapperClass: "selectize-control", inputClass: "selectize-input", dropdownClass: "selectize-dropdown", dropdownContentClass: "selectize-dropdown-content",
        dropdownParent: null, copyClassesToDropdown: !0, render: {} }, a.fn.selectize = function (b) {
        var c = a.fn.selectize.defaults,
            d = a.extend({}, c, b),
            e = d.dataAttr,
            f = d.labelField,
            g = d.valueField,
            h = d.optgroupField,
            i = d.optgroupLabelField,
            j = d.optgroupValueField,
            k = function k(b, c) {
            var h,
                i,
                j,
                k,
                l = b.attr(e);if (l) for (c.options = JSON.parse(l), h = 0, i = c.options.length; h < i; h++) {
                c.items.push(c.options[h][g]);
            } else {
                var m = a.trim(b.val() || "");if (!d.allowEmptyOption && !m.length) return;for (j = m.split(d.delimiter), h = 0, i = j.length; h < i; h++) {
                    k = {}, k[f] = j[h], k[g] = j[h], c.options.push(k);
                }c.items = j;
            }
        },
            l = function l(b, c) {
            var k,
                l,
                m,
                n,
                o = c.options,
                p = {},
                q = function q(a) {
                var b = e && a.attr(e);return "string" == typeof b && b.length ? JSON.parse(b) : null;
            },
                r = function r(b, e) {
                b = a(b);var i = z(b.val());if (i || d.allowEmptyOption) if (p.hasOwnProperty(i)) {
                    if (e) {
                        var j = p[i][h];j ? a.isArray(j) ? j.push(e) : p[i][h] = [j, e] : p[i][h] = e;
                    }
                } else {
                    var k = q(b) || {};k[f] = k[f] || b.text(), k[g] = k[g] || i, k[h] = k[h] || e, p[i] = k, o.push(k), b.is(":selected") && c.items.push(i);
                }
            },
                s = function s(b) {
                var d, e, f, g, h;for (b = a(b), f = b.attr("label"), f && (g = q(b) || {}, g[i] = f, g[j] = f, c.optgroups.push(g)), h = a("option", b), d = 0, e = h.length; d < e; d++) {
                    r(h[d], f);
                }
            };for (c.maxItems = b.attr("multiple") ? null : 1, n = b.children(), k = 0, l = n.length; k < l; k++) {
                m = n[k].tagName.toLowerCase(), "optgroup" === m ? s(n[k]) : "option" === m && r(n[k]);
            }
        };return this.each(function () {
            if (!this.selectize) {
                var e,
                    f = a(this),
                    g = this.tagName.toLowerCase(),
                    h = f.attr("placeholder") || f.attr("data-placeholder");h || d.allowEmptyOption || (h = f.children('option[value=""]').text());var i = { placeholder: h, options: [], optgroups: [], items: [] };"select" === g ? l(f, i) : k(f, i), e = new M(f, a.extend(!0, {}, c, i, b));
            }
        });
    }, a.fn.selectize.defaults = M.defaults, a.fn.selectize.support = { validity: x }, M.define("drag_drop", function (b) {
        if (!a.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');if ("multi" === this.settings.mode) {
            var c = this;c.lock = function () {
                var a = c.lock;return function () {
                    var b = c.$control.data("sortable");return b && b.disable(), a.apply(c, arguments);
                };
            }(), c.unlock = function () {
                var a = c.unlock;return function () {
                    var b = c.$control.data("sortable");return b && b.enable(), a.apply(c, arguments);
                };
            }(), c.setup = function () {
                var b = c.setup;return function () {
                    b.apply(this, arguments);var d = c.$control.sortable({ items: "[data-value]", forcePlaceholderSize: !0, disabled: c.isLocked, start: function start(a, b) {
                            b.placeholder.css("width", b.helper.css("width")), d.css({ overflow: "visible" });
                        }, stop: function stop() {
                            d.css({ overflow: "hidden" });var b = c.$activeItems ? c.$activeItems.slice() : null,
                                e = [];d.children("[data-value]").each(function () {
                                e.push(a(this).attr("data-value"));
                            }), c.setValue(e), c.setActiveItem(b);
                        } });
                };
            }();
        }
    }), M.define("dropdown_header", function (b) {
        var c = this;b = a.extend({ title: "Untitled", headerClass: "selectize-dropdown-header", titleRowClass: "selectize-dropdown-header-title", labelClass: "selectize-dropdown-header-label", closeClass: "selectize-dropdown-header-close", html: function html(a) {
                return '<div class="' + a.headerClass + '"><div class="' + a.titleRowClass + '"><span class="' + a.labelClass + '">' + a.title + '</span><a href="javascript:void(0)" class="' + a.closeClass + '">&times;</a></div></div>';
            } }, b), c.setup = function () {
            var d = c.setup;return function () {
                d.apply(c, arguments), c.$dropdown_header = a(b.html(b)), c.$dropdown.prepend(c.$dropdown_header);
            };
        }();
    }), M.define("optgroup_columns", function (b) {
        var c = this;b = a.extend({ equalizeWidth: !0, equalizeHeight: !0 }, b), this.getAdjacentOption = function (b, c) {
            var d = b.closest("[data-group]").find("[data-selectable]"),
                e = d.index(b) + c;return e >= 0 && e < d.length ? d.eq(e) : a();
        }, this.onKeyDown = function () {
            var a = c.onKeyDown;return function (b) {
                var d, e, f, g;return !this.isOpen || b.keyCode !== j && b.keyCode !== m ? a.apply(this, arguments) : (c.ignoreHover = !0, g = this.$activeOption.closest("[data-group]"), d = g.find("[data-selectable]").index(this.$activeOption), g = b.keyCode === j ? g.prev("[data-group]") : g.next("[data-group]"), f = g.find("[data-selectable]"), e = f.eq(Math.min(f.length - 1, d)), void (e.length && this.setActiveOption(e)));
            };
        }();var d = function d() {
            var a,
                b = d.width,
                c = document;return "undefined" == typeof b && (a = c.createElement("div"), a.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>', a = a.firstChild, c.body.appendChild(a), b = d.width = a.offsetWidth - a.clientWidth, c.body.removeChild(a)), b;
        },
            e = function e() {
            var e, f, g, h, i, j, k;if (k = a("[data-group]", c.$dropdown_content), f = k.length, f && c.$dropdown_content.width()) {
                if (b.equalizeHeight) {
                    for (g = 0, e = 0; e < f; e++) {
                        g = Math.max(g, k.eq(e).height());
                    }k.css({ height: g });
                }b.equalizeWidth && (j = c.$dropdown_content.innerWidth() - d(), h = Math.round(j / f), k.css({ width: h }), f > 1 && (i = j - h * (f - 1), k.eq(f - 1).css({ width: i })));
            }
        };(b.equalizeHeight || b.equalizeWidth) && (B.after(this, "positionDropdown", e), B.after(this, "refreshOptions", e));
    }), M.define("remove_button", function (b) {
        b = a.extend({ label: "&times;", title: "Remove", className: "remove", append: !0 }, b);var c = function c(b, _c2) {
            _c2.className = "remove-single";var d = b,
                e = '<a href="javascript:void(0)" class="' + _c2.className + '" tabindex="-1" title="' + A(_c2.title) + '">' + _c2.label + "</a>",
                f = function f(a, b) {
                return a + b;
            };b.setup = function () {
                var g = d.setup;return function () {
                    if (_c2.append) {
                        var h = a(d.$input.context).attr("id"),
                            i = (a("#" + h), d.settings.render.item);d.settings.render.item = function (a) {
                            return f(i.apply(b, arguments), e);
                        };
                    }g.apply(b, arguments), b.$control.on("click", "." + _c2.className, function (a) {
                        a.preventDefault(), d.isLocked || d.clear();
                    });
                };
            }();
        },
            d = function d(b, c) {
            var d = b,
                e = '<a href="javascript:void(0)" class="' + c.className + '" tabindex="-1" title="' + A(c.title) + '">' + c.label + "</a>",
                f = function f(a, b) {
                var c = a.search(/(<\/[^>]+>\s*)$/);return a.substring(0, c) + b + a.substring(c);
            };b.setup = function () {
                var g = d.setup;return function () {
                    if (c.append) {
                        var h = d.settings.render.item;d.settings.render.item = function (a) {
                            return f(h.apply(b, arguments), e);
                        };
                    }g.apply(b, arguments), b.$control.on("click", "." + c.className, function (b) {
                        if (b.preventDefault(), !d.isLocked) {
                            var c = a(b.currentTarget).parent();d.setActiveItem(c), d.deleteSelection() && d.setCaret(d.items.length);
                        }
                    });
                };
            }();
        };return "single" === this.settings.mode ? void c(this, b) : void d(this, b);
    }), M.define("restore_on_backspace", function (a) {
        var b = this;a.text = a.text || function (a) {
            return a[this.settings.labelField];
        }, this.onKeyDown = function () {
            var c = b.onKeyDown;return function (b) {
                var d, e;return b.keyCode === p && "" === this.$control_input.val() && !this.$activeItems.length && (d = this.caretPos - 1, d >= 0 && d < this.items.length) ? (e = this.options[this.items[d]], this.deleteSelection(b) && (this.setTextboxValue(a.text.apply(this, [e])), this.refreshOptions(!0)), void b.preventDefault()) : c.apply(this, arguments);
            };
        }();
    }), M;
});
//! moment.js
//! version : 2.20.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.moment = factory();
})(this, function () {
    'use strict';

    var hookCallback;

    function hooks() {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [],
            i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function some(fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

            if (m._strict) {
                isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            } else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        } else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
    }

    function absFloor(number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (_typeof(arguments[i]) === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set(config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function keys(obj) {
            var i,
                res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    };

    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({ unit: u, priority: priorities[u] });
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function func() {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i,
            length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '',
                i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1 = /\d/; //       0 - 9
    var match2 = /\d\d/; //      00 - 99
    var match3 = /\d{3}/; //     000 - 999
    var match4 = /\d{4}/; //    0000 - 9999
    var match6 = /[+-]?\d{6}/; // -999999 - 999999
    var match1to2 = /\d\d?/; //       0 - 99
    var match3to4 = /\d\d\d\d?/; //     999 - 9999
    var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3 = /\d{1,3}/; //       0 - 999
    var match1to4 = /\d{1,4}/; //       0 - 9999
    var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

    var matchUnsigned = /\d+/; //       0 - inf
    var matchSigned = /[+-]?\d+/; //    -inf - inf

    var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return isStrict && strictRegex ? strictRegex : regex;
        };
    }

    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
        var i,
            func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function func(input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
        return isLeapYear(this.year());
    }

    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get(mom, unit) {
        return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            } else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }

    function stringSet(units, value) {
        if ((typeof units === "undefined" ? "undefined" : _typeof(units)) === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return (n % x + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function indexOf(o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths(m, format) {
        if (!m) {
            return isArray(this._months) ? this._months : this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort(m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date = new Date(y, m, d, h, M, s, ms);

        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));

        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,

        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek() {
        return this._week.dow;
    }

    function localeFirstDayOfYear() {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays(m, format) {
        if (!m) {
            return isArray(this._weekdays) ? this._weekdays : this._weekdays['standalone'];
        }
        return isArray(this._weekdays) ? this._weekdays[m.day()] : this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort(m) {
        return m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin(m) {
        return m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }

    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });

    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }

    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    // months
    // week
    // weekdays
    // meridiem
    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0,
            j,
            next,
            locale,
            split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && typeof module !== 'undefined' && module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            } else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale(name, config) {
        if (config !== null) {
            var parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    if (!localeFamilies[config.parentLocale]) {
                        localeFamilies[config.parentLocale] = [];
                    }
                    localeFamilies[config.parentLocale].push({
                        name: name,
                        config: config
                    });
                    return null;
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale,
                tmpLocale,
                parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow(m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i,
            date,
            input = [],
            currentDate,
            expectedWeekday,
            yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]];

    // iso time formats and regexes
    var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim();
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100,
                h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged and will be removed in an upcoming major release. Please refer to ' + 'http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    });

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                } else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || format === undefined && input === '') {
            return createInvalid({ nullInput: true });
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    });

    var prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    });

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function now() {
        return Date.now ? Date.now() : +new Date();
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration(obj) {
        return obj instanceof Duration;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk = matches[matches.length - 1] || [];
        var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            } else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }

    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
        var duration = input,

        // matching against regexp is expensive, do it on demand
        match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : match[1] === '+' ? 1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign)
            };
        } else if (duration == null) {
            // checks for null or undefined
            duration = {};
        } else if ((typeof duration === "undefined" ? "undefined" : _typeof(duration)) === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = { milliseconds: 0, months: 0 };

        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M');

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val;val = period;period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1(time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone() {
        return new Moment(this);
    }

    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween(from, to, units, inclusivity) {
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) && (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
    }

    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
        var that, zoneDelta, delta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year':
                output = monthDiff(this, that) / 12;break;
            case 'month':
                output = monthDiff(this, that);break;
            case 'quarter':
                output = monthDiff(this, that) / 3;break;
            case 'second':
                output = (this - that) / 1e3;break; // 1000
            case 'minute':
                output = (this - that) / 6e4;break; // 1000 * 60
            case 'hour':
                output = (this - that) / 36e5;break; // 1000 * 60 * 60
            case 'day':
                output = (this - that - zoneDelta) / 864e5;break; // 1000 * 60 * 60 * 24, negate dst
            case 'week':
                output = (this - that - zoneDelta) / 6048e5;break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),

        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this._d.valueOf()).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect() {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    });

    function localeData() {
        return this._locale;
    }

    function startOf(units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
            case 'year':
                this.month(0);
            /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
            /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
            case 'date':
                this.hours(0);
            /* falls through */
            case 'hour':
                this.minutes(0);
            /* falls through */
            case 'minute':
                this.seconds(0);
            /* falls through */
            case 'second':
                this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf(units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }

        // 'date' is an alias for 'day', so it should be considered as such.
        if (units === 'date') {
            units = 'day';
        }

        return this.startOf(units).add(1, units === 'isoWeek' ? 'week' : units).subtract(1, 'ms');
    }

    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
        return new Date(this.valueOf());
    }

    function toArray() {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2() {
        return isValid(this);
    }

    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);

    // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }

    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIOROITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });

    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;

    // Year
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;

    // Week Year
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;

    // Quarter
    proto.quarter = proto.quarters = getSetQuarter;

    // Month
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;

    // Week
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;

    // Day
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;

    // Hour
    proto.hour = proto.hours = getSetHour;

    // Minute
    proto.minute = proto.minutes = getSetMinute;

    // Second
    proto.second = proto.seconds = getSetSecond;

    // Millisecond
    proto.millisecond = proto.milliseconds = getSetMillisecond;

    // Offset
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;

    // Timezone
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;

    // Deprecations
    proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix(input) {
        return createLocal(input * 1000);
    }

    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;

    // Month
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;

    // Week
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    // Day of Week
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;

    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;

    // Hours
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function ordinal(number) {
            var b = number % 10,
                output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports
    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs() {
        var data = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);

        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);

        return this;
    }

    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble() {
        var milliseconds = this._milliseconds;
        var days = this._days;
        var months = this._months;
        var data = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;

        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;

        hours = absFloor(minutes / 60);
        data.hours = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days = days;
        data.months = months;
        data.years = years;

        return this;
    }

    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays(months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as(units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week':
                    return days / 7 + milliseconds / 6048e5;
                case 'day':
                    return days + milliseconds / 864e5;
                case 'hour':
                    return days * 24 + milliseconds / 36e5;
                case 'minute':
                    return days * 1440 + milliseconds / 6e4;
                case 'second':
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 864e5) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) {
            return NaN;
        }
        return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
    }

    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds = makeAs('s');
    var asMinutes = makeAs('m');
    var asHours = makeAs('h');
    var asDays = makeAs('d');
    var asWeeks = makeAs('w');
    var asMonths = makeAs('M');
    var asYears = makeAs('y');

    function clone$1() {
        return createDuration(this);
    }

    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds = makeGetter('seconds');
    var minutes = makeGetter('minutes');
    var hours = makeGetter('hours');
    var days = makeGetter('days');
    var months = makeGetter('months');
    var years = makeGetter('years');

    function weeks() {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44, // a few seconds to seconds
        s: 45, // seconds to minute
        m: 45, // minutes to hour
        h: 22, // hours to day
        d: 26, // days to month
        M: 11 // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1(posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds = round(duration.as('s'));
        var minutes = round(duration.as('m'));
        var hours = round(duration.as('h'));
        var days = round(duration.as('d'));
        var months = round(duration.as('M'));
        var years = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize(withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return (x > 0) - (x < 0) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days = abs$1(this._days);
        var months = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' + (Y ? ymSign + Y + 'Y' : '') + (M ? ymSign + M + 'M' : '') + (D ? daysSign + D + 'D' : '') + (h || m || s ? 'T' : '') + (h ? hmsSign + h + 'H' : '') + (m ? hmsSign + m + 'M' : '') + (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;

    // Deprecations
    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.20.1';

    setHookCallback(createLocal);

    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD', // <input type="date" />
        TIME: 'HH:mm', // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
        WEEK: 'YYYY-[W]WW', // <input type="week" />
        MONTH: 'YYYY-MM' // <input type="month" />
    };

    return hooks;
});