<template>
    <el-row class="container" style="height: 100%">
    <!-- 头部 -->
    <v-header :user="user"></v-header>
    <el-col :span="24" class="main">
        <el-row>
            <!-- 侧边导航 -->
            <el-menu :default-active="$route.path" class="mar-l el-menu-vertical-demo el-col el-col-3" light router>
                <template v-for="(item, index) in $router.options.routes[0].children" v-if="!item.hidden">
                <el-menu-item :index="item.path" :key="index"><i class="fa" :class="item.class"></i>{{item.name}}</el-menu-item>
                </template>
            </el-menu>
            <!-- 主要内容区 -->
            <section class="contentCon">
                <el-col :span="21" :offset="3" class="content-wrapper">
                <transition>
                    <router-view></router-view>
                </transition>
                </el-col>
            </section>
        </el-row>
    </el-col>
    </el-row>
</template>
<style lang="less">
</style>
<script lang="ts" src="./admin.ts">
</script>