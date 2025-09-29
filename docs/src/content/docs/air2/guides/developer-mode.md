---
title: Developer Mode

description: How to Enable Developer Mode on INMO Air2
sidebar:
  order: 1
---

July 24, 2023

# INMO Air2 Developer Mode

![](public/images/air2/developer-mode-1.PNG)

Android Debug Bridge (ADB) is a versatile command-line tool that allows you to communicate with your device. ADB commands help with various device operations, such as installing and debugging applications. This guide will show you how to use ADB to install Android Packages (APKs) on your INMO Air2 device.&#x20;

*Warning: Due to the open-source nature of the Android ecosystem, using ADB to install third-party apps and performing any operations that alter the standard settings of the operating system may cause the device to freeze, overheat or experience bugs. INMO AR will not be held responsible for this. After ADB activated on the device, your INMO Air2 will not be covered under our 7 day no-questions-asked return policy.*

&#x20;

## Enabling Developer Mode

&#x20;

![](public/images/air2/developer-mode-2.PNG)

Navigate to Settings > About > My Glasses&#x20;

Long press the right touchpad for 1.5 seconds on the INMO Air2 twice to access developer mode activation.&#x20;

Enter the password: 20210108&#x20;

Developer mode will now be activated and communication via ADB enabled.&#x20;

&#x20;

## Windows Developer Environment Setup

Download the compressed zip folder below and unzip it to a destination of your choice.

\[official Android developer SDK Platform Tools release page] https://developer.android.com/tools/releases/platform-tools

**Note: Deleting this folder will cause your ADB setup to stop functioning.&#x20;**

&#x20;

### PATH setup

* Copy the path of the unzipped platform-tools folder.&#x20;

![](public/images/air2/developer-mode-3.PNG)

* Use \[Windows key] + \[S] shortcut to search for \[View Advanced system settings] and press enter.

![](public/images/air2/developer-mode-4.JPEG)

*The windows icon key is usually marked with \[WIN] or \[Windows logo].&#x20;*

* Within the System Properties window, click \[Environment Variables].



![](public/images/air2/developer-mode-5.png)





* Find \[PATH] within the System Variables section and double click to edit.

![](public/images/air2/developer-mode-6.jpeg)

* In the Edit System Variable window, specify the value of the PATH by pasting in the location of the unzipped platform-tools we copied earlier.&#x20;

![](public/images/air2/developer-mode-7.jpeg)

* Close all remaining windows by clicking OK

* Use \[Windows key] + \[r] shortcut to open the \[Run] dialogue box, enter \[CMD] and press enter to open the command prompt window.

![](public/images/air2/developer-mode-8.png)

* Check if ADB is setup correctly by typing \[adb] in command prompt and pressing \[enter]&#x20;

![](public/images/air2/developer-mode-9.jpeg)

* The following statement should appear, indicating successful installation of the ADB environment.&#x20;

![](public/images/air2/developer-mode-10.png)

## How to install APKs

Download the desired APK from a trusted source and connect your INMO Air2 device to your computer via USB.

* Use \[Windows key] + \[r] shortcut to open the \[Run] dialogue box, enter \[CMD] and press enter to open the command prompt window.

![](public/images/air2/developer-mode-11.jpeg)

* Type adb install and drag the APK file you wish to install into the command line window.

![](public/images/air2/developer-mode-12.jpeg)

* After dragging the APK into the window, the file path of the APK will be automatically copied into the Command Prompt window. Press \[ENTER] to commence installation.  "Success" will appear after successful installation of the APK on the Air2.

![](public/images/air2/developer-mode-13.jpeg)

