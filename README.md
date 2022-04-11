# Basic shopping cart app

1. In `/src/containers/App.js`, render product cards as shown in `scooter_wireframe.png`. Assume that the `price` field is returned in cents, but you want to display as dollars (e.g. a price value of 1250 would display as "\$12.50"). Images are provided in `/public/assets/` and product data is provided via the `getScooters()` function in `src/getScooters.js`. Try to match the layout as closely as possible.
2. Update `/src/reducers/cart.js` so that when the Redux store receives an `ADD_TO_CART` event, an object with fields `itemId` and `quantity` gets added or updated to the `lineItems` value in the Redux store. Review `/src/actions/cart.js` for details on the ADD_TO_CART event.
3. Connect the "Add to cart" buttons to the Redux store so that it fires the Redux action.




## How to run the result

Use [this link](https://margaretkulinich.github.io/test-task) to run the app.


