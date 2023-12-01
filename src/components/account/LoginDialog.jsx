import { Box, Dialog, List, ListItem, Typography } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import styled from "@emotion/styled";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
const dialogStyle = {
    height: '90%',
    marginTop: '10%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: "none",
    overflow: "hidden"
}
const Component = styled(Box)`display:flex;`;
const Container = styled(Box)`
    padding:56px 0 56px 56px;
`;
const QRCode = styled('img')({
    height: 264,
    width: 264,
    margin: '5px 0 0 50px'
});
const Title = styled(Typography)`
    font-size:26px;
    color:#525252;
    font-weight:300;
    font-family:inherit;
    margin-bottom:20px;
`;
// const listStyled = styled(List)`
//   & > li {
//     padding:0;
//     margin-top:15px;
//     font-size:20px;
//     line-height:28px;
//     color:red;
// }`;
const onLoginSuccess = (res) => {
    const userInfo = res.credential;
    console.log('login success', jwtDecode(userInfo));
}
const onLoginError = (res) => {
    console.log('login error', res);
}
const LoginDialog = () => {
    return (
        <Dialog open={true} PaperProps={{ sx: dialogStyle }}>

                <Component>
                    <Container>
                        <Title>Use WhatsApp on your computer</Title>
                        <List style={{padding:0,marginTop:'15px',fontSize:'20px',linHeight:'28px',color:'green'}}>
                            <ListItem>1. Open WhatsApp on your phone</ListItem>
                            <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
                            <ListItem>3. Tap on Link a device</ListItem>
                            <ListItem>4. Point your phone on this screen to capture the QR code</ListItem>
                        </List>
                    </Container>
                    <Box styled={{ position: 'relative' }}>
                        <QRCode src={qrCodeImage} alt="QR Code" />
                        <Box style={{ position: 'absolute', top: '50%', tranform: 'translateX(25%)' }}>
                            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
                        </Box>
                    </Box>
                </Component>
        </Dialog>

    )
}
export default LoginDialog;