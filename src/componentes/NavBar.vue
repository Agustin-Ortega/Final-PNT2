<template >

<section class="src-componentes-nav-bar">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

    <router-link to="/">
      
      <a class="navbar-brand" href="#">Inicio  {{ mostrarContadorVuex }}</a>
    </router-link>

    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

        <li class="nav-item">
          <router-link to="/respuestas">
            
            <a class="nav-link" href="#">Respuestas</a>
          </router-link>
        </li>
   
      </ul>
      
    </div>
  </nav>
</section>

</template>

<script >

  export default  {
    name: 'src-componentes-nav-bar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-nav-bar {

  }
</style>
