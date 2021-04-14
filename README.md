# Fennec

Fennec is a browser extension wallet for Mixin Network.

<img width="374" alt="screenshot" src="https://user-images.githubusercontent.com/67439/114180680-7b160580-997b-11eb-9639-91eb0cf79611.png">


## 0. Supported browsers

- [x] Chrome and Chromium based browsers
- [x] Firefox
- [ ] Safari

## 1. Install

### 🛒 Install from Chrome webstore or Mozilla add-ons

Not ready, waiting for being reviewed.

### 📦 Install manually

1. download a release file from https://github.com/fox-one/fennec/releases/
2. Chrome:
  - Extract the files into a directory
  - Launch Chrome, visit [chrome://extensions/](chrome://extensions/), click "Load Unpacked", browse the location of this directory then select it.
3. Firefox:
  - Launch Firefox, visit [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox), click "Load Temporary Add-on...", browse the location of file then select it.

You will then see Fennec in the extension list.

### 🔧 Install from source code

Clone the code

```
$ git clone https://github.com/fox-one/fennec.git
```

Build the project, and it will generate a directory at `./packages/mixin-extension/build`.

```
$ yarn
$ yarn build
```

If you are using Chrome, follow the 2nd step in "Install manually" section. If you are using Firefox, create a zip file and follow the 3rd step in that section.

## 2. Create a wallet in Fennec

**IMPORTANT**

- **Please keep your keystore file safe, and set a strong password in Fennec to protect your keystore.**
- **Backup is important: If you lose your keystore file, you lose the money.**
- **Be aware of the cyber attack: If someone gets your keystore file, your money is stolen.**
- In one word, if you lost the control to the keystore, you are fucked up.

### 🗝 Import an existed keystore

1. visit https://developers.mixin.one/dashboard
2. create a new app
3. "Secret -> APP SESSION -> RSA session or Ed25519 session", create a new keystore file and download it
4. open Fennec, import it into Fennec.
5. if you can not select the keystore file, try to tap the "fullscreen" icon to open Fennec in a new tab

### 🔑 Create via account service providers

Not ready yet.

## 3. Use fennec

[4swap](https://4swap.org) supports Fennec. Visit https://app.4swap.org, tap "Connect wallet" button to use Fennec in 4swap.


## 4. Interact with your Mixin dApp

There are two demos in the project. Go through the source code and you will find it out.

- [A vue demo](http://fox-one.github.io/fennec), and its [source code](https://github.com/fox-one/fennec/tree/main/packages/mixin-extension-demo)
- [A vanilla js demo](https://fox-one.github.io/fennec/javascript), and its [source code](https://github.com/fox-one/fennec/tree/main/packages/vanilla-javascript-demo)
