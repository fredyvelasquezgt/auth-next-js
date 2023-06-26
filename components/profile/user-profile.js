import ProfileForm from './profile-form';
import classes from './user-profile.module.css';
import {useSession, getSession} from 'next-auth/client'
import { useState } from 'react';

function UserProfile() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedSession, setLoadesSession] = useState();
  // Redirect away if NOT auth
  useEffect(() => {
    getSession().then(session => {
      if(!session) {
        window.location.ref = '/auth'
      } else {
        setIsLoading(false)
      }
    })
  }, [])

  const [session, loading] = useSession();


  if(isLoading) {
    return <p className={classes.profile} >Loading...</p>
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
