# Nuxt.js + Firebase Hosting, Functions example

## How to deploy

```bash
# select profject id to deploy
$ firebase use --add

# configuration. change YOUR_ID and YOUR_PASSWORD
$ firebase functions:config:set basic_auth.id=YOUR_ID
$ firebase functions:config:set basic_auth.password=YOUR_PASSWORD

# check configuration
$ firebase functions:config:get
 {
   "basic_auth": {
     "password": "YOUR_PASSWORD",
     "id": "YOUR_ID"
   }
 }

$ firebase deploy
```

## Build Setup

``` bash
# install dependencies
$ yarn install && cd functions && yarn install && cd ..

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
