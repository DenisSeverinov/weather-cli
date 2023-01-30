import chalk from 'chalk'
import dedent from 'dedent-js'

const printError = (error) => {
  console.log(chalk.bgRed.white(" ERROR ") + ' ' + error);
}

const printSuccess = (msg) => {
  console.log(chalk.bgGreen.white(" SUCCESS ") + ' ' + msg);
}

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan.white(' HELP ')}
    Без параметров - вывод погоды
    -s [CITY] для сохранения города
    -h для вывода помощи
    -t [API_KEY] для сохранения токена
    -n [CITY] для поиска города без сохранения
    `
  );
}

const printWeather = (res, icon) => {
  const description = res.weather[0].description[0].toUpperCase() + res.weather[0].description.slice(1);
  console.log(
    dedent`${chalk.bgBlue.white(' WEATHER ')} Погода в городе ${res.name}
    ${icon}  ${description} ${icon}
    Температура: ${Math.round(res.main.temp)}°C (ощущается как ${Math.round(res.main.feels_like)}°C)
    Влажность: ${res.main.humidity}%
    Скорость ветра: ${Math.round(res.wind.speed)} м/с
    `
  );
}

export { printError, printSuccess, printHelp, printWeather }
