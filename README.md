# Weather App

This is a simple React Weather App that I built using the [WeatherAPI](https://www.weatherapi.com/). The app can show the current weather either by searching for a city or by detecting the user's current location with the browser's geolocation API.

## Features

- **Current Location Weather**: Automatically detects and displays weather for your current location using browser geolocation
- **City Search**: Search for weather information by entering any city name
- **Real-time Data**: Displays current temperature, weather conditions, and location details
- **Responsive Design**: Clean and user-friendly interface
- **Weather Icons**: Visual indicators for different weather conditions

## Technology Stack

- **React 18** - Frontend framework
- **React Context API** - Global state management for weather data and search input
- **WeatherAPI.com** - Weather data provider
- **Browser Geolocation API** - Location detection
- **Create React App** - Project setup and build tools

## Architecture

Used React Context API to manage the global state for weather data and search input, so different components can easily share and update the same data.

### Main Components

- **Input** – to type a city name for weather search
- **Button** – a reusable button component that can trigger either search or refresh actions  
- **Card** – displays the weather details like temperature, condition, and location

## How It Works

When the app loads, it automatically fetches the weather for my current location using the browser's geolocation API. I can also type in a city name and click "Search" to get that city's weather information. The "Refresh" button re-checks my location and updates the weather info with the latest data.

## Prerequisites

Before running this application, make sure you have the following installed on your system:

- **Node.js** (version 14 or higher) - [Download from nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager

## Installation & Setup

### 1. Clone the repository


### 2. Install Dependencies

Install the required dependencies:
```
npm install
```

### 3. Get a FREE Weather API Key from WeatherAPI.com

### 4. Configure Your API Key

Open the `src/api/index.js` file and replace the API key in the BaseURL:
```
const BaseURL = 'https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY_HERE&q='
```

**Replace `YOUR_API_KEY_HERE` with your actual API key.**
