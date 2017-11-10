var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest("dist"));
});


gulp.watch('src/*.ts',["default"]);

/*var watcher = gulp.watch('src/*.ts',["default"]);

watcher.on('change',function(ev){
	console.log(ev);
})*/