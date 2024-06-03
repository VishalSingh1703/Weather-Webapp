import express from "express";
import bodyParser from "body-parser";
import axios from "axios";


const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('views'));


let data;

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/submit", (req, res) => {
    console.log(req.body);
    data = req.body;
    res.redirect("/weather");
})

// app.get("/home", (req, res) => {
//     res.render("home.ejs", {city : data.city});
// })


app.get("/weather", async (req, res) => {
    try {
        const response = await axios.get(`https://weatherapi-com.p.rapidapi.com/current.json`, {
            params: {q: `${data.city}`},
            headers: {
                'X-RapidAPI-Key': '0c8bf142c2msha29038c0f8bc592p1ee8a2jsn86a65d4f983c',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        });
        const result = response.data;
        console.log(result);

        // let weatherClass = "";
        // const mainWeather = result.weather[0].main.toLowerCase();

        // if (mainWeather.includes("rain")) {
        //     weatherClass = "rainy";
        // } else if (mainWeather.includes("cloud") || mainWeather.includes("haze") || mainWeather.includes("clouds")) {
        //     weatherClass = "cloudy";
        // } else if (mainWeather.includes("clear")) {
        //     weatherClass = "clear";
        // }


        res.render("home.ejs", {data : result});
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
        error: error.message,
        });
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  