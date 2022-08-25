# Breathing app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the project. It will also generate a typescript client for the API based on a swagger file. A mock server will also be created based on that swagger file.

## Developing

### API

Use api.ts for all requests to the server (or mock). For example;

import { Api } from "../../api";

const api = new Api();

..

api.levels.levelsList();
