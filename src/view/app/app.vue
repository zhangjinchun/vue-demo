<template>
  <div id="text">
    {{ text }}
  </div>
</template>
 
<script>
export default {
  data () {
    return {
      text: 'lrxu'
    }
  }
}
</script>
 if (isDev) {
  config.devServer = {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
      erros: true,
    }
  }
}
<style>
#text {
  color: red;
}
</style>
