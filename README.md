Weather Web App 🌦️

A simple web application that provides real-time weather information for any city, using the WeatherAPI. The app takes user input for the city name and fetches current weather data through an API call. This project is built with Node.js, Express, and EJS as the templating engine.

 Features

- Real-Time Weather Data: Fetches live weather data for any city using the WeatherAPI.
- User-Friendly Interface: Simple, responsive interface built with HTML and CSS.
- Dynamic Backgrounds: Background changes based on weather conditions (planned but not yet implemented).
- Error Handling: Handles errors gracefully if the city is not found or if there is an API issue.

 Technologies Used

- Node.js - Server-side JavaScript environment
- Express - Node.js framework for building web applications
- EJS - Templating engine for rendering HTML pages with data
- Body-Parser - Middleware for parsing HTTP request bodies
- Axios - HTTP client for making requests to the WeatherAPI
- WeatherAPI - External API to get current weather data
- RapidAPI - API marketplace to access WeatherAPI with a unique key

 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-web-app.git
   cd weather-web-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the API key:
   - Sign up on [RapidAPI](https://rapidapi.com) and subscribe to the WeatherAPI.
   - Get your X-RapidAPI-Key and X-RapidAPI-Host values.
   - Replace `'X-RapidAPI-Key'` and `'X-RapidAPI-Host'` in `app.get("/weather")` with your actual key and host values.

4. Run the application:
   ```bash
   node app.js
   ```

5. Access the app:
   Open your browser and navigate to `http://localhost:3000`.

 File Structure

```
weather-web-app/
│
├── public/                   # Static files like CSS and images
├── views/                    # EJS templates
│   ├── index.ejs             # Home page for city input
│   └── home.ejs              # Displays weather data
├── app.js                    # Main server file
├── package.json              # Project metadata and dependencies
└── README.md                 # Project README file
```

 Usage

1. Home Page:
   - Enter the name of the city you want to check the weather for.
   - Click "Submit" to get the weather data.

2. Weather Page:
   - Displays current weather conditions including temperature, humidity, wind speed, and more.

 Error Handling

If there is an error (e.g., invalid city name or API issue), the app redirects back to the home page and displays an error message.

 Contributing

Contributions are welcome! Feel free to submit a pull request to enhance functionality, improve the UI, or fix bugs.

 License

This project is licensed under the MIT License.



 Example Screenshots

 Home Page
Screenshot showing the city input form.

 Weather Page
Screenshot showing the weather data for a specific city.




