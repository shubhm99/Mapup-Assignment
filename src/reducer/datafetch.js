import { ActionTypes } from "../contants/actiontypes";

const initialState = {
    datas:[{country:'United States', currency:'Dollars $', uos:'Miles/Hour', uod:'Miles', uov:'Cups, Pints, Quarts, Gallons', pos:{lat:37.0902, lng:95.7129}}, 
    {country:'United Kingdoms', currency:'Pounds £', uos:'Miles/Hour', uod:'Miles', uov:'cubic meters', pos:{lat:55.3781, lng:3.4360}},
    {country:'India', currency:'Rupees ₹', uos:'Kilometer/Hour', uod:'Meters', uov:'Litres', pos:{lat:20.5937, lng:78.9629}}]
}

export const dataReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;    
        default:
            return state;
    }
}