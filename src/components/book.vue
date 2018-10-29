<template>
  <div class="book">
    <img :src="imgSrc" alt="">
    <div>
      {{ text }}
    </div>
  </div>
</template>

<script>
var imgSrc = require('../assets/1.jpg')
export default {
  props:['text'],
  data(){
    return {
      imgSrc
    }
  }
}
</script>

<style scoped>
  .book{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  img{
    width:33.33%;
  }
</style>
