import {AsyncStorage} from 'react-native';

export const StoreData = async (key: string, data: any) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (error) {}
};

export const getData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      return data;
    }
  } catch (error) {}
};
