import { createApp } from "vue";
import Main from "./Main.vue"
import "./style.css"

const app= createApp(Main)
app.mount("div#app")
app.provide("nombre_aplicacion","mi app cutre")
