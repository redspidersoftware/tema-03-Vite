import{ref} from "vue"

export default function useContador (){
    const contador = ref(0)

    const incrementar= ()=>{
        contador.value++
    }

    return {contador, incrementar}
}