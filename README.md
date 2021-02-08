# Phonics
A new and improved Audio Server, built to tackle issues.

Versions are packaged and made into an executable in larger updates.

## Dashboard Deprecation
Whilst functionality remains to connect to dashboard, as we aren't actively using it, we shouldn't run in 'legacy mode'. Legacy mode is the older Audio connections and is for working with older systems. The WSS Server should also become a Sockets.io server soon.

## .env layout:
```
DASH_WSS=
WSS_PORT=
DASH_LEGACY= // Only populate for Legacy mode
AMQP_URL=
AMQP_USER=
AMQP_PASS=
MONGO_USER=
MONGO_PASS=
MONGO_ADDRESS=
MONGO_PORT=
MONGO_DB=
```
