<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 v-if="author.name == 'Jhon Doe'">El autor es el correcto</h1>
    <h1 v-else>Esta mal el autor</h1>
    <span>{{ author.books.length == 3 ? 'SI' : 'NO'}}</span>
    <br>
    <br>
    <!--<li v-for="(value, key) in listaPeces" :key="key"> {{ value }}</li>-->

    <button class="btn btn-primary" @click="obtenerAPI()"> Cargar Api </button>
    <br>
    <br>
      
 <!-- <table class="table table-dark ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Titulo</th>
      <th scope="col">Url</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>

    <tr v-for="item of listaDisney" :key="item._id">
      <td>{{ item._id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.url }}</td>
      <td> 
        <b-button :to="'/detalle/' + photos.id" class="btn btn-primary"> Ver mas </b-button>
      </td>
    </tr>
  </tbody>
</table>-->

<v-row>
  <b-card-group deck>
   <div  v-for="item of listaDisney" :key="item._id">
    <b-card  class="p-5 border bg-light"   :title="item.name" :img-src="item.imageUrl"
              img-height="200px"
              img-width="250px">

      <b-card-text>
        <small v-for="(item2, key) in item.tvShows" :key="key">{{item2}}</small>
      </b-card-text>
      <template #footer>
        <b-button :to="'/detalle/' + item._id" class="btn-warning"> Ver mas </b-button>
      </template>
    </b-card>
          
   </div> 
  </b-card-group>
</v-row>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    id: Number,
  },
  data(){
    return {
      author: {
        name: 'Jhon Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
      carros: {
        name: null,
        colores: []
      },
      listaDisney: [],
    }
  },

  created(){
    this.obtenerAPI();
  },

  methods:{
    obtenerAPI(){
      let apiURL = 'https://api.disneyapi.dev/characters';
      this.listaDisney= [];

      this.$http.get(apiURL).then(response => {
        if(response.status == 200){
        let data = response.data.data;

        data.forEach((element, index) =>{
          if (index + 1  <= 30){
            this.listaDisney.push(element)
          }
        });
        }
      })
      .catch(e => console.log(e))
      .finally(()=>console.log("Siempre me ejecuto al final"))
    }
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ffffff;
}
.hello{
  background-color: #42b983;
}
</style>
