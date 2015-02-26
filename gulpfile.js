var gulp = require("gulp"),
sass = require("gulp-sass");

gulp.task("styles", function() {
    gulp.src("./sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"));
});

gulp.task("default", ["styles"], function(){
    gulp.watch("./style.scss", ["styles"]);

});