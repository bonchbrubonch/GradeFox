const {src, dest, watch, parallel, series} = require('gulp');
const sass         = require('gulp-sass')(require('sass'));
const concat       = require ('gulp-concat');
const browserSync  = require('browser-sync').create();
const uglify       = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin     = require('gulp-imagemin');
const del          = require('del');

function browsersync(){
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}

function cleanDist(){
    return del('dist')
}

function images(){
    return src('app/images/**/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 80, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(dest('dist/images'))
}

function scripts(){
    return src([
        // 'node_modules/jquery/dist/jquery.js',
        'app/js/main.js'
])
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

function styles(){
    return src('app/scss/style.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))  /*expanded за замовчуванням  compressed - мініфікує стилі*/
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

function build (){
    return src ([
        'app/css/style.min.css',
        'app/fonts/**/*',
        'app/js/main.min.js',
        'app/*.html'
    ], {base:'app'})
    .pipe(dest('dist'))
}

function watching(){
    watch(['app/scss/**/*.scss'], styles) 
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts) 
    watch(['app/*.html']).on('change', browserSync.reload)
}

exports.browsersync = browsersync;
exports.cleanDist = cleanDist;
exports.images = images;
exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;


exports.build = series(cleanDist, images, build);
exports.default = parallel(styles, scripts, browsersync, watching);