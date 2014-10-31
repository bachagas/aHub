aHub
====

An Appcelerator Titanium mobile app for Android that is an IoT hub to control some home appliances:
   - the mobile phone itself;
   - a TV through infrared remote using a connected Arduino;
   - a lamp or something to switch on and off through a 110V/220V AC output relay using a connected Arduino;
   - a (hacked) [Sennheiser SD Office 1 Headset](http://en-us.sennheiser.com/wireless-phone-headset-single-sided-dect-sd-office) through two optocouplers using a connected Arduino;
   - a desktop or notebook microcomputer through TCPIP connection (TODO yet...).

To be used with [aCap](http://github.com/bachagas/aCap) and [aDock](http://github.com/bachagas/aDock)  to be used as an assistive technology device for people with severe physical disabilities, like tetraplegia.

Development Environment
-----------------------
- Titanium Studio, build: 3.4.0.201409261227
- Titaium SDK: 3.4.0.GA
- Android 4.4.2 (API 19) - recommended, but may work with lower versions, if not too old
- JDK 1.7.0_71 64 bits
- Windows 8.1 64 bits
 
Dependencies
------------

You will need to download and build the following libraries for the Titanium:
- [USB-Serial-Module](http://github.com/bachagas/USB-Serial-Module): USB Serial Module for Android that is a wrapper of [usb-serial-for-android](http://github.com/bachagas/usb-serial-for-android);
- [NovarumBluetooth](https://github.com/bachagas/NovarumBluetooth): Appcelerator Titanium Bluetooth Module for Android.

Build and package them as an Android Modules for the Titanium SDK so they can be available for all apps in your workspace.

Other information
-----------------

Nothing else to say for now ;-)
