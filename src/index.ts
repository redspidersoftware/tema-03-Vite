import { createApp } from "vue";
import { defineRule } from "vee-validate"
import App from "./App.vue"
import "./style.css"
import MiPlugin from "./plugins/miPlugin"
import { createRouter,createWebHistory } from "vue-router"; 
import routes from "./routes"



const app= createApp(App)

const router = createRouter({
  routes,
  history: createWebHistory()
})
app.use(router)

app.mount("div#app")

app.provide("nombre_aplicacion","mi app cutre")

app.use(MiPlugin)

defineRule("empiezaPorA", (value: string) => {
    if (value.charAt(0) === "a") return true
    return "El campo username debe empezar por a"
  })
