/*
 * @Author: qiao 
 * @Date: 2018-03-21 18:52:15 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-04-22 15:32:06
 * 詹嘉乔定义路由
 */

import { RouteConfig } from 'vue-router';

import loginComp from '@/pages/login/login.vue';

// const notFoundComp = () => import('@/pages/404/404.vue');
const layoutComp = () => import('@/pages/layout/layout.vue');
const dashboardComp = () => import('@/pages/dashboard/dashboard.vue');

// 用户统计
const userIncreaseComp = () => import('@/pages/user_increase/user_increase.vue');
const userPropertyComp = () => import('@/pages/user_property/user_property.vue');
const userDataComp = () => import('@/pages/user_data/user_data.vue');

// 系统设置
const roleManagerComp = () => import('@/pages/role_manager/role_manager.vue');
const authManagerComp = () => import('@/pages/auth_manager/auth_manager.vue');
const userFeedbackComp = () => import('@/pages/user_feedback/user_feedback.vue');

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
 *   title: 'title'               the name show in submenu and breadcrumb (recommend set)
 *    icon: 'iconfont-class-name' 使用iconfont上的图标
 * }
 *
 */

interface ImyRouterConfig extends RouteConfig {
    hidden?: boolean;
    meta?: {
        title?: string;
        icon?: string;
        [key: string]: string;
    };
}

export const loginRoute: ImyRouterConfig = {
    path: '/login',
    name: 'login',
    component: loginComp,
    hidden: true
};

// export const notFoundRoute: ImyRouterConfig = {
//     path: '/404',
//     component: notFoundComp,
//     hidden: true
// };

export const dashboardRoute: ImyRouterConfig = {
    path: '/',
    component: layoutComp,
    redirect: '/dashboard',
    name: 'dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: dashboardComp
    }]
};

// 用户增长
export const userIncreaseRoute: ImyRouterConfig = {
    path: 'userincrease',
    name: 'userIncrease',
    component: userIncreaseComp,
    meta: {
        title: '用户增长'
    }
};
// 用户属性
export const userPropertyRoute: RouteConfig = {
    path: 'userproperty',
    name: 'userProperty',
    component: userPropertyComp,
    meta: {
        title: '用户属性'
    }
};
// 用户数据
export const userDataRoute: RouteConfig = {
    path: 'userdata',
    name: 'userData',
    component: userDataComp,
    meta: {
        title: '用户数据'
    }
};
// 用户统计
export const userStatisticsRoute: ImyRouterConfig = {
    path: '/user',
    component: layoutComp,
    redirect: '/user/userincrease',
    name: 'userStatistics',
    hidden: false,
    meta: {
        title: '用户统计'
    },
    children: [
        userIncreaseRoute,
        userPropertyRoute,
        userDataRoute
    ]
};

// 角色管理
export const roleManagerRoute: ImyRouterConfig = {
    path: 'rolemanager',
    name: 'roleManager',
    component: roleManagerComp,
    meta: {
        title: '角色管理'
    }
};
// 权限管理
export const authManagerRoute: ImyRouterConfig = {
    path: 'authmanager',
    name: 'authManager',
    component: authManagerComp,
    meta: {
        title: '权限管理'
    }
};
// 系统设置
export const systemSettingRoute: ImyRouterConfig = {
    path: '/systemsetting',
    component: layoutComp,
    redirect: '/systemsetting/rolemanager',
    name: 'systemsetting',
    hidden: false,
    children: [
        roleManagerRoute,
        authManagerRoute
    ],
    meta: {
        title: '系统设置'
    }
};

// 问题反馈
export const userFeedRoute: ImyRouterConfig = {
    path: 'userfeedback',
    name: 'userFeedback',
    component: userFeedbackComp,
    meta: {
        title: '问题反馈'
    }
};
export const msgManagerRoute: ImyRouterConfig = {
    path: '/msgmanager',
    component: layoutComp,
    redirect: '/msgManager/userfeedback',
    name: 'msgManager',
    hidden: false,
    children: [
        userFeedRoute
    ],
    meta: {
        title: '系统设置'
    }
};

const test = {
    template: '<div>nihao</div>'
};

const joeRouter: RouteConfig[] = [
    loginRoute,
    // notFoundRoute,
    dashboardRoute,
    userStatisticsRoute,
    systemSettingRoute,
    msgManagerRoute
];

export default joeRouter;
