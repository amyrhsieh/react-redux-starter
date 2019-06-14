# React Redux Starter Kit
A work in progress.

Based on [Webpack 4 tutorial](https://www.valentinog.com/blog/webpack/). <-- many thanks to
Valentino Gagliardi for this great tutorial.

Includes:
- React (v16+)
- Webpack (v4+)
- Redux
- SCSS
- Basic nav with react router (v5+)
- React Bootstrap
- Deployment to S3 (compiled assets)
- yarn.lock

## Prerequisites
- Node, npm
- An s3 bucket set up for web hosting

## Setup
- S3: Create a file in root directory called `s3bucketname`, with the s3 bucket name for deployment (content should be just a single string). This file will be gitignored.
- Please use `yarn` (not `npm`) to manage packages.

## Build and deploy
Run the prod_deploy.sh script: `sh prod_deploy.sh`

## Resources
- https://www.valentinog.com/blog/webpack/
- https://webpack.js.org/
- https://github.com/webpack-contrib/mini-css-extract-plugin
