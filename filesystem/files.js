const fs = require("fs");

//reading files
// fs.readFile("./docs/blog.txt", (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

//rewriting files
// fs.writeFile("./docs/blog.txt", `This is my first blog.\nedited`, () => {
//     console.log(`file was rewritten`);
// });

//creating file
// fs.writeFile("./docs/blog2.txt", `This is my second blog.`, (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(`file was created`);
// });

//creating directories
// if(!fs.existsSync("./docs/new folder")) {
//     fs.mkdir("./docs/new folder", (err) => {
//         if(err) {
//             console.log(err);
//         };
//         console.log(`folder created`);
//     });
// } else{
//     fs.rmdir("./docs/new folder", (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log("folder removed");
//     });
// }

//deleting files
if(fs.existsSync("./docs/delete.txt")) {
    fs.unlink("./docs/delete.txt", (err) => {
        if(err) {
            console.log(err);
        }
        console.log("file deleted");
    });
}

