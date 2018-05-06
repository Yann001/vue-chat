import fetch from './fetch';

export const isExist = userName => fetch('/user/isExist', userName);
export const getUser = userName => fetch('/user/getUser', userName);
