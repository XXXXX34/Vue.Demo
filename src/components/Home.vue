<template>
  <div><router-link :to="{ name: 'welcome'}">to welcome</router-link>
  
    <br/>
    <div>
      Name:<input type="text" v-model="product.name">
    </div>
    <div>
      Leves:<label>高</label> <input type="checkbox"  value="H" v-model="product.leves"/>
      <label>中</label> <input type="checkbox"  value="M" v-model="product.leves"/>
      <label>低</label> <input type="checkbox"  value="L" v-model="product.leves"/>
    </div>
    <div>
      <button v-on:click="show">show</button>
    </div>
    <h1>Lazy</h1>
    <div>
      <div><input type="text" v-model="product.price" lazy debounce="5000"></div>
      <div>showName:{{product.price}}</div>
      <div>ComputedResult:{{total}}</div>
    </div>

  <div>Search:<input type="text" v-model="searchText" ></div>
    <ul v-for="(item, index) in product.leves" :key="index">
      <li >{{index}}{{item}}</li>
    </ul>
  </div>



</template>

<script>
    export default {
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