<template>
    <div>
    <router-link :to="{name: 'home'}">to home</router-link>
    <div>
        <button v-on:click="add">Store</button>
    State:{{this.$store.state.count}}<br/>
    MapState:{{count}}<br/>
    mapGetters :{{myDone}}<br/>
    mapMutations:<button v-on:click="increment">Change</button><br/>
    mapActions:<button v-on:click="myIncrement">Change</button><br/>
    myStoreMutations:<button v-on:click="changeName">ChangeName</button>
    </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapGetters,
        mapMutations,
        mapActions
    } from 'vuex';

    export default {
        /*computed: mapState({
            myCount: state => state.count
        }),*/
        computed: {
            ...mapState(["count"]),
            ...mapGetters({
                myDone: "done"
            })
        },
        /*computed: {
            ...mapState({
                myCount: state => state.count
            })
        },*/
        methods: {
            ...mapMutations(["increment"]),
            ...mapMutations('myStore', ["changeName"]),
            ...mapActions({
                myIncrement: 'increment'
            }),
            add() {
                this.$store.commit('increment');
            }
        }
    };
</script>

<style scoped>

</style>