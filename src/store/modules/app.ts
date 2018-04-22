/*
 * @Author: qiao 
 * @Date: 2018-03-22 11:22:13 
 * @Last Modified by:   qiao 
 * @Last Modified time: 2018-03-22 11:22:13 
 * 网页app自身状态管理
 */

import { Module } from 'vuex';
import { IRootState } from '@/store';
import { TOGGLE_SIDEBAR } from '@/store/types';

export interface IAppState {
    sidebar: {
        opened: boolean
    };
}

const app: Module<IAppState, IRootState> = {
    state: {
        sidebar: {
            opened: true
        } 
    },

    mutations: {
        [TOGGLE_SIDEBAR](state) {
            state.sidebar.opened = !state.sidebar.opened;
        }
    },

    actions: {
        toggleSideBar(context) {
            context.commit(TOGGLE_SIDEBAR);
        }
    }
};

export default app;
