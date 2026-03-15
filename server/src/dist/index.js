"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function preview_Btn() {
    const creator_name = document.querySelector("#creator_Name");
    const creator_url = document.querySelector("#creator_URL");
    const creator_category = document.querySelector("#creator_Type");
    const preview_name = document.querySelector("#preview_Name");
    const preview_category = document.querySelector("#preview_Category");
    let creator = [0, creator_name.value, creator_url.value, creator_category.value];
    preview_name.innerHTML = creator[1];
    preview_category.innerHTML = creator[3];
}
//# sourceMappingURL=index.js.map