<template>
    <img class="logo" src="../assets/signup-logo.jpg" alt="">
    <h1>Sign Up</h1>
    <div class="form">
        <input class="items" type="text" v-model="name" placeholder="Enter Name">
        <input class="items" type="text" v-model="email" placeholder="Enter Email">
        <input class="items" type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="signUp()" class="items">Sign up</button>
        <p>Already a user? <router-link to="/login">Login</router-link> </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    components: {
        
    },
    data(){
        return{
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
       async signUp(){
            let result = await axios.post("http://localhost:3000/user",{
                name:this.name,
                email: this.email,
                password: this.password
            })
            console.log(result)
            if(result.status==201){
                
                localStorage.setItem("user-info", JSON.stringify(result))
                this.$router.push({name: 'Home'})
            }
        }
    },
    mounted(){
        let user = localStorage.getItem("user-info")
        if(user){
            this.$router.push({name: 'Home'})
        }
    }
}
</script>

<style>

</style>