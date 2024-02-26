<template>
    
    <div >
        <ul class="toper">
            <li class="backing" @click=this.$router.back()>&lt;</li>
            <ul class="mysearch"><input type="text" v-model="mytext"  @input="handleinput" id="mysearch">
                <li class="select" v-show="isshow">
                    <li v-for="item in datalist" :key="item.id"  @click.native=onclick(item.id,item.litle) class="list">{{ item.litle }}</li>
                </li>
            </ul>

            <li class="finding"  @click=clicked><img src="./picture/ing1.png"></li>
        </ul>
            <ul class="tabbar">
                <router-link custom to="/films/nowplaying" v-slot="{isActive,navigate}">
            <li :class="isActive?'choose':''" @click="navigate">首页</li>
            </router-link>
            <router-link custom to="/cinemas" v-slot="{isActive,navigate}">
            <li :class="isActive?'choose':''" @click="navigate">发现</li>
            </router-link>
            <router-link custom to="/shop" v-slot="{isActive,navigate}">
            <li :class="isActive?'choose':''" @click="navigate">购物车</li>
            </router-link>
            <router-link custom to="/center" v-slot="{isActive,navigate}">
            <li :class="isActive?'choose':''" @click="navigate">我的</li>
            </router-link>
            </ul>
      
    </div>
</template>
<script>
import axios from 'axios'

    export default{
       data(){         
            return{
               
                mytext:"",
                datalist:[],
                isshow:false
            }
        },
     methods:{
        onclick(id,litle){
            var id=id
           this.$router.push({
            path:'/Details',
            query:{key:id}
        })
        this.isshow=false
        this.mytext=litle
        this.datalist=[]
        },
     
       async handleinput(){
        if(this.mytext!=""){
           this.isshow=true
           await axios.get(`http://localhost:3000/list?litle_like=${this.mytext}`).then(res=>{
            this.datalist=res.data; 
            console.log(res.data); 
           
                              
           })
         
        }
        else {
            // 隐藏并清空数组
            this.isshow=false
               this.datalist=[]  
        }
       },
       async clicked(){
        if(this.mytext!=""){
            
           await axios.get(`http://localhost:3000/list?litle=${this.mytext}`).then(res=>{   
            console.log(res.data)
            
            var resid=res.data.map((item)=>{return item.id})
            console.log(resid)
         
                  if(res.data.length!==0)  {
                    console.log() 
                    this.onclick(resid,this.mytext)
                  } else   this.$router.push("/NotFound")      
           })
         
        }
       
       }
     }
    }
</script>
<style scoped>
.choose{
    color: yellow;
}

   .tabbar{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10vh;
    line-height: 10vh;
    font-size: 3vh;
    text-align: center;
    background-color: white;
    display: flex;
   }
   
   .tabbar  li{
    flex: 1;
   }
   .toper{
    position: fixed;
    top: 0;
    width: 100%;
    height: 8vh;
    background-color: white;
   display: flex;
   
   }
   .backing{
    height: 8vh;
    width: 8vh;
    line-height: 8vh;
    font-size: 8vh;
    color: gray;
   }
   .finding{
    height: 8vh;
    width: 8vh;
    line-height: 8vh;
   text-align: right;
   }
   .finding img{
    width: 8vh;
    height: 8vh;
   
   }
   .mysearch{
   flex: 1;
    width: 100%;
  
   
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
   }
   #mysearch{
    margin-top: 2.5vh;
   width: 30vh;
   height: 3vh;
   font-size: 3vh;
   
   }
   .select{
    height: 20vh;
    background-color: aliceblue;
   
   }
   .list{
    width: 30vh;
    height: 4vh;
    font-size: 3vh; 
   
   }
</style>