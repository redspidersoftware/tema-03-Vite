<template>
    <h1>PokeApi</h1>
    <h3>Introduce el id del pokemon que quieres buscar</h3>
    <input type="number" v-model="id" placeholder="Introduce el id" />
    <button @click="buscaPokemonAxios">Buscar Axios</button>
    <button @click="buscaPokemonFetch">Buscar Fetch</button>    
    <div v-if="pokemon">
      <h3>{{ pokemon.id }}. {{ pokemon.name }}</h3>
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    </div>
    <br/>
    <input type="text" v-model="nameCarta" placeholder="nombre de la carta" />
    <button @click="buscaHearthsone">Buscar Hearthsone</button>
    <div v-if="carta">
      <h3>{{ carta[0].cardId }}. {{ carta[0].name }}</h3>
       <img :src="carta[3].img" :alt="carta[0].name" /> 
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import axios from "axios";
  import { pokeAxios } from "./assets/axiosInstances"
  
  interface Pokemon {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
  }
  
  const id = ref("");
  const nameCarta = ref("");
  const pokemon = ref<Pokemon | null>(null);
  const carta = ref("") 
  
  const buscaPokemonFetch = async () => {
    // Hacer la llamada a la API
  
    // Utilizando FETCH
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id.value}`)
      .catch((error) => console.error(error));
    
    if (!res) return
  
    const data = await res.json().catch((error) => console.error(error));
    console.log(data);
    pokemon.value = data;
  };
  const buscaPokemonAxios = async () => {
    // Hacer la llamada a la API
  
    // Utilizando AXIOS
    // const res = await axios
    //   .get(`https://pokeapi.co/api/v2/pokemon/${id.value}`, { 
    //     transformResponse(res) { // Interceptor de respuesta
    //       console.log(JSON.parse(res))
    //       return {
    //         ...JSON.parse(res),
    //         successful: true
    //       }
    //     },
    //     transformRequest(req) { // Interceptor de solicitud
    //       console.log(req)
    //       return req
    //     }
    //   })
    //   .catch((error) => console.error(error));
  
    const res = await pokeAxios.get(id.value.toString())
  
    if (!res) return
  
    console.log(res.data);
    pokemon.value = res.data;
  };

  const buscaHearthsone = async () =>{
    

const options = {
  method: 'GET',
  url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${nameCarta.value}`,
  headers: {
    'X-RapidAPI-Key': 'QcZUPWEFrsmshDUXqDnj1bZLPseNp1cm5cYjsnQ2zFFC7f9H9T',
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
    carta.value = response.data
	console.log(response.data);
} catch (error) {
	console.error(error);
}
  }
  </script>
  
  <style scoped></style>
  