# neko-logger
custom logger for time, function name and log message

## Preview
![image](https://github.com/durpyneko/neko-logger/assets/89787577/1ae3dc33-bc86-49c8-8802-89360fa19ee3)

![image](https://github.com/durpyneko/neko-logger/assets/89787577/57450fa0-4290-4cb8-9157-60b535a204d5)

# Install
```
$ npm install nekologger
```
https://www.npmjs.com/package/nekologger

## Usage
CommonJS
```js
const neko = require("nekologger");
```
ES6
```js
import { log } from "nekologger";
```

## Script
1. Normal
```js
const neko = require("nekologger");

neko.log({
  functionName: "TEST",
  logType: "info",
  message: "Hello World!",
});
```

2. Fancy
```js
const neko = require("nekologger").log;

neko({
  functionName: "TEST",
  logType: "info",
  message: "Hello World!",
});
```
You can also call 'log' something else
```js
import { log } from "nekologger";
const neko = log;

neko({
  functionName: "TEST",
  logType: "info",
  message: "Hello World!",
});
```

