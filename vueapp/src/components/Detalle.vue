<template>
    <div>
        <h1>Detalles</h1>
      <br>
      <label>Editame: </label>
      <input v-model="item.name" placeholder="editame soy reactivo xd" class="col-lg-6">
      <br>
      <table class="table table-dark ">
        <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Url</th>
       

        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{{ item?._id }}</td>
          <td>{{ item?.name }}</td>
          <td>{{ item?.url }}
  
          </td>

        </tr>
        </tbody>
      </table>
      <br>
      <br>
      <b-button to="/" class="btn btn-warning"> Home </b-button>
    </div>
</template>

<script>
export default {
    name: 'detalle-info',
    props: {
        id: Number
    },
  data(){
      return{
        idObjeto: Number,
        item: null
      }
  },
  created() {
      this.iditem = this.$route.params.id;
      this.obtenerDetalles();
  },
  methods:{
      obtenerDetalles(){
        this.$http.get("https://api.disneyapi.dev/characters/" + this.iditem)
            .then((response)=>{
              this.item = response.data;
                 console.log(response);
            })
      }
  }

}
</script>