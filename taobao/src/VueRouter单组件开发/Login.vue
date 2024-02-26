<template>
    <div class="login">
       <div class="frame">
        <div><span>用户名：</span><input type="text" v-model="myname"></div>
       <div> <span>密码：</span><input type="password" v-model="mypassword"></div>
        <div @click="handlelogin">登录</div>
        <div @click="handleregister">注册</div>
    </div>
    </div>
</template>
<script>
import axios from 'axios'

export default{
    data(){
        return{
            myname:"",
            mypassword:""
        }
    },
    methods:{
        handleregister(){
        this.$router.push("/register")      
    },
       async handlelogin(){ 
            await axios.get(`http://localhost:3000/data`,{
                params:{
                    name:this.name,
                    password:this.mypassword
                }
            }).then(res=>{
                if(res.data.length!==0){
            localStorage.setItem("token",`${this.myname}`)
            this.$router.push("/center")
            console.log(res.data)} 
            else   {
               alert('账号或者密码错误')
                this.$router.push("/login")  }                
           })
       
    }
    }
   
}
</script>
<style scoped>
    .login{
        margin-top: 8vh;
    }
    .frame{
        border: 1px solid black;
       margin-top: 30vh;
       margin-left: 6vh;
       margin-right: 6vh;
       display: flex;
       flex-direction: column;
        text-align: center;
    }
    .frame div{
        flex: 1;
        width: 100%;
        height: 4vh;
    }
</style>