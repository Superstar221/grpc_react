import GoogleLogin from 'react-google-login';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
export default () => {
    const clientId = '10440942302-5vhkh9uchbvtnn24jf9nsqjdls51ou5b.apps.googleusercontent.com'
    const onFailureCallback = (response) => {
        console.log('error', response);
    }

    const onSuccessCallback = (response) => {
        let requestParams = {
            token: response.tokenId,
            googleId: response.googleId
        };
        console.log(requestParams);
    }
    useEffect(() => {
        const initClient = () => {
              gapi.client.init({
              clientId: clientId,
              scope: ''
            });
         };
         gapi.load('client:auth2', initClient);
     });
    return(
        <div>
            <GoogleLogin
                clientId={clientId} //CLIENTID NOT CREATED YET
                buttonText={<div>Sign In With Google</div>}
                onSuccess={onSuccessCallback}
                onFailure={onFailureCallback}
                isSignedIn={true}
            />
        </div>
    )
}