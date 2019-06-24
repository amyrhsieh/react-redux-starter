# React Redux Starter Kit
A work in progress.

Includes:
- React (v16+)
- Webpack (v4+)
- Redux
- [React Final Form](https://github.com/final-form/react-final-form)
- SCSS
- Basic nav with react router (v5+)
- Bootstrap stylesheet
- Deployment to AWS S3 (compiled assets)
- yarn.lock
- Jest and Enzyme for testing

## Prerequisites
- Node, npm
- An s3 bucket set up for web hosting

## Setup
- S3: Create a file in root directory called `s3bucketname`, with the s3 bucket name for deployment (content should be just a single string). This file will be gitignored.
- Please use `yarn` (not `npm`) to manage packages.

## Build and deploy
- To build: `yarn build`
- To deploy to S3: `yarn deploy`

## Resources
- https://www.valentinog.com/blog/webpack/ <-- many thanks to Valentino Gagliardi for this great tutorial.
- https://webpack.js.org/
- https://github.com/webpack-contrib/mini-css-extract-plugin
- https://jestjs.io/en/
- https://github.com/airbnb/enzyme
