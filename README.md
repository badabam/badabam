# Personal website of Jeremias Erbs


## Installation

```shell
$ npm install
```

## Develop and run server
```shell
$ npm start #watches files, creates doc/ folder, runs server on localhost:3000 with browser-sync
```

## Deploy for Github Pages or local view
Just push master to Github. When running `npm start`, the folder `docs/` is already created
and stays up to date. If you did changes without starting the dev server, you can run
```shell
$ npm run build
```
This will create a new version of the `docs/` folder as well.

## Anything else
Look into the package.json
