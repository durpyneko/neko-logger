const c = {
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    white: '\x1b[37m',
    grey: '\x1b[30m',
    yellow: '\x1b[33m',
    reset: '\x1b[0m',
};

class Logger {
    /**
     * @param {Object} options - Options for configuring the logger.
     * @param {boolean} [options.showFunc=true] - Whether to show function names in logs.
     * @param {boolean} [options.showLogTypes=true] - Whether to show log types like [INFO], [WARN], etc.
     * @param {boolean} [options.showTime=true] - Whether to show timestamps.
     */
    constructor(options = {}) {
        /**
         * Whether to show function names in logs.
         * @type {boolean}
         */
        this.showFunc = options.showFunc !== undefined ? options.showFunc : true;

        /**
         * Whether to show log types like [INFO], [WARN], etc.
         * @type {boolean}
         */
        this.showLogTypes = options.showLogTypes !== undefined ? options.showLogTypes : true;

        /**
         * Whether to show timestamps.
         * @type {boolean}
         */
        this.showTime = options.showTime !== undefined ? options.showTime : true;

        /**
         * Current log name.
         * @type {string|null}
         */
        this.logName = null;

        /**
         * Current log message.
         * @type {string|null}
         */
        this.logMessage = null;
        /**
         * Log message color
         * @type {string|null}
         */
        this.msgColor = null;
    }

    /**
     * Set the name for the log.
     * @param {string} logName - The name to set.
     * @returns {Logger} - The Logger instance for chaining.
     */
    name(logName) {
        this.logName = logName;
        return this;
    }

    /**
     * MISC type.
     * @param {string} logMessage - The message to log.
     * @returns {Logger} - The Logger instance for chaining.
     */
    log(logMessage) {
        this.print('MISC', c.grey, this.msgColor, logMessage);
        return this;
    }

    /**
     * ERROR type.
     * @param {string} logMessage - The error message to log.
     * @returns {Logger} - The Logger instance for chaining.
     */
    error(logMessage) {
        this.print('ERRR', c.red, this.msgColor, logMessage);
        return this;
    }

    /**
     *WARN type.
     * @param {string} logMessage - The warning message to log.
     * @returns {Logger} - The Logger instance for chaining.
     */
    warn(logMessage) {
        this.print('WARN', c.yellow, this.msgColor, logMessage);
        return this;
    }

    /**
     * INFO type.
     * @param {string} logMessage - The info message to log.
     * @returns {Logger} - The Logger instance for chaining.
     */
    info(logMessage) {
        this.print('INFO', c.green, this.msgColor, logMessage);
        return this;
    }
    /**
     * Message color
     * @param {string} msgColor - The color to log the message in.
     * @returns {Logger} - The Logger instance for chaining.
     */
    color(msgColor) {
        if (c[msgColor]) {
            this.msgColor = c[msgColor];
        } else {
            console.warn(`Invalid color: ${msgColor}. Available colors: ${this.availableColors()}`);
        }
        return this;
    }

    availableColors() {
        return Object.keys(c).join(', ');
    }

    /**
     * Print the log message to the console.
     * @param {string} logType - The log type (e.g., MISC, ERROR, WARN, INFO).
     * @param {string} typeColor - The color for log type.
     * @param {string} msgColor - The color for log message.
     * @param {string} logMessage - The message to log.
     */
    print(logType, typeColor, msgColor, logMessage) {
        const timestamp = this.showTime ? `[${time()}] ` : '';
        const name = this.showFunc && this.logName !== 'NONE'
            ? `${c.magenta}[${(this.logName || 'UNDEF').substring(0, 5).padEnd(5, (this.logName || 'UNDEF').charAt((this.logName || 'UNDEF').length - 1))}]${c.reset} `
            : '';
        const type = this.showLogTypes ? `${typeColor || c.reset}[${logType}]${c.reset} ` : '';
        const message = logMessage ?
            `${c.reset}${timestamp}${name}${type}${msgColor || c.reset}${logMessage}${c.reset}` :
            `${c.reset}${timestamp}${name}${type}${msgColor || c.reset}${logName}${c.reset}`;
        console.log(message);

        // reset state after logging
        this.logName = null;
        this.logMessage = null;
        this.msgColor = null;
    }
}

/**
 * Get the current time in a formatted string.
 * @returns {string} - The formatted time string.
 */
function time() {
    return `${c.white}${new Date().toLocaleTimeString()}${c.reset}`;
}

module.exports = Logger;   
