import React from 'react';
import GoogleSignIn from './auth/GoogleSignIn';
// import { Flex } from 'skylight-react';
const Landing = () => {
return (
<div height="100vh" width="100%">
    <h3>Authenticate to continue</h3>
    <GoogleSignIn/>
</div>);
}
export default Landing;