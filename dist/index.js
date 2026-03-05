"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function submit_Btn() {
    const creator_name = document.querySelector("#creator_Name");
    const creator_URL = document.querySelector("#creator_URL");
    const creator_Category = document.querySelector("#category_Type");
    let creator = [0, creator_name.value, creator_URL.value, creator_Category.value];
    alert(creator);
}
//# sourceMappingURL=index.js.map