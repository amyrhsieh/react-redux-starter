# React Redux Demo
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
- [Node](https://nodejs.org), npm
- An AWS S3 bucket set up for web hosting (see [AWS guide to Hosting a static website on S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html))
- [AWS CLI](https://aws.amazon.com/cli/) set up with credentials to access your S3 bucket ^

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
- https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html
