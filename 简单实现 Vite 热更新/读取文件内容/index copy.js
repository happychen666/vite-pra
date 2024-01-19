const chokidar = require("chokidar");
const fs = require("fs");
const path = require("path");
chokidar.watch("./ws-chokidar").on("change", (relativePath) => {
  console.log(__dirname);

  const filePath = path.resolve(__dirname, "", relativePath);
  console.log("relativePath", relativePath);
  console.log("filePath", filePath);
  const data = fs.readFileSync(filePath, "utf-8");
  console.log(data, relativePath);
});
