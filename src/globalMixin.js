import Vue from 'vue'

const miMixinGlobal = {
    methods:{
        calcularColor(){
            let gr = this.grados;
            let color = 'black'
    
            if(gr <=0){
              color = 'blue'
            }
    
            else if(gr>0 && gr<=15){
              color = 'magenta'
            }
            else if(gr>15){
              color = 'red'
            }
    
            return color;
          }
    },

    computed: {

        calcularFaren(){
            // ºC x 1.8 + 32
            return (this.grados* 1.8 )+ 32;
          },
    
          calcularKal(){
            // ºC + 273.15.
            return (this.grados+273.15)
          }

    }
}

Vue.mixin(miMixinGlobal)