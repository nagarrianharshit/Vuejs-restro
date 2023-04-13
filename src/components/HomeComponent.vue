<template>
    <NavBar />
    <h1>Hello {{ name }}, Welcome to RestoRoom</h1>
    <div class="container">
        <table border="1px">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Branch</td>
            <td>Contact</td>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.Branch }}</td>
        <td>{{ item.contact }}</td>
        </tr>
    </table>
    </div>
   
</template>

<script>
import axios from 'axios'
import NavBar from './Header.vue'
export default{
    name: 'HomeComponent',
    data() {
        return{
            name: '',
            restaurants: []
        }
    },
    async mounted(){
        let user = localStorage.getItem("user-info")
        this.name = JSON.parse(user).name
        let firstName = this.name.split(" ")[0];
        let firstLetter = firstName.slice(0, 1).toUpperCase();
        let restOfWord = firstName.slice(1);
        this.name= firstLetter+restOfWord;
        if(!user){
            this.$router.push({name: 'SignUp'})
        }
        let result = await axios.get("http://localhost:3000/restaurants")
        this.restaurants = result.data

    },
    components:{
        NavBar
    }
}
</script>

<style>
td{
    width: 160px;
    height: 59px;
}
table{
    margin-left: auto;
    margin-right: auto
}
</style>