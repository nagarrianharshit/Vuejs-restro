<template>
 <img class="logo" src="../assets/signup-logo.jpg" alt="">
    <h1>Login</h1>
    <div class="form">
        <input class="items" type="text" v-model="email" placeholder="Enter Email">
        <input class="items" type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="login()" class="items">Login</button>
        <p>New user? <router-link to="./signup">SignUp</router-link></p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LogIn',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
       async login() {
            let result = await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            )
            console.log(result)
            if(result.status==200 && result.data.length>0){
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({name: 'Home'})
            }
            else{
                alert("User not found")
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