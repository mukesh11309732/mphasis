<template>
<h1>iTunes Search</h1>
 <input id="filterInput" placeholder="Search Albums" v-on:input="changeHandler" />
</template>

<script>
export default {
  name: 'Search',
  methods: {
    changeHandler: function() {
      const filterInput = document.getElementById('filterInput').value
      this.$emit("filterChanged", filterInput);
    }
  }
}
</script>

<style scoped>

input {
  padding: 1em;
  width: 60%;
}

</style>
