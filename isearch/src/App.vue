<template>
  <Search @filterChanged="updateAlbums"/>
  <AlbumsList v-bind:albums="albums.filtered"/>
</template>

<script>
import Search from './components/Search.vue'
import AlbumsList from './components/AlbumsList.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Search,
    AlbumsList
  },
  data () {
    return {
      albums:{
        original: [],
        filtered: []
      }
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:3000/getalbums?search=justin%20beiber&limit=1000')
      .then(response => (this.albums = {
        original: response.data && response.data.results, 
        filtered: response.data && response.data.results
      }))    
  },
  methods: {
    updateAlbums(text) {
        const filtered = this.albums.original.filter(album => album.collectionName.toLowerCase().indexOf(text.toLowerCase()) > -1)
        this.albums.filtered = filtered
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
