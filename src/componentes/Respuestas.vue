<template>


<div class="jumbtron">
    <h1>Respuestas</h1>
    <div class="jumbotron">
      <div class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Pregunta</th>
            <th>Respuestas</th>
          </tr>
          <tr v-for="(respuesta, index) in respuestas " v-bind:key="index">
          
    
            <td>{{respuesta.numero}}</td>
            <td>{{respuesta.respuesta}}</td>
          
          </tr>


        </table>
      </div>      
    </div>
  </div>

</template>

<script>

  export default  {
    name: 'src-componentes-respuestas',
    props: [],
    mounted () {

    },
    data () {
      return {
        respuestas: [
          {numero:1, respuesta:'C'},
          {numero:2, respuesta:'B'},
          {numero:3, respuesta:'C'},
          {numero:4, respuesta:'A'},
          {numero:5, respuesta:'B'},
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-respuestas {

  }
</style>
