import Main from "../Main.vue"
import MiContador from "../components/MiOtroContador.vue"
import { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/contador",
        component: MiContador
    }
]

export default routes