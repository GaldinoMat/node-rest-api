import App from "./App";

// Sets port and runs app's server through it
const port = process.env.APP_PORT;
App.listen(port);
