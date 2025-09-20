import { Client } from 'react-native-appwrite';

export const appWriteClient = new Client()
  .setEndpoint(`${process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT}`) 
  .setProject(`${process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID}`);
