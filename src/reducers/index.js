import { combineReducers } from "redux";



const bearsReducer =(bears=[{latinName:"HyderabadBear",type:"big"},
    {latinName:"Maha",type:"swathi"},
    {latinName:"keraala",type:"IndianBear"},
] , action) =>{

    switch(action.type){
        // case GETBEARS:
        //     return bears;

        default:
            return bears;
    }

}

const rootReducer = combineReducers({
    bears: bearsReducer
})
export default rootReducer;