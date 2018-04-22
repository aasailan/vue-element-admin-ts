declare module "*.vue" { // 声明从vue文件中导出的模块是什么导出的应该是 继承Vue的子类
    import Vue from "vue";
    export default Vue;
}