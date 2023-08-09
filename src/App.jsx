import { Amplify } from 'aws-amplify';
import TipTap from './TipTap.jsx'
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.attributes.name}</h1>
      <TipTap />
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);