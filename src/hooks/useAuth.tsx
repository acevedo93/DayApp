import { useEffect, useState } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth as firebaseAuth } from '../services/firebase';

export const useAuth = () => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  const onAuthStateChange = () => {
    return onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setAuth(true);
      } else {
        setAuth(false);
      }

      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChange();
    return () => {
      unsubscribe();
    };
  }, []);

  return [auth, loading];
};
