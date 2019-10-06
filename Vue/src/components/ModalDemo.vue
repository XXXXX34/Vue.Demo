<template>
     <div>
      Close using this button: 
     <button v-on:click="close">Close</button>
      </div>
</template>
<script>
    export default {
        methods: {
            close() {
                let context = this;
                this.$dialog
                    .confirm('Please confirm to close', {
                        okText: '确定',
                        cancelText: '关闭'
                    })
                    .then(function(dialog) {
                        console.log(dialog);
                        console.log('Clicked on proceed');
                        context.$emit('close')
                    })
                    .catch(function() {
                        console.log('Clicked on cancel');
                    });

            }
        }
    }
</script>

<style scoped>

</style>