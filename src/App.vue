<template>
  <div ><NavBar />
    <div class="jumbotron">
      <p>
    Crear una aplicación frontend en Vue CLI 2 que permita convertir un valor de temperatura
    ingresado en grados Centrígrados a grados Farenheit y a grados Kelvin.
    Vamos a contar con un elemento de entrada para ingresar la temperatura en grados Centrígrados,
    y dos elementos de párrafo para representar las respectivas temperaturas convertidas.
    La conversión será reactiva, eso significa que al cambiar la temperatura ingresada el cálculo será
    inmediato (no será necesario disponer de ningún botón que dispare la operación)
    Permitir el ingreso de temperaturas negativas. El color del texto de las temperaturas convertidas
    será azul si la entrada es menor o igual a 0 grados, magenta para el rango mayor a cero y menor
    a 15 grados y rojo para el resto.
    </p><br>
    <p>Agustin Ortega</p>
  
    </div>
    <Conversor/>
    <router-view></router-view>
  </div>
</template>

<script>

import NavBar from './componentes/NavBar.vue'
import Conversor from './componentes/Conversor.vue'


export default {
  name: 'App',
  components: {
    NavBar,
    Conversor
  }
}
</script>

<style>

</style>
