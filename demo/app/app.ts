﻿import './bundle-config';
import * as application from 'tns-core-modules/application';
import { initTwilio } from 'nativescript-twilio';
import { TwilioAppDelegate } from 'nativescript-twilio/delegate';

// Please fill these values
const accessTokenUrl = 'https://lin.ngrok.io/accessToken';
const accessTokenHeaders = {
  // 'Authorization': 'Token sometoken',
};

initTwilio(accessTokenUrl, accessTokenHeaders, 'Demo App');

if (application.ios) {
  // register twilio app delegate in order to receive push notifications
  application.ios.delegate = TwilioAppDelegate;
}

application.start({ moduleName: 'main-page' });
