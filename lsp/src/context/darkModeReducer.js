const DarkModeReducer = (state, action)=>{
    switch (action.type){

        case "TOGGLE":{
            return{
                darkMode: !state.darkMode,
            }
        }

        i

        default:
            return state;
    }
};

export default DarkModeReducer;