// marked 解析 md。
import { marked } from "marked";

// 引入了 qs 用来解析 url 参数，
import * as qs from "qs";

import { fetchArticleById } from "./api.js";

document.addEventListener("DOMContentLoaded", function () {
  pageInit();
});

function pageInit() {
  const queryParams = qs.parse(window.location.search.replace("?", ""));

  if (queryParams["id"]) {
    fetchArticleById(queryParams["id"]).then((art) => {
      buildApp(art);
    });
  }
}

function buildApp(art) {
  const app = document.querySelector("#app");
  const { title, content } = art;
  const head = document.createElement("h1");
  const div = document.createElement("div");

  head.textContent = title;
  div.innerHTML = marked.parse(content);

  app.innerHTML = "";
  app.appendChild(head);
  app.appendChild(div);
}
