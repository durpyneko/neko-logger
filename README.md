<div align="center">
  <img alt="logo" src="https://github.com/durpyneko/neko-logger/assets/89787577/c20b6932-936c-4f40-a335-9e79bc0687e9">
  <h3>a custom javascript console logger</h3>
</div>


## Preview
![image](https://github.com/durpyneko/neko-logger/assets/89787577/62830e9f-b810-43ac-8f36-931c18f6eea8)

### You can also chain them 🤔
![image](https://github.com/durpyneko/neko-logger/assets/89787577/6bf512b2-588a-4a48-88c0-d48fdafef83e)

# Install
```
$ npm i nekologger
```
https://www.npmjs.com/package/nekologger

## Usage / Quickstart
CommonJS
```js
const Logger = require("nekologger")
const neko = new Logger({
    showFunc: true,
    showLogTypes: true,
    showTime: true,
});
```
> [!NOTE]
> All message configs should be chained before logging. For example:
> function name / message color / message to log
```
neko.name("Hello World!").color("magenta").info("Hello world message")
```

[how-to.js](https://github.com/durpyneko/neko-logger/blob/main/how-to.js)

## TODO
- [ ] toggle function name truncation
- [ ] only show function names if specified toggle

## INFO
Background image: [Pixiv](https://www.pixiv.net/en/artworks/96441490) / [Catbox](https://files.catbox.moe/shsurd.png)

VSC Extension: [Background](https://github.com/KatsuteDev/Background/)

VSC Theme: [Omni Owl](https://github.com/guilhermerodz/omni-owl)
