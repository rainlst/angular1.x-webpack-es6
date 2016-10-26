var gulp = require('gulp');
var fs = require('fs');
var colors = require("colors");
var path = require('path')
var rename = require("gulp-rename");
var webpack = require('webpack-stream');
var replace = require('gulp-replace');
var del = require('del');
var inject = require('gulp-inject-string');


var cdn = 'http://192.168.10.40:8080/';


gulp.task('clean:dist', function (cb) {
    return del([
        'dist/*'
    ], cb);
});

gulp.task('outputFile', ['clean:dist'], function () {
    return gulp.src('./src/app.js')
        .pipe(webpack(require('./webpack.build.js')(cdn)))
        .pipe(gulp.dest('dist/'));
});


gulp.task('updataInfor', ['outputFile'], function () {
    var now = new Date;
    var version = now.getTime();
    function matchDataSource(dir, cdn) {
        //var path = __dirname + '/src/mockup/'
        return fs.readdirSync(dir).reduce((list, file) => {
            var name = path.join(dir, file);
            var isDir = fs.statSync(name).isDirectory();
            name = name.replace(dir, cdn);
            return list.concat(isDir ? matchDataSource(name) : [name]);
        }, []);
    }

    var fileList = matchDataSource("dist/", cdn);
    var updataContent =
        {
            version: version,
            files: fileList
        }

    fs.writeFile("dist/updata.json", JSON.stringify(updataContent), function (err) {
        if (err) {
            return console.log(err);
        }
        console.info("updata was applied to project!".green);
    });



    //remove CDN and add version
    // gulp.src('./dist/index.html')
    //     .pipe(replace(cdn, ''))
    //     .pipe(inject.after('<head>', '\n<info '
    //         + 'version='+'"'+version+'"'+' '
    //         + 'updata="['+cdn+'app.js,'+cdn+'app.css]"'
    //         + ' />')
    //     )
    //     .pipe(gulp.dest('dist/'));


});

gulp.task('default', ['updataInfor'], function () {



});
