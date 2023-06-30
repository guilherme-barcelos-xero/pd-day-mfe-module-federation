# Summary
Micro frontend example application using Webpack Module Federation.

## Apps
- `server`: NestJS API that provides login, products and cart endpoints.
- `auth`: Login MFE 
- `cart` Cart MFE. Contains Add to cart and Cart components.
- `products`: Products MFE. Contains Products list and Product details component
- `shell`: Host MFE. Contains Header and Handles navigation.


## Installation

In these five directories; `auth`, `cart`, `products`, `server` and `shell` run these commands:

```sh
npm i && npm start
```

In a different terminal window for each app.

Shell app is accessible in (http://localhost:3001/).

## Todo
- Bug when trying to update state in MFE's after receiving custom event (`shell` app works as expected).
- Update `auth` `Login` component to open Modal
- Add auth guards back to `server` controllers