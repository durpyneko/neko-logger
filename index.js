"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.neko_logger = void 0;
// Define color codes
var blue = '\x1b[34m'; // Light blue 
var magenta = '\x1b[35m'; // Magenta 
var green = '\x1b[32m'; // Green for 'info'
var red = '\x1b[31m'; // Red for 'error'
var white = '\x1b[37m'; // White
var grey = '\x1b[30m'; // Grey for 'debug'
var yellow = '\x1b[33m'; // Yellow for 'warn'
var reset = '\x1b[0m'; // Reset color
function neko_logger(options) {
    var functionName = options.functionName, logType = options.logType, message = options.message;
    var currentTime = new Date().toLocaleTimeString();
    // Create the formatted log message
    var formattedTime = "".concat(blue, "[").concat(currentTime, "]").concat(reset);
    var formattedFunctionName = "".concat(magenta, "[").concat(functionName, "]").concat(reset);
    var formattedLogType = logType === 'info' ? "".concat(green, "[").concat(logType, "]").concat(reset) : "".concat(red, "[").concat(logType, "]").concat(reset);
    var formattedMessage = "".concat(white).concat(message).concat(reset);
    var logString = "".concat(formattedTime, " ").concat(formattedFunctionName, " ").concat(formattedLogType, " ").concat(formattedMessage);
    console.log(logString);
}
exports.neko_logger = neko_logger;
