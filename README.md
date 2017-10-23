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
11. I18n

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
git clone https://github.com/vinsol-spree-contrib/spree-on-react
cd spree-on-react
```
#### Install Node and npm
There are already a lot of resources on how to install node and npm for your operating system. Install Node and npm and come back to follow. This project is tested on node version 5.3.0 and higher.

#### Install project dependencies
> This will install everything you'll need to run this application.
``` sh
npm install
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
- REACT_APP_ALLOW_GUEST_SIGNUP = false
- REACT_APP_SPREE_API_TOKEN='2342862741qweqw7te27632'

Note: We are using spree's core API for fetching countries and states as AMS is not really efficient for these end points. So, we need API base for both core and ams.

**Imp Note:** By Default Spree requires an API token for user signup. **REACT_APP_ALLOW_GUEST_SIGNUP** is therefore set to false by default. If this API token is disabled under Spree, make sure to set this env variable to **true** to ignore this token on signup actions. If **REACT_APP_ALLOW_GUEST_SIGNUP** is `false`, then **REACT_APP_SPREE_API_TOKEN** is required.

#### Build the languages
1. Export the NODE_ENV.
```sh
echo 'export NODE_ENV="development"' >> ~/.bash_profile
```

**Ubuntu Desktop note:** Modify your ~/.bashrc instead of ~/.bash_profile.

**Zsh Note:** Modify your ~/.zshrc file instead of ~/.bash_profile.

2. Generate the locale files.

```sh
npm run build:langs
```

**Note:** `npm run build` generates the locale files as well as the final build. This should be used for generating the production build.

#### Run the FE server
> This runs a local server on http://localhost:3000.
```sh
npm start
```

#### Start your spree project server
Finally, run your Spree project on port 3001 (or whatever port you specified in `.env` file). This will serve as the api to run the frontend.

**Add `spree_ams` to your `Gemfile`.**
``` sh
cd <path-to-your-rails-spree-project>
```
``` ruby
gem 'spree_ams', github: 'vinsol-spree-contrib/spree_ams', branch: '3-1-stable'
```

**Run your rails server.**
```sh
bundle exec rails server -p 3001
open http://localhost:3000
```

### Adding new languages

The project uses [react-intl](https://github.com/yahoo/react-intl/) for localization. The locale files are written in `json` format. The keys are flat in heirarchy (no nested keys). Lets consider that we are adding locales for French. 
1. Create a directory inside the locales directory with name 'fr'.
2. Copy the keys from an existing locale file from `locales` directory in to the 'fr' directory created above.
3. Add actual language translations as values to the keys.
4. Translate the locales: Below is the task defined in `package.json` to build the locales. The same has also been coupled with `npm run build` to assist in production deployment.

```sh
npm run build:langs
```
This task should serve most common needs. For more complex requirements, you can easily tweak this task according to your needs. See: `scripts/translate.js`

### Demo

https://spree-on-react.herokuapp.com/

**Example Credentials:**
- Email: spree-on-react@example.com
- Password: spree-vinsol

### Whats Remaining?

1. Implement webpack's code splitting for smaller bundle sizes.
2. Deployment on AWS using Nginx.

### Upcoming Features
We are heavily working on the below features. Our constant focus is on to improve the code quality, making the separation of concerns between components and container more pronounced.

1. Adding type checking with Flow

### Where are the test cases?

This repository is still very young and adding new features is our top priority. We'll begin writing test cases once we have build most of the spree core functionality.

### Contributing
We encourage you to contribute to this project. Please use GitHub issue tracker to raise pull requests, feature requests and report issues. For any security related issues, please email us directly.


### License

Spree on React is released under the [MIT License](http://www.opensource.org/licenses/MIT).
