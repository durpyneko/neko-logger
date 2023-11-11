"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
// Define color codes
var blue = '\x1b[34m'; // Light blue 
var magenta = '\x1b[35m'; // Magenta 
var green = '\x1b[32m'; // Green for 'info'
var red = '\x1b[31m'; // Red for 'error'
var white = '\x1b[37m'; // White
var grey = '\x1b[30m'; // Grey for 'debug'
var yellow = '\x1b[33m'; // Yellow for 'warn'
var reset = '\x1b[0m'; // Reset color
function log(options) {
    var name = options.name, type = options.type, message = options.message;
    var currentTime = new Date().toLocaleTimeString();
    // Create the formatted log message
    var formattedTime = "".concat(blue, "[").concat(currentTime, "]").concat(reset);
    var formattedFunctionName = "".concat(magenta, "[").concat(name, "]").concat(reset);
    var formattedtype = type === 'info' ? "".concat(green, "[").concat(type, "]").concat(reset) : "".concat(red, "[").concat(type, "]").concat(reset);
    var formattedMessage = "".concat(white).concat(message).concat(reset);
    var logString = "".concat(formattedTime, " ").concat(formattedFunctionName, " ").concat(formattedtype, " ").concat(formattedMessage);
    console.log(logString);
}
exports.log = log;
