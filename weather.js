#!/usr/bin/env node

import { TOKEN_DECTIONARY } from "./constants.js";
import { printHelp, printSuccess, printError, printWeather } from "./services/log.service.js";
import { getKeyValue, saveKeyValue } from "./services/storage.service.js";
import { getArgs } from "./utils/args.js";
import { getWeather, getIcon } from "./services/api.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError('Не передан токен')
    return;
  }
  try {
    await saveKeyValue(TOKEN_DECTIONARY.token, token)
    printSuccess('Токет сохранен')
  } catch (error) {
    printError(error.message)
  }
}

const saveCity = async (city) => {
  if (!city.length) {
    printError('Не передан город')
    return;
  }
  try {
    await saveKeyValue(TOKEN_DECTIONARY.city, city)
    printSuccess('Город сохранен')
  } catch (error) {
    printError(error.message)
  }
}

const getForcast = async (city) => {
  try {
  const cityValue = city ? city : (process.env.CITY ?? await getKeyValue(TOKEN_DECTIONARY.city))
  const weather = await getWeather(cityValue)
  printWeather(weather, getIcon(weather.weather[0].icon));
  } catch (error) {
    if (error?.response?.status === 404) {
      printError('Неверно указан город')
    } else if (error?.response?.status === 401) {
      printError('Неверно указан токен')
    } else {
      printError(error.message)
    }
  }
}

const initCli = async () => {
  const args = getArgs(process.argv)
  if (args.h) {
    return printHelp()
  }
  if (args.s) {
    return saveCity(args.s)
  }
  if (args.t) {
    return saveToken(args.t)
  }
  if (args.n) {
    return getForcast(args.n)
  }
  return getForcast()
};

initCli()