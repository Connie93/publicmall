<template>
    <tab-bar>
          <tab-bar-item path="/home" activeColor="blue">
                <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
                <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
                 <div slot="item-text">首页</div>    
          </tab-bar-item>
          <tab-bar-item path="/classify" activeColor="blue"> 
                <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
                <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
                <div slot="item-text"> fenlei</div>
          </tab-bar-item>
          <tab-bar-item path="/shopcart" activeColor="blue">
            <!-- <router-link to="/shopcart"> -->
                <img  slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
                <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
                <div slot="item-text">购物车</div>
            <!-- </router-link> -->
          </tab-bar-item>
          <tab-bar-item path="/mine" activeColor="blue">
            <!-- <router-link to="/mine"> -->
                <img  slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
                <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
                <div slot="item-text">我的</div>
            <!-- </router-link> -->
          </tab-bar-item>
    </tab-bar>
</template>    

<script>
import TabBar from "components/common/tabbar/TabBar.vue"
import TabBarItem from "components/common/tabbar/TabBarItem.vue"
export default{
 name:"MainTabBar",
 components:{
     TabBar,
     TabBarItem
 }   
}    
</script>  

<style scoped>

</style>