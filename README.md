# CovidSC.com

This is the respository for the CovidSC.com front-end.
Please excuse the mess whilst we get things organized!

## Development

To get started:

1) Clone the repository
2) Navigate to the covidsc-web directory
3) Run `npm install`
4) Run `npm run start`

## Building for Production

### Local build

1) In the covidsc-web directory, run `npm run build`
2) (Optionally) Run `npm run start:build` to test the build in a local browser

#### Docker

For a less hands-on option, skip to Docker-Compose.

1) In the covidsc-web directory, run `docker build . -t covidsc/covidsc-web:latest`
2) Run `docker run -p 8000:8000 covidsc/covidsc-web:latest`
3) Navigate a local browser to http://localhost:8000

### Docker-Compose

1) In the covidsc-web directory, run `docker-compose up`
2) Navigate a local browser to http://localhost:8000

## Running in Production

To get started:

1) Clone the repository
2) Navigate to the covid-sc directory
3) Run `npm install`
4) Run `npm run build`
5) Run `npm run start:server`

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `start:server` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `docs` directory
  - (The docs folder is used due to limitations with Github Pages)
- `test` runs your test suite with Karma
- `lint` runs the linter for your project
