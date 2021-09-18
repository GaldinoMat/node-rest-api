import App from "./App";

// Sets port and runs app's server through it
const port = 3000;
App.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
