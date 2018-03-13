
function setCookie(cname, cvalue, exdays) {  
    var d = new Date();  
    d.setTime(d.getTime() + (exdays*24*60*60*1000));  
    var expires = "expires="+d.toUTCString();  
    document.cookie = cname + "=" + cvalue + "; " + expires;  
}  

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

// 设备检测
function device(){
    var u = navigator.userAgent;
    var device = "";
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
          device = 'android';
    } else if (u.indexOf('iPhone') > -1) {
          device = "iphone";
    }
    return device;
}

// 时间格式化
function formatDateTime(inputTime,type) { 
    if (device() == "iphone"&&new Date(Date.now()).getTimezoneOffset()==0) { //ios时区转换
       inputTime = inputTime + 8*60*60*1000
    }
    var date = new Date(inputTime);  
    var y = date.getFullYear();    
    var m = date.getMonth() + 1;    
   // m = m < 10 ? ('0' + m) : m;    
    var d = date.getDate();    
    //d = d < 10 ? ('0' + d) : d;    
    var h = date.getHours();  
    h = h < 10 ? ('0' + h) : h;  
    var minute = date.getMinutes();  
    var second = date.getSeconds();  
    var week = date.getDay();
    minute = minute < 10 ? ('0' + minute) : minute;    
    second = second < 10 ? ('0' + second) : second;   
    var w = checkWeek(week);
    switch (type) {
        case 1:
            return h+':'+minute;  
            break;
        case 2:
            return  m + '月' + d + '日（' + w + '）';
            break;
        case 3:
            return  {date:m + '月' + d + '日' ,day:w};
            break;
        case 4:
            return  y + '年' + m + '月' + d + '日' + ' ' + h + ':' + minute;
            break;
        default:
            return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
    }
};
function checkWeek(week){
    var w = "";
    switch (week) {
        case 0:
            w = "周日";;  
            break;
        case 1:
            w = "周一";;
            break;
        case 2:
            w = "周二";;
            break;
        case 3:
            w = "周三";;
            break;
        case 4:
            w = "周四";;
            break;
        case 5:
            w = "周五";;
            break;
        case 6:
            w = "周六";;
            break;
    }
    return w;
}


// url字符串截取
function urlParmes(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}


// url字符串截取

function urlParmes(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    
    
    
    
    
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
    
}



//验证图片链接是否有效
function checkImage(imgurl){    
    var ImgObj = new Image(); //判断图片是否存在  
    ImgObj.src = imgurl;  
    //没有图片，则返回-1  
    if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {  
        return true;  
    } else {  
        return false;
    }
}


/*! layer mobile-v2.0 弹层组件移动版 License LGPL http://layer.layui.com/mobile */
/** mobile web toast、alert、confirm提示框
 * 
 * api参考layui mobile
 */
