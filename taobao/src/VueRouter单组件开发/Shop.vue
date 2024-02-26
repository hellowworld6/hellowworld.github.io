<template>
    <div>
        
    

    <div id="box">
     
        <ul>
            <li>
            <div>
                <input type="checkbox" v-model="isall" @change="allchange()">
                <span>全选/全不选</span>
            </div>
             </li>
            <li v-for="item,index in datalist" :key="item.id">
              <div>
                <input type="checkbox" v-model="checklist"  :value="item" @change="checkchange()">
              </div>
              <div>
                <img :src="item.img">
              </div>
              <div>
                    <div>{{item.litle}}</div>
                    <div style="color:red;">价格：￥{{item.price}}</div>
              </div>
              <div style="width: 10vh;display: flex">
                <button @click="item.num--" :disabled="item.num==1" style="width: 2vh;">-</button>
                <div style="width: 4vh; ">{{item.num}}</div>
                <button @click="item.num++" :disabled="item.num==item.number" style="width: 2vh;">+</button>
               
              </div>
              <div>
                <button @click="handledel(index,item.id)">删除</button>
              </div>
              
            </li>
            <li>
                <div>总金额:{{ sum() }}</div>
            </li>
        </ul>
        
        <div v-show="datalist.length===0">暂无</div>
       </div>
    </div>
</template>
       <script>
        import axios from 'axios';
       export default{
            data(){
                return {
                    isall:false,
                    checklist: [],
                    datalist: [] 
                }
            },
            async mounted(){
           await axios.get("http://localhost:3000/basket").then(res=>{
            this.datalist=res.data;
            console.log(res.data);                     
            })
           },
            methods:{
               sum(){
               
                var total=0
                for(var i=0;i<this.checklist.length;i++){
                    total+=this.checklist[i].num*this.checklist[i].price
                }
                return total
            } ,
            allchange(){
                this.checklist=this.isall?this.datalist:[]
            },
            checkchange(){
                if(this.checklist.length!=0)
                this.isall=this.checklist.length===this.datalist.length
                else this.isall=false
            },
            handledel(index,id){
                axios.delete(`http://localhost:3000/basket/${id}`)                
                this.datalist.splice(index,1)
                this.checklist=this.checklist.filter(item =>item.id !=id)
                
                this.checkchange()
                
            }
            }
           
        }
       
       
       </script>
       <style scoped>
        ul{
            margin-top: 8vh;
        }
       li{
           display: flex;
           justify-content: space-between;
           align-items: center;
           padding: 10px;
           border: 1px,solid,lightgray;
          
           
       }
       li img{
           width: 15vh;
           height: 100%;
       }
   </style>

 