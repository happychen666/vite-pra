import { fetchArticles, fetchArticleById } from "./api.js";

document.addEventListener("DOMContentLoaded", function () {
  pageInit();
});

/**
 * 页面初始化
 */
function pageInit() {
  const app = document.querySelector("#app");

  fetchArticles().then((artList) => {
    const artUl = document.createElement("ul");

    artList.forEach((art) => {
      artUl.appendChild(createArticleItem(art));
    });

    app.innerHTML = "";
    app.appendChild(artUl);
  });
}

function createArticleItem(art) {
  const liElm = document.createElement("li");
  const aElm = document.createElement("a");

  aElm.href = "./article.html?id=" + art["id"];
  aElm.textContent = art["title"];
  liElm.appendChild(aElm);

  return liElm;
}
