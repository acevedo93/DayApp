import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const signInWithAuthProvider = async (): Promise<any> => {
  try {
    const result: any = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    return {
      user,
      token,
    };
  } catch (err) {
    return err;
  }
};
