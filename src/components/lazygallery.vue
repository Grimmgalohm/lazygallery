<template>
  <div class="container">
    <div v-lazyload id="img-cont" class="suit" v-for="(item, index) of paginador" v-bind:key="index">
      <img :data-url="item.source" />
      <p>{{item.nombre}}</p>
    </div>

    <div class="btns">
      <a href="#"><button @click="currentPage--" v-if="currentPage != 1">Atrás</button></a>
      <a href="#"><button @click="currentPage++" v-if="currentPage != totalPages">Siguiente</button></a>
    </div>
  </div>
</template>

<script>

import Lazyload from '../directives/lazyloader'

export default {
  name: "LazyGallery",
  props: {
    enlaces: Array,
    itemsperpage: Number,
    imgOptions: Array
  },
  directives:{
    lazyload: Lazyload
  },
  data(){
    return {
      currentPage: 1
    }
  },
  computed:{
      paginador() {
      //Traer los elementos que se van a mostrar, si están en un arreglo.
      var elements = this.enlaces;
      //console.log(elements)
      var page = this.currentPage;
      //console.log(page);
      let start = this.itemsperpage * (page - 1);
      //console.log(start);
      let end = start + this.itemsperpage;
      //console.log(end);
      let paginatedItems = elements.slice(start, end);
      //console.log(paginatedItems);
      return paginatedItems;
    },
    totalPages() {
      var total = Math.ceil(this.enlaces.length / this.itemsperpage);
      //console.log(total);
      return total;
    }
  },
  mounted:()=>{

    const images = document.querySelectorAll('[data-url]');
    
    function preloadImage(img){
      const src = img.getAttribute("data-url");
      if(!src){
        return;
        }
        img.src = src;
    }
    
    const imgOptions = {
      threshold: 1
    };
    
    const imgObserver = new IntersectionObserver((entries, imgObserver)=>{
      entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
      })
    }, imgOptions);
    
    images.forEach(image =>{
      imgObserver.observe(image);
    });
  },
  beforeUpdate:()=>{
    
  }
};
</script>

<style lang="sass">
.container
    width: 95%
    height: auto
    border: 1px red solid
    padding: .5rem
    overflow: hidden
    display: flex
    flex-wrap: wrap
    align-items: center
    justify-content: center
    .suit
        width: 25rem
        height: 25rem
        border: 1px red solid
        overflow: hidden
        margin: .5rem
        position: relative
        img
            width: 100%
            height: 100%
            object-fit: cover
            position: absolute
            z-index: -1
            top: 0
            left: 0
.btns
    width: 100%
    border: 1px red solid
    padding: .5rem
    button
        min-width: 100px
        min-height: 30px
        margin: 10px

</style>