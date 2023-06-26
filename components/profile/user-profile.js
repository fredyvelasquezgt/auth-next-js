import ProfileForm from './profile-form';
import classes from './user-profile.module.css';
import {useSession, getSession} from 'next-auth/client'
import { useState } from 'react';

function UserProfile() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedSession, setLoadesSession] = useState();
  // Redirect away if NOT auth
 
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
