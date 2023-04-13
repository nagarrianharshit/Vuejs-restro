<template>
 
<router-view />

</template>

<script>


export default {
  name: 'App',
  components: {

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
}
.logo{
    width: 300px;
}
.form{
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    gap: 1rem;
    
}
.items{
    height: 4vh;
}
</style>
