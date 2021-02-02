<template>
  
  <LazyGallery 
  :enlaces="items" 
  :itemsperpage="options"></LazyGallery>
  
</template>

<script>
import LazyGallery from './components/lazygallery.vue'

export default {
  name: 'App',
  components: {
    LazyGallery,
  },
  data() {
    return {
      items: [
        {nombre: "producto 1", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 2", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 3", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 4", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 5", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 6", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 7", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 8", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 9", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 10", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 11", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 12", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 13", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 14", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 15", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 16", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 17", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 18", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 19", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 20", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 21", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 22", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 23", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 24", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 25", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 26", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 27", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 28", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 29", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 30", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 31", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 32", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 33", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 34", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 35", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 36", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 37", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 38", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 39", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 40", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 41", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 42", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 43", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 44", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 45", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 46", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 47", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 48", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 49", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 50", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 51", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 52", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 53", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 54", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 55", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 56", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 57", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 58", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 59", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 60", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 61", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 62", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 63", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 64", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 65", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 66", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 67", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 68", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 69", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"},
        {nombre: "producto 70", source: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/33/1534411443-adventuretime.jpg?crop=0.621xw:1.00xh;0.183xw,0&resize=480:*"}
        ],
      options: 10,
    };
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
