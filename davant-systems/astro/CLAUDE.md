# Davant Systems Astro Project

## Development Server

This project uses a special setup for the development server that allows both Claude and the user to monitor the output:

- `npm run dev` - Starts the development server with output logging to `dev-server.log`
- `npm run dev:logs` - Tails the dev server log file in real-time

### Usage

1. Run `npm run dev` to start the server (logs will be written to `dev-server.log`)
2. In a separate terminal, run `npm run dev:logs` to monitor the server output
3. The dev server will be available at http://localhost:4321/

This setup ensures that Claude can see and react to compilation errors and server status while also allowing the user to monitor the output.