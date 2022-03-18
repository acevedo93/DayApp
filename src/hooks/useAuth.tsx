import { useEffect, useState } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth as firebaseAuth } from '../services/firebase';
import { authLoadingSelector } from '../store/selectors/authSelector';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const authLoading = useSelector(authLoadingSelector);
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

  useEffect(() => {
    setLoading(authLoading);
  }, [authLoading]);

  return [auth, loading];
};
