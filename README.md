
## Install
```sh
  $ npm install										// Install the extras node modules
  $ cp config/config.example.js config/config.js	// Extend the main config file
  $ cp config/imager.example.js config/imager.js	// Extend the main imager file
  $ nodemon server.js								// Start nodemon
```

**NOTE:** Must be initiated the MongoDB client (Download here: http://www.mongodb.org/ , Install here: http://fernetjs.com/2012/08/buenos-amigos-nodejs-mongodb/)

Then visit [http://localhost:3000/](http://localhost:3000/)

## Directory structure
```
-app/
  |__controllers/
  |__models/
  |__views/
-config/
  |__routes.js
  |__config.js
  |__passport.js (auth config)
  |__express.js (express.js configs)
  |__middlewares/ (custom middlewares)
```

-
## License
(Open Source)

Nicolás Joel Giacconi Fernández (xaco.89@gmail.com)
Óscar Simón Castillo (oscar.s.c@hotmail.com)