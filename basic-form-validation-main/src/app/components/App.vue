<template>
   <div>
    <div class="container">
        <form @submit.prevent="addUser" id="form" class="form">
        <h2>Register with us</h2>
        
        <div class="form-control">
            <label for="username">Username</label>
            <input type="text" v-model="users.username" id="username" placeholder="Enter username">
            <small>Error message</small>
        </div>       
        <div class="form-control ">
            <label for="email">Email</label>
            <input type="text" v-model="users.email" id="email" placeholder="Enter username">
            <small>Error message</small>
        </div>
        <div class="form-control">
            <label for="password">Password</label>
            <input type="password" v-model="users.password" id="password" placeholder="Enter password">
            <small>Error message</small>
        </div>
        <div class="form-control">
            <label for="password2">Confirm password</label>
            <input type="password" v-model="users.password2" id="password2" placeholder="Enter password again">
            <small>Error message</small>
        </div>

        <button type="submit">Submit</button>
        </form>
        
    </div>
   </div>
</template>


<script>
    import axios from "axios";

    export default {
        name: "addUser",
        data() {
            return{
                users: {
                    username : '',
                    email : '',
                    password : '',
                    password2 : ''
                }
            }
        },

        methods: {
            addUser(){
                let newUser = {
                    username : this.users.username,
                    email : this.users.email,
                    password : this.users.password,
                    password2 : this.users.password2
                };
                
                console.log(newUser);
                axios.post('/api/users', newUser)
                .then((res)=>{
                    console.log(res);
                }).catch((error)=>{
                    console.log(error);
                });
            },
        },
    };

</script>



