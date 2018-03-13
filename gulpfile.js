var gulp         = require('gulp');
//var sass         = require("gulp-ruby-sass"); //可用gulp-scss代替，需要修改sass任务
var sass       = require("gulp-sass");
var watch        = require("gulp-watch"); //文件监听
var connect      = require("gulp-connect");  //搭建本地服务器
var autoprefixer = require('gulp-autoprefixer'); //自动补全前缀
var jshint       = require("gulp-jshint");
var babel        = require("gulp-babel");
var plumber      = require('gulp-plumber');
var proxy        = require('http-proxy-middleware');

var globalUrl  = './zufang';
var rootServer = './zufang'; //服务器根目录
var jsSrc      = globalUrl + '/js/**/*.js'; //js开发目录
var scssSrc    = globalUrl + '/scss/**/*.scss'; //sass目录
var cssSrc     = globalUrl + '/css'; //编译sass后css目录
var cssSrcw    = globalUrl + '/css/**/*.css'; //编译sass后css目录
var htmlSrc    = ['./zufang/**/*.html']; //html 目录
var es6Src     = globalUrl + '/es6/**/*.js';  //可以无视
var jsSrcDir   = globalUrl + '/js';

// 服务器创建
gulp.task('connect',function () {
	connect.server({
		livereload:true,
		port: 7777,
		root:rootServer,
    middleware:function (connect,opt) {
      return [
        proxy('/user', {
          target: 'http://localhost:3000', 
          changeOrigin:true    // for vhosted sites, changes host header to match to target's host
        })
      ];
    }
	})
})

// html监听
gulp.task('htmlChange', function () {
  	gulp.src(htmlSrc)
    .pipe(connect.reload());
});

// css监听
gulp.task('cssChange', function () {
    gulp.src(cssSrcw)
    .pipe(connect.reload());
});

//js监听 
gulp.task('jsChange', function () {
	gulp.src(jsSrc)
      .pipe(connect.reload());
});


// js错误提示
gulp.task('jsHint', function(){
  gulp.src(jsSrc)  // 检查文件：js目录下所有的js文件
      .pipe(jshint())       // 进行检查
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('default'))  // 对代码进行报错提示
});


// 编译sass
gulp.task('sass',function (p) {
  return gulp.src(scssSrc)
    .pipe(sass())      //gulp-sass
  //return sass(scssSrc)    //gulp-ruby-sass
    .on('error', sass.logError)
    .pipe(autoprefixer({  //自动补全前缀
        browsers: ['last 2 versions', 'Android >= 4.0'],
        cascade: true, //是否美化属性值 默认：true 像这样：
        remove:true //是否去掉不必要的前缀 默认：true
    }))
    .pipe(gulp.dest(cssSrc))
    .pipe(connect.reload());
})


gulp.task('es6', function() {
  gulp.src(es6Src)
      .pipe(plumber()) //防止gulp进程蹦掉
      .pipe(babel({
          presets: ['es2015']
        }))
      .pipe(gulp.dest(jsSrcDir))
      .pipe(connect.reload());
});

// gulp.task('react', function () {
//     return gulp.src(jsxSrc)
//         .pipe(plumber()) //防止gulp进程蹦掉
//         .pipe(babel({
//           presets: ['es2015']
//         }))
//         .pipe(react())
//         .pipe(gulp.dest(jsSrcDir));
// });

// 监听文件变化
gulp.task('watch', function () {
  gulp.watch([htmlSrc], ['htmlChange']);
  gulp.watch([scssSrc], ['sass']);
  gulp.watch([jsSrc], ['jsChange']);
  gulp.watch([cssSrcw], ['cssChange']);
  gulp.watch([es6Src], ['es6']);
});  


gulp.task('default', [ 'connect','watch']);