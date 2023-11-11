interface LogOptions {
  name: string;
  type: 'info' | 'error';
  message: string;
}

// Define color codes
const blue = '\x1b[34m'; // Light blue 
const magenta = '\x1b[35m'; // Magenta 
const green = '\x1b[32m'; // Green for 'info'
const red = '\x1b[31m'; // Red for 'error'
const white = '\x1b[37m'; // White
const grey = '\x1b[30m'; // Grey for 'debug'
const yellow = '\x1b[33m'; // Yellow for 'warn'
const reset = '\x1b[0m'; // Reset color

export function log(options: LogOptions): void {
  const { name, type, message } = options;
  const currentTime = new Date().toLocaleTimeString();

  // Create the formatted log message
  const formattedTime = `${blue}[${currentTime}]${reset}`;
  const formattedFunctionName = `${magenta}[${name}]${reset}`;
  const formattedtype =
    type === 'info' ? `${green}[${type}]${reset}` : `${red}[${type}]${reset}`;
  const formattedMessage = `${white}${message}${reset}`;

  const logString = `${formattedTime} ${formattedFunctionName} ${formattedtype} ${formattedMessage}`;

  console.log(logString);
}
