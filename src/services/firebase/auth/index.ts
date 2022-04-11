import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {auth} from '../config';

GoogleSignin.configure({
  webClientId:
    '581406484901-9gkilhe6tpv2p63dd5ft6cnfkb5d5fsc.apps.googleusercontent.com',
  offlineAccess: true,
});

export const loginFirebase = async () => {
  try {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  } catch (err) {
    console.log(err);
  }
};

export const logout = async () => {
  try {
    return await auth().signOut();
  } catch (err) {
    console.log(err);
  }
};
