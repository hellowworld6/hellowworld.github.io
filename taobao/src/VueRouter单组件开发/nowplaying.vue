<template>
    <div class="sidebar" >
        <div>
            <ul v-for="data in list" :key="data.id" @click.native=onclick(data.id)>
                <li class="litle"> 商品：{{ data.litle }}</li>
                <li class="picture" > <img :src="data.img"></li>
               <li class="content"> 描述：{{ data.content }}</li>
               <li class="price"> 价格：￥{{ data.price }}</li>
               <li class="number"> 剩余数量：{{ data.number}}</li>
           
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

import { ref,watchEffect  } from 'vue';
    export default {      
        setup(){
           
            var list =ref([])
            watchEffect(async (value)=>{
              var res= await axios.get(`http://localhost:3000/list`)
               
                console.log(res.data)
               list.value = res.data
            })

            return{
               
                list
            }
        
     },
     methods:{
        onclick(id){
            var id=id
           this.$router.push({
            path:'/Details',
            query:{key:id}
        })
        }
     }
    }
</script>
<style scoped>
    .sidebar div {
        display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          height: 72vh;
         
    }
    .sidebar div ul{
        width: 50%;
         height: 36vh;
    }
    .picture{
        height: 16vh;
       
    }
    .picture img{
        width: 100%;
        height: 100%;
    }
    .litle{
        text-align: center;
        height: 5vh;
        line-height: 5vh;
    }
    .content{
        height: 5vh;
        overflow: hidden;
        line-height: 5vh;
       
    }
    .price{
        height: 5vh;
        line-height: 5vh;
    }
    .number{
        height: 5vh;
        line-height: 5vh;
    }
</style>