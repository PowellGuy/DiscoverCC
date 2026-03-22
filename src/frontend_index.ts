//variables for storing the creator form inputs.



function homePage(): void
{
    location.href = ("http://127.0.0.1:5500/home_page.html");
}

function creatorPage(): void
{
    location.href = ("http://127.0.0.1:5500/submit_page.html");
}

function preview_Btn(): void
{
    //tuple for all details
    // let creator: [number, string, string, string]  = [0, creator_name.value, creator_url.value, creator_category.value];
    const preview_name = document.querySelector("#preview_Name")!;
    const preview_category = document.querySelector("#preview_Category")!;
    const creator_name = document.querySelector("#creator_Name") as HTMLInputElement;
    const creator_url = document.querySelector("#creator_URL") as HTMLInputElement;
    const creator_category = document.querySelector("#creator_Type") as HTMLSelectElement;
  
    let creator:
    {
        name: string,
        url: string,
        category: string
    };

    creator = {name: creator_name.value, url: creator_url.value, category: creator_category.value};

    const varJSON = JSON.stringify(creator);
    // preview_name.innerHTML = creator.name;
    // preview_category.innerHTML = creator.category;
}


    //object for creator


