import {useEffect, useState} from 'react';

import auth from '@react-native-firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState<any>();
  const [initializing, setInitializing] = useState(true);

  const authChanged = (user: any) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(authChanged);
    return subscriber;
  }, []);

  return {
    user,
    initializing,
  };
};
