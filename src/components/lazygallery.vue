<template>
  <div class="container">
    <div v-lazyload class="suit" v-for="(item, index) of enlaces" v-bind:key="index">
      <img :data-url="item.source" />
      <p>{{item.nombre}}</p>
    </div>

    <!-- <div class="btns">
      <a href="#"><button @click="currentPage--" v-if="currentPage != 1">Atrás</button></a>
      <a href="#"><button @click="currentPage++" v-if="currentPage != totalPages">Siguiente</button></a>
    </div> -->
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
      currentPage: 2
    }
  },
  mounted(){
    this.watchImages(),
    this.insertPagination(),
    this.setKey()
  },
  methods:{
    watchImages(){
      const images = document.querySelectorAll('[data-url]');
      //console.log(images);
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
    setKey(){
      var allDivs = document.querySelectorAll(".suit"); 
      for(var i=0; i<=allDivs.length-1; i++){
        var item = allDivs[i];
        item.id = i;
        item.classList.add("not_paginated");
      }
    },
    insertPagination(){
      var allDivs = document.querySelectorAll(".suit");
      
      console.log(allDivs);
      var page = this.currentPage;
      //console.log(page);
      let start = this.itemsperpage * (page - 1);
      console.log(start);
      let end = start + this.itemsperpage;
      console.log(end);

      for(var i = start; i<=end; i++){
        console.log(i);
      }
      // let paginatedItems = allDivs.slice(5, 11);
      //console.log(paginatedItems);
    }
  },
  computed:{
    //   paginador() {
    //   //Traer los elementos que se van a mostrar, si están en un arreglo.
    //   var elements = this.enlaces;
    //   //console.log(elements)
    //   var page = this.currentPage;
    //   //console.log(page);
    //   let start = this.itemsperpage * (page - 1);
    //   //console.log(start);
    //   let end = start + this.itemsperpage;
    //   //console.log(end);
    //   let paginatedItems = elements.slice(start, end);
    //   //console.log(paginatedItems);
    //   return paginatedItems;
    // },
    totalPages() {
      var total = Math.ceil(this.enlaces.length / this.itemsperpage);
      //console.log(total);
      return total;
    }
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
    .not_paginated
      display: none
    .is_paginated
      display: flex
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