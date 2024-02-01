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
     * @param {boolean} [options.truncateNames=true] - Whether to truncate function names
     * @param {number} [options.truncationLen=5] - The length until function name truncation
     * @param {boolean} [options.hideNoNames=false] - Whether to hide not named functions
     * @param {boolean} [options.funcAndTypeSameLen=false] - Whether functions and types should be the same length
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
         * How long until function name truncation
         * @type {number}
         */
        this.truncationLen = options.truncationLen !== undefined ? options.truncationLen : 5;

        /**
         * Whether to truncate function names
         * @type {boolean}
         */
        this.truncateNames = options.truncateNames !== undefined ? options.truncateNames : true;
        /**
         * Whether to hide not named functions
         * @type {boolean}
         */
        this.hideNoNames = options.hideNoNames !== undefined ? options.hideNoNames : false;
        /**
         * Whether functions and types should be the same length
         * @type {boolean}
         */
        this.funcAndTypeSameLen = options.funcAndTypeSameLen !== undefined ? options.funcAndTypeSameLen : false;

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
        this.print(
            this.funcAndTypeSameLen
                ? truncateAndPad('MISC', this.truncationLen)
                : 'MISC',
            c.grey,
            this.msgColor,
            logMessage
        );
        return this;
    }

    /**
     * ERROR type.
     * @param {string} logMessage - The error message to log.
     * @returns {Logger} - The Logger instance for chaining.
     */
    error(logMessage) {
        this.print(
            this.funcAndTypeSameLen
                ? truncateAndPad('ERRR', this.truncationLen)
                : 'ERRR',
            c.red,
            this.msgColor,
            logMessage
        );
        return this;
    }

    /**
     * WARN type.
     * @param {string} logMessage - The warning message to log.
     * @returns {Logger} - The Logger instance for chaining.
     */
    warn(logMessage) {
        this.print(
            this.funcAndTypeSameLen
                ? truncateAndPad('WARN', this.truncationLen)
                : 'WARN',
            c.yellow,
            this.msgColor,
            logMessage
        );
        return this;
    }

    /**
     * INFO type.
     * @param {string} logMessage - The info message to log.
     * @returns {Logger} - The Logger instance for chaining.
     */
    info(logMessage) {
        this.print(
            this.funcAndTypeSameLen
                ? truncateAndPad('INFO', this.truncationLen)
                : 'INFO',
            c.green,
            this.msgColor,
            logMessage
        );
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
        const name = () => {
            if (this.showFunc === true) return ''
            if (!this.logName && (this.hideNoNames || this.logName === 'NONE')) return ''
            if (this.truncateNames) {
                return `${c.magenta}[${truncateAndPad(this.logName, this.truncationLen)}]${c.reset} `
            } else {
                return `${c.magenta}[${truncateAndPad(this.logName, this.truncationLen)}]${c.reset} `
            }
        }
        const type = this.showLogTypes ? `${typeColor || c.reset}[${logType}]${c.reset} ` : '';
        const message = logMessage ?
            `${c.reset}${timestamp}${name()}${type}${msgColor || c.reset}${logMessage}${c.reset}` :
            `${c.reset}${timestamp}${name()}${type}${msgColor || c.reset}${logName}${c.reset}`;
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
function truncateAndPad(str, length) {
    if (str === null) return '';
    return str.substring(0, length).padEnd(length, str.charAt(str.length - 1))
}


module.exports = Logger;   
