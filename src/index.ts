function submit_Btn()
{
    const creator_name = document.querySelector("#creator_Name") as HTMLInputElement;
    const creator_URL = document.querySelector("#creator_URL") as HTMLInputElement;
    const creator_Category = document.querySelector("#category_Type") as HTMLSelectElement;

    let  creator: [number, string, string, string]  = [0, creator_name.value, creator_URL.value, creator_Category.value];

    alert(creator);
 
}