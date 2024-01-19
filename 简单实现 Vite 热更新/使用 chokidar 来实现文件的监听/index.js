const chokidar = require("chokidar");
// One-liner for current directory
chokidar.watch("./chokidar").on("all", (event, path) => {
  console.log(path);
  // if (event) {
  //   console.log("event", event);
  // }
});

// https://zhuanlan.zhihu.com/p/359839728