; !
function(a) {
    "use strict";
    var b = document,
    c = "querySelectorAll",
    d = "getElementsByClassName",
    e = function(a) {
        return b[c](a)
    },
    f = {
        type: 0,
        shade: !0,
        shadeClose: !0,
        fixed: !0,
        anim: "scale"
    },
    g = {
        extend: function(a) {
            var b = JSON.parse(JSON.stringify(f));
            for (var c in a) b[c] = a[c];
            return b
        },
        timer: {},
        end: {}
    };
    g.touch = function(a, b) {
        a.addEventListener("click",
        function(a) {
            b.call(this, a)
        },
        !1)
    };
    var h = 0,
    i = ["layui-m-layer"],
    j = function(a) {
        var b = this;
        b.config = g.extend(a),
        b.view()
    };
    j.prototype.view = function() {
        var a = this,
        c = a.config,
        f = b.createElement("div");
        a.id = f.id = i[0] + h,
        f.setAttribute("class", i[0] + " " + i[0] + (c.type || 0)),
        f.setAttribute("index", h);
        var g = function() {
            var a = "object" == typeof c.title;
            return c.title ? '<h3 style="' + (a ? c.title[1] : "") + '">' + (a ? c.title[0] : c.title) + "</h3>": ""
        } (),
        j = function() {
            "string" == typeof c.btn && (c.btn = [c.btn]);
            var a, b = (c.btn || []).length;
            return 0 !== b && c.btn ? (a = '<span yes type="1">' + c.btn[0] + "</span>", 2 === b && (a = '<span no type="0">' + c.btn[1] + "</span>" + a), '<div class="layui-m-layerbtn">' + a + "</div>") : ""
        } ();
        if (c.fixed || (c.top = c.hasOwnProperty("top") ? c.top: 100, c.style = c.style || "", c.style += " top:" + (b.body.scrollTop + c.top) + "px"), 2 === c.type && (c.content = '<i></i><i class="layui-m-layerload"></i><i></i><p>' + (c.content || "") + "</p>"), c.skin && (c.anim = "up"), "msg" === c.skin && (c.shade = !1), f.innerHTML = (c.shade ? "<div " + ("string" == typeof c.shade ? 'style="' + c.shade + '"': "") + ' class="layui-m-layershade"></div>': "") + '<div class="layui-m-layermain" ' + (c.fixed ? "": 'style="position:static;"') + '><div class="layui-m-layersection"><div class="layui-m-layerchild ' + (c.skin ? "layui-m-layer-" + c.skin + " ": "") + (c.className ? c.className: "") + " " + (c.anim ? "layui-m-anim-" + c.anim: "") + '" ' + (c.style ? 'style="' + c.style + '"': "") + ">" + g + '<div class="layui-m-layercont">' + c.content + "</div>" + j + "</div></div></div>", !c.type || 2 === c.type) {
            var k = b[d](i[0] + c.type),
            l = k.length;
            l >= 1 && layer.close(k[0].getAttribute("index"))
        }
        document.body.appendChild(f);
        var m = a.elem = e("#" + a.id)[0];
        c.success && c.success(m),
        a.index = h++,
        a.action(c, m)
    },
    j.prototype.action = function(a, b) {
        var c = this;
        a.time && (g.timer[c.index] = setTimeout(function() {
            layer.close(c.index)
        },
        1e3 * a.time));
        var e = function() {
            var b = this.getAttribute("type");
            0 == b ? (a.no && a.no(), layer.close(c.index)) : a.yes ? a.yes(c.index) : layer.close(c.index)
        };
        if (a.btn) for (var f = b[d]("layui-m-layerbtn")[0].children, h = f.length, i = 0; h > i; i++) g.touch(f[i], e);
        if (a.shade && a.shadeClose) {
            var j = b[d]("layui-m-layershade")[0];
            g.touch(j,
            function() {
                layer.close(c.index, a.end)
            })
        }
        a.end && (g.end[c.index] = a.end)
    },
    a.layer = {
        v: "2.0",
        index: h,
        open: function(a) {
            var b = new j(a || {});
            return b.index
        },
        close: function(a) {
            var c = e("#" + i[0] + a)[0];
            c && (c.innerHTML = "", b.body.removeChild(c), clearTimeout(g.timer[a]), delete g.timer[a], "function" == typeof g.end[a] && g.end[a](), delete g.end[a])
        },
        closeAll: function() {
            for (var a = b[d](i[0]), c = 0, e = a.length; e > c; c++) layer.close(0 | a[0].getAttribute("index"))
        }
    },
    "function" == typeof define ? define(function() {
        return layer
    }) : function() {
        var a = document.scripts,
        c = a[a.length - 1],
        d = c.src,
        e = d.substring(0, d.lastIndexOf("/") + 1);
        // c.getAttribute("merge") || document.head.appendChild(function() {
        //     var a = b.createElement("link");
        //     return a.href = e + "need/layer.css?2.0",
        //     a.type = "text/css",
        //     a.rel = "styleSheet",
        //     a.id = "layermcss",
        //     a
        // } ())
    } ()
} (window);
/*
 * Swipe 1.0
 *
 * Brad Birdsall, Prime
 * Copyright 2011, Licensed GPL & MIT
 *
 */
