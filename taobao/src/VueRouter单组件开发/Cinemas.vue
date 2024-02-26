<template>
    <div>
        <div class="swiper">
            <div class="swiper-wrapper">
                <ul class="swiper-slide" v-for="data in datalist" :key="data.id" v-if="show" @click.native=onclick(data.id) >
                <li class="picture" > <img :src="data.img"></li>
                <li class="litle"> 商品：{{ data.litle }}</li>
               <li class="content"> 描述：{{ data.content }}</li>
               <li class="price"> 价格：￥{{ data.price }}</li>
               <li class="number"> 剩余数量：{{ data.number}}</li>
              
                </ul>
               
            </div>
    
        <!-- 如果需要滚动条 -->
            <div class="swiper-scrollbar"></div>
        </div>

    </div>
</template>

<script>
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle'
import axios from 'axios';

    export default {
       data(){
        return{
            datalist:[],
           show:false
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
     },
    async mounted(){
           await axios.get("http://localhost:3000/list").then(res=>{
            this.datalist=res.data;
            console.log(res.data);                     
            this.show=true})
                var mySwiper = new Swiper ('.swiper', {
                 direction: 'vertical', // 垂直切换选项
               
    
                
                // 如果需要滚动条
                scrollbar: {
                el: '.swiper-scrollbar',
                },
                on: {
                    slideChange: function(){
                        console.log(this.activeIndex);
                    }
                }
                        })
    
           }
          
    }
</script>
<style scoped>
.swiper {
    margin-top: 8vh;
    width: 100%;
    height: 82vh;
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
</style>
