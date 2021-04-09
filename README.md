# Fennec

Fennec is a browser extension wallet for Mixin Network.

## Supported browsers

- [x] Chrome and Chromium based browsers
- [ ] Firefox
- [ ] Safari

## Install

### Chrome webstore

Not ready, waiting for reviewing.

### Install from source code

Clone the code

```
$ git clone https://github.com/fox-one/fennec.git
```

Build the project, and it will generate a `/build` directory.

```
$ yarn
$ yarn build
```

Launch Chrome, visit [chrome://extensions/](chrome://extensions/), click "Load Unpacked", browse the location of `/build` directory.

You will see Fennec in the extension list.

## Create a wallet in Fennec

### Import an existed keystore

1. visit https://developers.mixin.one/dashboard
2. create a new app
3. "Secret -> APP SESSION -> RSA sesson", create a new keystore file and download it
4. open Fennec, import it into Fennec.
5. if you can not select the keystore file, try to tap the "fullscreen" icon to open Fennec in a new tab

**IMPORTANT**

- **Please keep your keystore file in safe, and set a strong password in Fennec to protect your keystore.**
- **Backup is important: If you lose your keystore file, you lose the money.**
- **Be aware of the cyber attack: If someone gets your keystore file, your money is stolen.**

### Create keystore from account service providers

Not ready yet.

## Use Fennec

1. visit https://app.4swap.org 
2. tap "connect"
3. tap "connect fennec"
4. tap "allow" button on popup dialog
5. enjoy


