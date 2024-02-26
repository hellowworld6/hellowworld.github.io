<template>
    <div>
        <ul class="swiper" v-for="data in datalist" :key="data.id"  >
        <li class="picture" > <img :src="data.img"></li>
                <li class="litle"> 商品：{{ data.litle }}</li>
               <li class="content"> 描述：{{ data.content }}</li>
               <li class="price"> 价格：￥{{ data.price }}</li>
               <li class="number"> 剩余数量：{{ data.number}}</li>
        </ul>
        <ul class="select">
            <li class="join"  @click.native=onclick()>加入购物车</li>
            <li class="buy">立即购买</li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
    export default{
        data(){
           var id= this.$route.query.key
           
           console.log(id)
            return{
            datalist:[],
            id
        }
        },
        async mounted(){
           await axios.get(`http://localhost:3000/list?id=${this.id}`).then(res=>{
            this.datalist=res.data; 
            console.log(res.data);                    
           })
           },
           methods:{
            onclick(){
               
             
                axios({
                    method:"post",
                    url:"http://localhost:3000/basket",
                    data:qs.stringify(...this.datalist)
                }).then(res=>{console.log(res)})
            }
           }
    }
</script>
<style scoped>
.swiper {
    margin-top: 8vh;
   
    width: 100%;
    height: 72vh;
}  
.picture{
        height:42vh;
    }
    .picture img{
        width: 100%;
        height: 100%;
    }
    .litle{
        text-align: center;
        height: 10vh;
    }
    .select{
    
    bottom: 0;
    width: 100%;
    height: 10vh;
    line-height: 10vh;
    font-size: 3vh;
    text-align: center;
    background-color:orange;
    display: flex;
   }
   .select li{
    flex: 1;
   }
   .buy{
    border-left: 1px solid white;
    
   }
</style>
