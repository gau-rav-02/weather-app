# Weather App

A modern React weather application that provides real-time weather information using geolocation and city search functionality.

## Features

- **Current Location Weather**: Automatically fetches weather data based on your current location
- **City Search**: Search for weather information by city name
- **Real-time Data**: Displays current temperature, weather conditions, and location details
- **Weather Icons**: Visual weather condition indicators
- **Responsive Design**: Clean and user-friendly interface

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
