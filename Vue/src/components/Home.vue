<template>
  <div>
        <SignedInUser />
    <router-link :to="{name:'welcome'}">to welcome</router-link><br/>
    <router-link :to="{name:'table'}">to vuetable-2</router-link><br/>
    <button v-on:click="showModal">showModal</button>
  
    <br/>
    <div>
      Name:<input type="text" v-model="product.name">
      <div>
        <span>{{product.name | capitalize}}</span>
      </div>
    </div>
    <div>
      Leves:<label>高</label> <input type="checkbox"  value="H" v-model="product.leves"/>
      <label>中</label> <input type="checkbox"  value="M" v-model="product.leves"/>
      <label>低</label> <input type="checkbox"  value="L" v-model="product.leves"/>
    </div>
    <div>
      <button v-on:click="show">show</button>  <br/> 
      <button v-on:click="request">requestApi</button>
    </div>
    <h1>Lazy</h1>
    <div>
      <div><input type="text" v-model="product.price" lazy debounce="5000"></div>
      <div>showPrice:{{product.price}}</div>
      <div>ComputedResult:{{total}}</div>
    </div>

    <ul v-for="(item, index) in product.leves " :key="index">
      <li >{{index}}{{item}}</li>
    </ul>
  </div>

</template>

<script>
    import SignedInUser from './SignedInUser.vue'
    import axios from '../config/axios.js'
    import ModalDemo from './ModalDemo.vue'

    export default {
        name: 'Home',
        components: {
            SignedInUser
        },
        data() {
            return {
                product: {
                    name: "xiaomi",
                    leves: ["M", "L"],
                    price: 100
                }
            }
        },
        methods: {
            show: function() {
                alert(JSON.stringify(this.product));
            },
            showModal() {
                this.$modal.show(ModalDemo, {
                    text: 'This text is passed as a property'
                }, {
                    draggable: true,
                    clickToClose: false
                })
            },
            request: function() {
                axios.get('/values')
                    .then(function(response) {
                        console.info(response);
                    })
                    .catch(function(error) {
                        console.debug(error);
                    });


                axios.post('/values', JSON.stringify({
                        name: "hiword"
                    }))
                    .then(function(response) {
                        console.info(response);
                    })
                    .catch(function(error) {
                        console.debug(error);
                    });

                axios.put('/values/123', JSON.stringify({
                        name: "hiword"
                    }))
                    .then(function(response) {
                        console.info(response);
                    })
                    .catch(function(error) {
                        console.debug(error);
                    });

                axios.delete('/values/123')
                    .then(function(response) {
                        console.info(response);
                    })
                    .catch(function(error) {
                        console.debug(error);
                    });
            }
        },
        computed: {
            total: function() {
                return this.product.price * 0.283;
            }
        }
    };
</script>

<style scoped>

</style>