window.Swipe = function(element, options) {
    // return immediately if element doesn't exist
    if (!element) return null;
    var _this = this;
    // retreive options
    this.options = options || {};
    this.index = this.options.startSlide || 0;
    this.speed = this.options.speed || 300;
    this.callback = this.options.callback || function() {};
    this.delay = this.options.auto || 0;
    // reference dom elements
    this.container = element;
    this.element = this.container.children[0]; // the slide pane
    // static css
    this.container.style.overflow = 'hidden';
    this.element.style.listStyle = 'none';
    // trigger slider initialization
    this.setup();
    // begin auto slideshow
    this.begin();
    // add event listeners
    if (this.element.addEventListener) {
        this.element.addEventListener('touchstart', this, false);
        this.element.addEventListener('touchmove', this, false);
        this.element.addEventListener('touchend', this, false);
        this.element.addEventListener('webkitTransitionEnd', this, false);
        this.element.addEventListener('msTransitionEnd', this, false);
        this.element.addEventListener('oTransitionEnd', this, false);
        this.element.addEventListener('transitionend', this, false);
        window.addEventListener('resize', this, false);
    }
};
Swipe.prototype = {
    setup: function() {
        // get and measure amt of slides
        this.slides = this.element.children;
        this.length = this.slides.length;
        // return immediately if their are less than two slides
        if (this.length < 2) return null;
        // determine width of each slide
        this.width = this.container.getBoundingClientRect().width;
        // return immediately if measurement fails
        if (!this.width) return null;
        // hide slider element but keep positioning during setup
        this.container.style.visibility = 'hidden';
        // dynamic css
        this.element.style.width = (this.slides.length * this.width) + 'px';
        var index = this.slides.length;
        while (index--) {
            var el = this.slides[index];
            el.style.width = this.width + 'px';
            el.style.display = 'table-cell';
            el.style.verticalAlign = 'top';
        }
        // set start position and force translate to remove initial flickering
        this.slide(this.index, 0);
        // show slider element
        this.container.style.visibility = 'visible';
    },
    slide: function(index, duration) {
        var style = this.element.style;
        // fallback to default speed
        if (duration == undefined) {
            duration = this.speed;
        }
        // set duration speed (0 represents 1-to-1 scrolling)
        style.webkitTransitionDuration = style.MozTransitionDuration = style.msTransitionDuration = style.OTransitionDuration = style.transitionDuration = duration + 'ms';
        // translate to given index position
        style.MozTransform = style.webkitTransform = 'translate3d(' + -(index * this.width) + 'px,-50%,0)';
        style.msTransform = style.OTransform = 'translateX(' + -(index * this.width) + 'px)';
        // set new index to allow for expression arguments
        this.index = index;
    },
    getPos: function() {
        // return current index position
        return this.index;
    },
    prev: function(delay) {
        // cancel next scheduled automatic transition, if any
        this.delay = delay || 0;
        clearTimeout(this.interval);
        // if not at first slide
        if (this.index) this.slide(this.index-1, this.speed);
    },
    next: function(delay) {
        // cancel next scheduled automatic transition, if any
        this.delay = delay || 0;
        clearTimeout(this.interval);
        if (this.index < this.length - 1) this.slide(this.index+1, this.speed); // if not last slide
        else this.slide(0, this.speed); //if last slide return to start
    },
    begin: function() {
        var _this = this;
        this.interval = (this.delay)
            ? setTimeout(function() {
            _this.next(_this.delay);
        }, this.delay)
            : 0;
    },
    stop: function() {
        this.delay = 0;
        clearTimeout(this.interval);
    },
    resume: function() {
        this.delay = this.options.auto || 0;
        this.begin();
    },
    handleEvent: function(e) {
        switch (e.type) {
            case 'touchstart': this.onTouchStart(e); break;
            case 'touchmove': this.onTouchMove(e); break;
            case 'touchend': this.onTouchEnd(e); break;
            case 'webkitTransitionEnd':
            case 'msTransitionEnd':
            case 'oTransitionEnd':
            case 'transitionend': this.transitionEnd(e); break;
            case 'resize': this.setup(); break;
        }
    },
    transitionEnd: function(e) {
        if (this.delay) this.begin();
        this.callback(e, this.index, this.slides[this.index]);
    },
    onTouchStart: function(e) {
        this.start = {
            // get touch coordinates for delta calculations in onTouchMove
            pageX: e.touches[0].pageX,
            pageY: e.touches[0].pageY,
            // set initial timestamp of touch sequence
            time: Number( new Date() )
        };
        // used for testing first onTouchMove event
        this.isScrolling = undefined;
        // reset deltaX
        this.deltaX = 0;
        // set transition time to 0 for 1-to-1 touch movement
        this.element.style.MozTransitionDuration = this.element.style.webkitTransitionDuration = 0;
    },
    onTouchMove: function(e) {
        // ensure swiping with one touch and not pinching
        if(e.touches.length > 1 || e.scale && e.scale !== 1) return;
        this.deltaX = e.touches[0].pageX - this.start.pageX;
        // determine if scrolling test has run - one time test
        if ( typeof this.isScrolling == 'undefined') {
            this.isScrolling = !!( this.isScrolling || Math.abs(this.deltaX) < Math.abs(e.touches[0].pageY - this.start.pageY) );
        }
        // if user is not trying to scroll vertically
        if (!this.isScrolling) {
            // prevent native scrolling
            e.preventDefault();
            // cancel slideshow
            clearTimeout(this.interval);
            // increase resistance if first or last slide
            this.deltaX =
                this.deltaX /
                    ( (!this.index && this.deltaX > 0               // if first slide and sliding left
                        || this.index == this.length - 1              // or if last slide and sliding right
                        && this.deltaX < 0                            // and if sliding at all
                        ) ?
                        ( Math.abs(this.deltaX) / this.width + 1 )      // determine resistance level
                        : 1 );                                          // no resistance if false
            // translate immediately 1-to-1
            this.element.style.MozTransform = this.element.style.webkitTransform = 'translate3d(' + (this.deltaX - this.index * this.width) + 'px,-50%,0)';
        }
    },
    onTouchEnd: function(e) {
        // determine if slide attempt triggers next/prev slide
        var isValidSlide =
                Number(new Date()) - this.start.time < 250      // if slide duration is less than 250ms
                    && Math.abs(this.deltaX) > 20                   // and if slide amt is greater than 20px
                    || Math.abs(this.deltaX) > this.width/2,        // or if slide amt is greater than half the width
        // determine if slide attempt is past start and end
            isPastBounds =
                !this.index && this.deltaX > 0                          // if first slide and slide amt is greater than 0
                    || this.index == this.length - 1 && this.deltaX < 0;    // or if last slide and slide amt is less than 0
        // if not scrolling vertically
        if (!this.isScrolling) {
            // call slide function with slide end value based on isValidSlide and isPastBounds tests
            this.slide( this.index + ( isValidSlide && !isPastBounds ? (this.deltaX < 0 ? 1 : -1) : 0 ), this.speed );
        }
    }
};