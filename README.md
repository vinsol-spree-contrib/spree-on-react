# Spree On React

[![Code Climate](https://codeclimate.com/github/ShubhamGupta/spree-on-react/badges/gpa.svg)](https://codeclimate.com/github/ShubhamGupta/spree-on-react)

> Rails is slow. Spree is slower. The main purpose of this repository is to give a Spree front-end that is _snappier_ and provides a more modern approach to solve the common problems found in e-commerce space. We are enthusiastic about this project and will continue supporting this project. :)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can tweak any build related configuration by following this package.

## Introduction

Spree-on-react provides a complete front end for [Spree](https://github.com/spree/spree) built entirely on [ReactJS](https://facebook.github.io/react). It works with [spree_ams](https://github.com/vinsol/spree_ams) gem which is written using `ActiveModelSerializers` and is a faster and a better alternative to the core spree api.

The purpose of this repository is to continue to evolve spree, making it faster and easier to use.

### Stack

1. ReactJS
2. ReactBootstrap
3. Redux and related packages.
4. React-router
5. Webpack for deployment

For a comprehensive list, see `package.json`.

### Features Implemented

1. User Login / Logout.
2. Product listing with infinite scroller.
4. Product filtering by taxons.
5. Product search.
6. Cart (Logged-in as well as guest users).
7. Checkout steps (Logged-in as well as guest users).
8. Order listing for logged in users.
9. Route handling.
10. Using local storage to maintain orders and session information in browser.

### Directory Structure
Application source code is present inside ./src directory. Here we only show a few relevant files.

```
./src/
├── actions (All redux action creators)
│   ├── flash.js
│   ├── index.js
├── apis (All API end points. Use superagent package to send XMLHttp requests).
│   ├── ams-adapters (These are specialised classes that parse the  API response. See Adapters.)
│   │   ├── spree-api-product-adapter.js
│   ├── products.js
├── components (Hold all react components seggregated in a sane directory structure.)
│   ├── flash.jsx
│   ├── home-page.jsx
│   ├── layout.jsx
│   ├── main.jsx
│   ├── shared (Shared components)
│   │   ├── header.jsx
│   │   ├── infinite-scroller.jsx
│   │   ├── loader.jsx
│   │   └── modal.jsx
├── constants(All constants to run the application. Like Routes, etc)
│   ├── app-routes.js
├── containers ( react-redux connectors)
│   ├── home-page-connector.js
├── errors (Custom errors)
│   └── invalid-order-transition.js
├── images
│   └── logo.png
├── index.js (Entry / Mount point)
├── reducers (Redux reducers)
│   ├── index.js
│   ├── order-list.js
├── routes.jsx (Front end routes)
├── services
│   ├── url-parser.js
├── store.js (Exports redux store.)
└── styles
    ├── main.scss

```

### Adapters

This project depends on the `spree_ams` gem as mentioned above. This response is not particularly suited for traversing. Adapter classes process the response sent by spree_ams to make it more traversable across the application. We use this processed response while dispatching redux actions.

##### Example:

Raw Response

``` json
{
    "product": {
        "id": "1",
        "product_property_ids": [1, 2, 3]
    },
    "product_properties": [
        {
            "id": "1",
            "name": "Brand",
            "value": "Reebok"
        },

        {
            "id": "2",
            "name": "Color",
            "value": "Red"
        }
    ]
}
```
Processed Response - Nesting properties inside products.

```json
{
    "product": {
        "id": "1",
        "product_property_ids": [1, 2, 3],
        "product_properties": [
            {
                "id": "1",
                "name": "Brand",
                "value": "Reebok"
            },

            {
                "id": "2",
                "name": "Color",
                "value": "Red"
            }
        ]
    }
}
```

Our long term goal is to evntually get rid of these adapter classes and use redux-orm as it is more scalable. However, the library is yet to release its first stable version.

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
> The application depends on a few environment variables. Create a `.env` file at the root directory of your project and add the following variables. Change the values based on your backend.

```sh
touch .env
vi .env
```
List of Configuration variables:
- REACT_APP_API_BASE="http://localhost:3001/api/v1"
- REACT_APP_AMS_API_BASE='http://localhost:3001/api/ams'
- REACT_APP_API_HOST="http://localhost:3001"

Note: We are using spree's core API for fetching countries and states as AMS is not really efficient for these end points. So, we need API base for both core and ams.

#### Run the FE server
> This runs a local server on http://localhost:3000.
```sh
1. npm start
```

#### Start your spree project server
Finally, run your Spree project on port 3001 (or whatever port you specified in `.env` file). This will serve as the api to run the frontend.

**Add `spree_ams` to your `Gemfile`.**
``` sh
cd <path-to-your-rails-spree-project>
```
``` ruby
gem 'spree_ams', :github => 'shubhamgupta/spree_ams', :branch => 'feature/common-fe-routes'
```

**Run your rails server.**
```sh
bundle exec rails server -p 3001
open http://localhost:3000
```


### Whats Remaining?

1. Support for user sign up.
2. Implement webpack's code splitting for smaller bundle sizes.
3. I18n.

### Where are the test cases?

This repository is still very young and adding new features is our top priority. We'll begin writing test cases once we have build most of the spree core functionality.

### Demo

Coming Soon.

### Contributing
We encourage you to contribute to this project. Please use GitHub issue tracker to raise pull requests, feature requests and report issues. For any security related issues, please email us directly.


### License

Spree on React is released under the [MIT License](http://www.opensource.org/licenses/MIT).