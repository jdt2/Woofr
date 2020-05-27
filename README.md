Woofr - Tinder for adopting dogs!

We use Redis as the main primary database (although not very much) for anything from users to storing dog profiles.

To install/start the app:
   npm install
   yarn start

To start the redis server, make sure you have redis installed and run:
   redis-server

To start the middleware (need to change the IP used on front-end):
   cd redis-graphql-server/
   npm start