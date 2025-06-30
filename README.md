# Simple Webchat

[Leia este README em Português](README.pt-BR.md)

This project demonstrates a small chat interface built with [Vue 3](https://vuejs.org/), [TypeScript](https://www.typescriptlang.org/) and [Vite](https://vitejs.dev/). The application simulates a simple conversation between the user and an agent, including support for audio messages.

## Features

- Displays messages preloaded from `public/mocks/messages.json`.
- Allows sending text messages and recording audio from the microphone (via [RecordRTC](https://github.com/muaz-khan/RecordRTC)).
- Plays audio messages with visualization using [WaveSurfer.js](https://wavesurfer-js.org/).
- Automatically scrolls to the last message and provides a button to jump to the bottom of the chat.
- Global state management with [Pinia](https://pinia.vuejs.org/).
- Styling with [Tailwind CSS](https://tailwindcss.com/) and icons from [PrimeIcons](https://primefaces.org/primeicons/).

## Installation

1. Ensure Node.js is installed (version 20.19.0 or higher is recommended).
2. Install dependencies:
   ```bash
   yarn install
   ```

## Useful Commands

- `yarn dev` — starts the Vite development server.
- `yarn build` — generates the production build in `docs/`.
- `yarn preview` — serves the production build for local testing.
- `yarn lint` — runs ESLint (if necessary, set `NODE_ENV=development`).

## Structure

- `src/` — Vue components, Pinia stores and styles.
- `public/mocks/messages.json` — file with example messages loaded when the app starts.
- `index.html` — entry point of the application.

## License

This project is licensed under the terms of the [MIT License](LICENSE) (if applicable).
