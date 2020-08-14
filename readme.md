To Run:

This project will ONLY WORK WITH Android. It will not run in browser!

Pre-Install:

Make sure NPM is installed and up to date.

Android:

First, enable USB Debugging on your device, and plug it into your computer. There are instructions to do this here: https://developer.android.com/studio/run/device.html#developer-device-options.

You must also install the Expo app on Android. It is available on the Play Store here: https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en

Next, open a shell in the d2000 directory. It should be the same directory as this readme.

Run the command:

    npm install package.json

and wait for it to finish.

Next, run the command:

expo start --no-dev --minify

Once this loads, make sure your Android device which you have USB Debugging enabled on is plugged into your computer. It must also be unlocked.

Next, click "Run on Android Device/Emulator". The prototype app should start on your device.

iOS:

Only try this if you absolutely do not have an Android device to test with! Our team members have reported that they can access the prototype by downloading the Expo app from the App Store and scanning the QR code that it generates - however, some of our team have tried this and it did not work on their devices - we recommend using the method above!