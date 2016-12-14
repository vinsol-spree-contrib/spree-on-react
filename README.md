# Spree On React

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can tweak any build related configuration by following this package.

## Introduction

Spree-on-react provides a complete front end for [Spree](https://github.com/spree/spree) built entirely on [ReactJS](https://facebook.github.io/react). It works on the core `spree_api`. We also aim to make it work with [spree_ams](https://github.com/hhff/spree_ams) gem which is written using `ActiveModelSerializers` and is a faster and a better alternative to the core spree api.

The main purpose of this repository is to continue to evolve spree, making it faster and easier to use.

> Rails is slow. Spree is slower. The main purpose of this repository is to give a Spree front-end that is snappier and provides a more modern approach to solve the common problems found in e-commerce space. We are enthusiastic about this project and will continue supporting this project. :)

### Setup

This application is under initial development currently. It uses a spree API server as its data source to run the FE. To set up the project:

#### Clone this repository
```sh
git clone https://github.com/ShubhamGupta/spree-on-react.git
cd spree-on-react
```
#### Install Node and npm
There are already a lot of resources on how to install node and npm for your operating system. Install Node and npm and come back to follow. This project is tested on node version 5.3.0 and higher.

#### Install project dependencies
> This will install everything you'll need to run this application.
``` sh
1. npm install
```

#### Setup the environment file.
> The application depends on a few environment variables. Create a `.env` file at the root directory of your project and the following variables. Change the values based on your backend.

```sh
touch .env
vi .env
```
List of Configuration variables:
- REACT_APP_API_BASE="http://localhost:3001/api/v1"
- REACT_APP_API_HOST="http://localhost:3001"

#### Run the FE server
> This runs a local server on http://localhost:3000.
```sh
1. npm start
```

#### Start your spree project server
Finally, run your Spree project on port 3001 (or whatever port you specified in `.env` file). This will serve as the api to run the frontend.

```sh
cd <path-to-your-rails-spree-project>
bundle exec rails server -p 3001
open http://localhost:3000
```

### Where are the test cases?

This repository is still very young and adding new features is our top priority. We'll begin writing test cases once we have build most of the spree core functionality.

### Contributing
We encourage you to contribute to this project. Please use GitHub issue tracker to raise pull requests, feature requests and report issues. For any security related issues, please email us directly.


### License

Spree on React is released under the [MIT License](http://www.opensource.org/licenses/MIT).