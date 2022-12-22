<template>

  <section align="center">
    
    <div class="jumbotron">
      <h1>Conversor de Temperatura</h1>

        <label for="inputGrados">Ingrese Temperatura °C</label>
        <input  class="caja" type="number" name="inputGrados" id="inputGrados" v-model="grados" />
        <br />
        <br />

        <div v-if="this.grados!=null">
        <span >Conv Temperatura °F: </span><span :style="{color : this.calcularColor()}">{{ this.calcularFaren }}</span><br><br>
        <span>Conv Temperatura °K: </span><span :style="{color : this.calcularColor()}">{{ this.calcularKal }}</span>
        </div>
        <div v-else>
          <p>Conv Temperatura °F:</p>
        <p>Conv Temperatura °K: </p>
        </div>
        
        
    </div>
    

    <div>
      <h2>Respuestas</h2>
        <p>
            1: C <br />
            2: B <br />
            3: C <br />
            4: A <br />
            5: B <br />
        </p>
    </div>


  </section>

</template>

<script>

  export default  {
  name: 'src-componentes-conversor',
  props: [],
  mounted() {

  },
  data() {
    return {
      grados: null,
    }
  },
  methods: {



  },
  computed: {

  }
}


</script>

<style scoped lang="css">
.caja{
  margin-top: 12px;
  border: auto;
  background-color: #131212;
  color: rgb(255, 255, 255);
  border-collapse: collapse;
  /*  color: #750a06;  */
  margin-left: 1rem;
  border-radius: 7px;
  opacity: 0.7;
  width: 200px;
}
</style>
