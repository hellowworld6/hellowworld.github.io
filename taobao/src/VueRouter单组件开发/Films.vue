

<template>
    <div>
        <ul class="header">
            <router-link custom to="/films/nowplaying" v-slot="{isActive,navigate}">
            <li :class="isActive?'choose':''" @click="navigate">商品</li>
            </router-link>
           
           <router-link custom to="/films/comingsoon" v-slot="{isActive,navigate}">
            <li :class="isActive?'choose':''" @click="navigate">福利</li>
            </router-link>
        </ul>
        
        <router-view></router-view>
    </div>
</template>
<style scoped>
.choose{
    color: yellow;
}

   .header{
    font-size: 3vh;
    margin-top: 8vh;
    height: 10vh;
    line-height: 10vh;
    text-align: center;
    display: flex;
    background-color: green;
   }
  .header li{
    flex: 1;
   }
</style>