import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.rosslehr.mobileappbase',
  appName: 'mobile-app-blank',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      "launchShowDuration": 3000,    // or however long your native graphic shows
      "launchAutoHide": false,       // prevent auto-dismiss
      "androidSplashResourceName": "splash", 
      "iosSplashStoryboard": "SplashScreen"
    },
    CapacitorSQLite: {
      iosDatabaseLocation: 'Library/CapacitorDatabase',
      iosIsEncryption: false,
      androidIsEncryption: false,
    },
  }
};

export default config;

