import app from "./app.js";

const apk = app();

try{
    apk.start();
}catch (error){
    console.log('[index] Uncaught error!')
    console.log(error)
}
