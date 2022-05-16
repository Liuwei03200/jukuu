<template>
    <el-container class="layout">
        <el-aside>
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
            >
                <el-menu-item index="1"  @click="pushView('jukuu')">  
                   <el-icon><house /></el-icon>
                   <span>句酷首页</span>
                </el-menu-item>
                  <el-menu-item index="2"  @click="pushView('/')">  
                   <el-icon><document /></el-icon>
                   <span>句酷简介</span>
                </el-menu-item>
                  <el-menu-item index="3"  @click="pushView('/advisor')">  
                   <el-icon><star /></el-icon>
                   <span>句酷顾问</span>
                </el-menu-item> 
                <el-sub-menu index="4">  
                   <template #title>
                        <el-icon><Help /></el-icon>
                        <span>使用帮助</span>
                   </template>
                    <el-menu-item index="4-1" @click="pushView('/helper_1')">新手入门</el-menu-item>
                    <el-menu-item index="4-2" @click="pushView('/helper_2')">搜索页面</el-menu-item>
                    <el-menu-item index="4-3" @click="pushView('/helper_3')">例句与用法</el-menu-item>
                    <el-menu-item index="4-4" @click="pushView('/helper_4')">单词与搭配</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="5"  @click="pushView('/contact')">  
                   <el-icon><message /></el-icon>
                   <span>联系我们</span>
                </el-menu-item>
                <el-menu-item index="6"  @click="pushView('/declare')">  
                   <el-icon><user /></el-icon>
                   <span>免责声明</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
<script setup>
import {useRouter} from 'vue-router'

const router = new useRouter();

const pushView = (page)=>{
    if(page == 'jukuu'){
        window.open('http://www.jukuu.com/','_blank');
    }else{
        router.push(page);
    }
}

</script>
<style lang="less">
.layout{
    height: 100%;
}
</style>