<template>
    <div class="nav">
        <img src="../assets/Restaurant-Logo-PNG-File-Download-Free.png" alt="">
        <a href="/">Home</a>
        <a href="add">Add Restaurent</a>
        <a href="update">Update Restaurent</a>
        <a v-on:click="logout()" href="">Logout</a>
    </div>
</template>
<script>
export default {
    name: 'NavBar',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name: 'Login'})
        }
    }
}
</script>
<style>
.nav{
    width: 100%;
    background-color: brown;
    overflow: hidden;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
body{
    padding: 0%;
    margin: 0%;
}
.nav a{
    float: left;
    padding: 5px;
    text-decoration: none;
    color: aliceblue;
    
}
.nav a:hover{
    background-color: aliceblue;
    color: black;
    font-size: large;
}
.nav img{
    margin-left: -180px;
    width: 40px;

}
</style>