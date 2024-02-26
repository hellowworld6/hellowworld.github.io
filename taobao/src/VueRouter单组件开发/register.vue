<template>
    <div class="register">
       <div class="frame">
        <div><span>用户名：</span><input type="text" v-model="myname"></div>
       <div> <span>密码：</span><input type="password" v-model="mypassword"></div>
       <div> <span>确认密码：</span><input type="password" v-model="remypassword"></div>
        
        <div @click="handleregister">注册</div>
    </div>
    </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default{
    data(){
        return{
            myname:"",
            mypassword:"",
            remypassword:""
        }
    },
    methods:{
       handleregister(){ 
        if(this.myname&&this.mypassword&&this.remypassword&&this.mypassword==this.remypassword){
        axios({
                    method:"post",
                    url:"http://localhost:3000/data",
                    data:{"name":this.myname,
                            "password":this.mypassword,
                            "basket":[]
                         }
                }).then(res=>{console.log(res)
                            alert('注册成功')
                        })
            }
            else alert('确认密码错误')  
    }
    }
}
</script>
<style scoped>
    .register{
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