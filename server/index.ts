import 'dotenv/config';
import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express()
const port = 3000

app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () =>
{
    console.log(`running on port: ${port}`);
});

app.get("/", (req, res) =>
{
    res.sendFile(path.join(__dirname, '..', '/home_page.html'));
});



function preview_Btn()
{

    //variables for storing the creator form inputs.
    const creator_name = document.querySelector("#creator_Name") as HTMLInputElement;
    const creator_url = document.querySelector("#creator_URL") as HTMLInputElement;
    const creator_category = document.querySelector("#creator_Type") as HTMLSelectElement;
    const preview_name = document.querySelector("#preview_Name")!;
    const preview_category = document.querySelector("#preview_Category")!;

    //tuple for all details
    let creator: [number, string, string, string]  = [0, creator_name.value, creator_url.value, creator_category.value];

    preview_name.innerHTML = creator[1];
    preview_category.innerHTML = creator[3];
}

