/*
 * @Author: qiao 
 * @Date: 2018-03-22 14:15:13 
 * @Last Modified by: qiao
 * @Last Modified time: 2018-03-22 14:17:18
 * 管理员用户信息
 */

export interface IUser {
    headPortrait?: string;
    realname?: string;
    permissions?: string[];
    roles?: string[];
    tel?: string;  
    uid?: string;
}
