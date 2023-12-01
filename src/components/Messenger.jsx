import LoginDialog from "./account/LoginDialog";
import { AppBar, Toolbar, styled, Box } from '@mui/material';
const Header = styled(AppBar)`
    background-color: #00bfa5;
    height:220px;
    box-shadow:none;   
`;
const Component = styled(Box)`
    height:100vh;
    backgound-color:#DCDCDC;
`;
const Messenger = () => {
    return (
        <Component>
            <Header>
                <Toolbar></Toolbar>
            </Header>
            <LoginDialog />
        </Component>
    )
}

export default Messenger;