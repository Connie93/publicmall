<template>       
        <div class="tabbarItem" @click=itemClick>
            <div v-if="!isActive"><slot name="item-icon"></slot>
            </div>
            <div v-else><slot name="item-icon-active"></slot></div>          
            <div :style="activeStyle"><slot name="item-text"></slot></div>   
        </div>     
</template>    

<script>
export default{
    name:"TabBarItem",
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!==-1
        },
        activeStyle(){
            return this.isActive?{color:this.activeColor}:{}
        }
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path)
        }
    }
}
</script>

<style scoped>
.tabbarItem{
  flex:1;
  text-align: center;
  height: 49px;
    color:black;
  font-size: 14px;
}
img{
    width: 24px;
    height: 24px;
    display: block;
    margin:3px auto;
    cursor: pointer;   
}
</style>