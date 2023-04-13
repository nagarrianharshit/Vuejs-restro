<template>
    <NavBar />
    <h1>Hello {{ name }}, welcome to Update restaurent Page</h1>
</template>

<script>
import NavBar from './Header.vue'
export default{
    name: 'UpdateRest',
    data() {
        return{
            name: ''
        }
    },
    mounted(){
        let user = localStorage.getItem("user-info")
        this.name = JSON.parse(user).name
        let firstName = this.name.split(" ")[0];
        let firstLetter = firstName.slice(0, 1).toUpperCase();
        let restOfWord = firstName.slice(1);
        this.name= firstLetter+restOfWord;
        if(!user){
            this.$router.push({name: 'SignUp'})
        }
    },
    components:{
        NavBar
    }
}

</script>