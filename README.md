# weather-cli

App for check the weather from your terminal

## Installation

```sh
npm i -g weather-cli-severinov
```

or

```sh
npx weather-cli-severinov
```

## Usage

### Display Current Weather

To display the current weather for a city, simply run the program without any parameters:

```sh
weather
```

### Save Preferred City

To save your preferred city for easy retrieval, use the -s option followed by the city name:

```sh
weather -s London
```

This will save your "London" as your preferred city.

### Save API Token

To save your API token for easy retrieval, use the -t option followed by your token:

```sh
weather -t 12345abcdef
```

This will save "12345abcdef" as your API token.

### Display Help

To display a help message with a list of available options, use the -h option:

```sh
weather -h
```

### Search for a City Without Saving

To search for the current weather in a city without saving it as your preferred city, use the -n option followed by the city name:

```sh
weather -n Paris
```

This will display the current weather for "Paris" without saving it as your preferred city.

## API

This weather app uses the OpenWeatherMap API to retrieve current weather data. To use this app, you will need to obtain an API key from [OpenWeatherMap](https://openweathermap.org/api) and save it using the `-t` option.



