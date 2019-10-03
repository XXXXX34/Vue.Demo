<template>
  <div id="app">
      <div v-if="hasAccess" id="nav"></div>
      <router-link to="/">Home</router-link> |
      <router-link to="/protected">Protected</router-link>
      <router-view/>
  </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'

    export default {
        name: 'App',
        computed: {
            ...mapGetters('oidcStore', [
                'oidcIsAuthenticated'
            ]),
            hasAccess: function() {
                return this.oidcIsAuthenticated || this.$route.meta.isPublic
            }
        },
        methods: {
            userLoaded: function(e) {
                console.log('I am listening to the user loaded event in vuex-oidc', e.detail)
            },
            oidcError: function(e) {
                console.log('I am listening to the oidc error event in vuex-oidc', e.detail)
            }
        },
        mounted() {
            window.addEventListener('vuexoidc:userLoaded', this.userLoaded)
            window.addEventListener('vuexoidc:oidcError', this.oidcError)
        },
        destroyed() {
            window.removeEventListener('vuexoidc:userLoaded', this.userLoaded)
            window.removeEventListener('vuexoidc:oidcError', this.oidcError)
        }
    }
</script>

<style>

</style>