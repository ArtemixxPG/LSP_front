const DarkModeReducer = (state, action)=>{
    switch (action.type){

        case "TOGGLE":{

            return{
                darkMode: !state.darkMode,
                //lightMode: !state.lightMode,
            }
        }

        default:
            return state;
    }
};

export default DarkModeReducer;