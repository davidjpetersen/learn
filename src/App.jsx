import { Amplify } from 'aws-amplify';
import Editor from './Editor';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
	return (
		<>
			<h1>Hello {user.attributes.name}</h1>
			<button onClick={signOut}>Sign out</button>
			<Editor />
		</>
	);
}

export default withAuthenticator(App);
