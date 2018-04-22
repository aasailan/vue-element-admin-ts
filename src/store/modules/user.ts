/*
 * @Author: qiao 
 * @Date: 2018-03-22 14:14:22 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-04-22 14:46:42
 * 管理员信息
 */

import { IUser } from '@/entity/user';
import { Module } from 'vuex';
import { IRootState } from '@/store';

interface IuserState {
    user: IUser;
}

const user: Module<IuserState, IRootState> = {
    state: {
        user: {}
    }
};

export default user;
