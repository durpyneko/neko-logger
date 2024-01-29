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
     * Log a message with the MISC type.
     * @param {string} logMessage - The message to log.
     * @returns {Logger} - The Logger instance for chaining.
     */
    log(logMessage) {
        this.logMessage = logMessage;
        this.print('MISC', c.grey);
        return this;
    }

    /**
     * Log an error message with the ERRR type.
     * @param {string} logMessage - The error message to log.
     * @returns {Logger} - The Logger instance for chaining.
     */
    error(logMessage) {
        this.logMessage = logMessage;
        this.print('ERRR', c.red);
        return this;
    }

    /**
     * Log a warning message with the WARN type.
     * @param {string} logMessage - The warning message to log.
     * @returns {Logger} - The Logger instance for chaining.
     */
    warn(logMessage) {
        this.logMessage = logMessage;
        this.print('WARN', c.yellow);
        return this;
    }

    /**
     * Log an informational message with the INFO type.
     * @param {string} logMessage - The informational message to log.
     * @returns {Logger} - The Logger instance for chaining.
     */
    info(logMessage) {
        this.logMessage = logMessage;
        this.print('INFO', c.green);
        return this;
    }

    /**
     * Print the log message to the console.
     * @param {string} logType - The log type (e.g., MISC, ERROR, WARN, INFO).
     * @param {string} logColor - The color code for log type.
     */
    print(logType, logColor) {
        const timestamp = this.showTime ? `[${time()}] ` : '';
        const truncatedName = this.showFunc && this.logName !== 'NONE'
            ? `${c.magenta}[${(this.logName || 'UNDEF').substring(0, 5)}]${c.reset} `  // Truncate to 5 characters
            : '';
        const typePart = this.showLogTypes ? `[${logType}]${c.reset} ` : '';
        const message = this.logMessage ?
            `${timestamp}${truncatedName}${logColor}${typePart}${c.reset}${this.logMessage}` :
            `${timestamp}${truncatedName}${logColor}${typePart}${c.reset}${this.logName}`;
        console.log(message);

        // reset state after logging
        this.logName = null;
        this.logMessage = null;
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
