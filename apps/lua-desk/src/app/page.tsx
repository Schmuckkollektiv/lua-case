'use server';

import Greeting from '../components/GreetingComponent';
import LogoutButton from '../components/LogoutButton';

export default async function Index() {
  return (
    <div>
      <Greeting />
      <LogoutButton />
    </div>
  );
}
