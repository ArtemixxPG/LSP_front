import React from 'react';
import {styled} from "@mui/material/styles";
import Drawer, {drawerClasses} from "@mui/material/Drawer";

const MenuMap = (props) => {

    const StyledDrawer = styled(({className, ...props}) => (
        <Drawer {...props} classes={{popper: className}}/>
    ))(({theme}) => ({
        [`& .${drawerClasses.paper}`]: {
            color: theme.palette.common.white,
            minWidth: "310px"
        },

    }))

    return (
        <StyledDrawer
            anchor={'right'}
            open={props.open}
            onClose={props.close}
        >
            {props.content}
        </StyledDrawer>
    );
};

export default MenuMap;