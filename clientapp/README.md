
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## `API call`

In this application i have created a Web APP where i am using GIPHY API for loading and calling the DATA for loading GIPHY images. 

Due to some restriction from the API front i am able to call 50 Data on Scroll. But it is possible to load more Data on 

At the Beginning i am calling 15 random Giphy Images. After this on Page Scroll i am calling multiple random data in align till the data limit of 50. 

If API provide us more data then we can loade more Giphy Images inside the component.