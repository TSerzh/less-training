var gulp = require('gulp'), // Подключаем Gulp
    less = require('gulp-less'), //Подключаем Less пакет
    browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task('less', function(){ // Создаем таск "less"
    return gulp.src('app/less/**/*.less') // Берем источник
        .pipe(less()) // Преобразуем Sass в CSS посредством gulp-less
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: './' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});


gulp.task('watch', ['browser-sync', 'less'], function() {
    gulp.watch('app/less/**/*.less', ['less']); // Наблюдение за less файлами
    // Наблюдение за другими типами файлов
});
