import { WeatherData } from "./models/WeatherData";
import { CurrentConditionsDisplay } from "./models/CurrentConditionsDisplay";

const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 30.4);
