# I Ching

A minimal I Ching hexagram-casting app, built with Expo/React Native.

## Use it as a web app (recommended for iPhone-only use, no computer or Apple account needed)

This is set up as an installable PWA and auto-deploys to GitHub Pages on every push to this branch via `.github/workflows/deploy-web.yml`.

One-time setup: in this repo's **Settings > Pages**, set "Build and deployment" source to **GitHub Actions**. After that, every push publishes automatically.

Once it's live, on your iPhone:
1. Open the Pages URL in Safari (Settings > Pages will show it, typically `https://<username>.github.io/<repo>/`).
2. Tap the Share icon > **Add to Home Screen**.

You'll get a home-screen icon that opens full-screen with no Safari chrome, works offline after the first load (service worker caches it), and updates itself whenever you're online and a new version is deployed.

## Run it in Expo Go

1. Install [Expo Go](https://expo.dev/go) on your phone (iOS App Store / Google Play).
2. On this machine:
   ```
   npm install
   npx expo start
   ```
3. Scan the QR code that appears with your phone's camera (iOS) or the Expo Go app (Android). The app opens live — edits to the code hot-reload on your phone.

Both devices need to be on the same Wi-Fi network. If they can't see each other, run `npx expo start --tunnel` instead.

## Building a standalone app (EAS Build)

Once you're happy testing in Expo Go, EAS Build produces a real installable app (with its own icon, no Expo Go needed):

```
npm install -g eas-cli
eas login
eas build:configure
eas build --platform ios      # or --platform android
```

This project's `app.json` already has a bundle identifier (`com.owentanzer.iching`), app icon, and adaptive icon set up, so `eas build` should work out of the box. For iOS you'll need an Apple Developer account; for Android, `eas build` can produce a free `.apk` for direct install without any developer account.

## Project layout

- `App.tsx` — the single screen: hexagram symbol, name, description, and a "cast" button with a fade transition.
- `hexagrams.ts` — the 64 hexagrams (symbol, name, description).
- `assets/` — app icon, adaptive icon layers, and splash image (a simple rendering of Hexagram 1, "Heaven").
