
import Messenger from "./components/Messenger";
import {GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  const clientId = '355935889102-2taptq1urvk1rfpoju32g770rqbi4j8a.apps.googleusercontent.com';
  const secretId = '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';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider >
  );
}

export default App;
