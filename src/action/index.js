import { ActionTypes } from "../contants/actiontypes";
export const setData = (datas) => {
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: datas,
    };
};

export const selectedData = (data) => {
    return{
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: data,
    };
};