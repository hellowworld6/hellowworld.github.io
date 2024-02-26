

<template>
    <div>
       
          <router-view></router-view>
          
      
       <Tabbar></Tabbar> 
    </div>
</template>
<script>
import Tabbar from './Tabbar.vue'
    export default{
            components:{
                Tabbar
            }
    }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    ul,li,ol{
        list-style: none;
    }
    
</style>