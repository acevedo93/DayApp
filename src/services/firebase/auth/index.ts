import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {auth} from '../config';

GoogleSignin.configure({
  webClientId:
    '581406484901-9gkilhe6tpv2p63dd5ft6cnfkb5d5fsc.apps.googleusercontent.com',
  offlineAccess: true,
});

export const login = async () => {
  const {idToken} = await GoogleSignin.signIn();
  console.log(idToken);
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  console.log(googleCredential);
  return auth().signInWithCredential(googleCredential);
};

export const logout = async () => {
  return await auth().signOut();
};
