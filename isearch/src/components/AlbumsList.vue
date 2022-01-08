<template>
 <div class="container">
     <div class="detail" v-bind:key="album.id" v-for="album in albums">
         <img class="thumb" v-bind:src="album.artworkUrl100" />
         <p>{{album.collectionName}}</p>
     </div>
    
 </div>
</template>

<script>
export default {
  name: 'Search',
  props: ["albums"]
}
</script>

<style scoped>

.container {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    position: relative;
    left: 19%;
    margin-top: 3em;
    gap: 10px;
}

.detail {
    width: 200px;
    height: 200px;
}

</style>
