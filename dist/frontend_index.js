"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function homePage() {
    location.href = ("http://127.0.0.1:5500/home_page.html");
}
function creatorPage() {
    location.href = ("http://127.0.0.1:5500/submit_page.html");
}
function preview_Btn() {
    const preview_name = document.querySelector("#preview_Name");
    const preview_category = document.querySelector("#preview_Category");
    const creator_name = document.querySelector("#creator_Name");
    const creator_url = document.querySelector("#creator_URL");
    const creator_category = document.querySelector("#creator_Type");
    let creator;
    creator = { name: creator_name.value, url: creator_url.value, category: creator_category.value };
    preview_name.innerHTML = creator.name;
    preview_category.innerHTML = creator.category;
}
//# sourceMappingURL=frontend_index.js.map