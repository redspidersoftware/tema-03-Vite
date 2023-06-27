import { RouteRecordRaw } from "vue-router"
import Main from "../Main.vue"
//import MiContador from "../components/MiOtroContador.vue"
import MisUsuarios from "../components/MisUsuarios.vue"
import DetallesUsuario from "../components/DetallesUsuario.vue"
import ArticuloLargo from "../components/ArticuloLargo.vue"
import ComponenteProhibido from "../components/ComponenteProhibido.vue"

const estaLogueado = () => Math.random() > 0.5

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Main
    },
    // {
    //     path: "/enlaceantiguo",
    //     redirect: "/"
    // },
    {
        //caRGA LAZY, NO SE CARGA HASTA QUE SE USA
        path: "/contador",
        component: () => import("../components/MiOtroContador.vue"),
        name: "RutaContador"
    },
    {
        path: "/usuarios",
        component: MisUsuarios
    },
    {
        path: "/usuarios/:id",
        component: DetallesUsuario
    },
    {
        path: "/articulo",
        component: ArticuloLargo
    },
    {
        path: "/prohibido",
        component: ComponenteProhibido,
        beforeEnter(to, from, next) {
            if (estaLogueado()) {
                console.log("Estás logueado, tienes permiso para ver LO PROHIBIDO", to.path)
                next()
                return
            }
            console.log("NO estás logueado, no tienes permiso para ver LO PROHIBIDO")
            next(from.path)
        },
        

    }
]

export default routes