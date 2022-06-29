import App from "./app.js";
const app = App()

try {
    app.start();
} catch (error) {
    console.log('[index] Uncaught error!')
    console.log(error)
} 