# Gatsby Portfolio

This is a small portfolio I made to showcase the work I have done thus far within my career.

## To Start Using Eder's Portfolio

##### You have [npm](https://www.npmjs.com/get-npm) installed

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew update
brew doctor
export PATH="/usr/local/bin:$PATH"
brew install node
npm -v
```

##### You have Gatsby CLI installed (gatsbyjs.com/docs/tutorial/part-zero/)

```
npm install -g gatsby-cli
gatsby --help
```

## Steps for Deployment:

#### If you want to build and run locally or deploy to S3

If you want to run/build locally...

```
npm i
gatsby build
gatsby develop
navigate to http://localhost:8000/
```

If you want to deploy to S3

```
pip install awscli
npm install gatsby-plugin-s3
aws configure
npm run build
npm run deploy
```

<img src="https://eders-portfolio.s3.amazonaws.com/portfolio-image.png" width="100">
