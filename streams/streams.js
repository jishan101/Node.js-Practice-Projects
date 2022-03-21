const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog.txt", {encoding: "utf8"});
const writeStream = fs.createWriteStream("./docs/blog2.txt");

// readStream.on("data", (chunk) => {
//     console.log("\n-----NEW CHUNK-----\n");
//     console.log(chunk);

//     writeStream.write("\n-----NEW CHUNK-----\n");
//     writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);

