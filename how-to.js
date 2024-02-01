const Logger = require("./index")
const neko = new Logger({
    showFunc: true,
    showLogTypes: true,
    showTime: true,
    truncateNames: true,
    truncationLen: 10,
    hideNoNames: true,
    funcAndTypeSameLen: false,
});

neko.name('FuncName').log("Hello World!")
neko.info("This is a INFO message.")
neko.name("NONE").info("This is a INFO message without UNDEF name")
neko.color("yellow").warn("This is a WARN message in yellow.")
neko.error("This is a ERROR message.\n")

neko.name("FUNCTION1").info("This is a INFO message with FUNCTION 1 as name.")
neko.name("FUNC1").warn("This is a WARN message with FUNCTION 1 as name.")
neko.name("FUNC1").color("red").error("This is a ERROR message with FUNCTION 1 as name and in red").error("new error")
