# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

#### My Environment

Ruby Version: 3.0.0

Rails Version: 6.1.6

Node Version: 16.13.0

Yarn Version: 1.22.10

* Trello API, fetch the details
  I have installed the gem called ruby-trello for API public key from Trello via trello.com/app-key/ and reference on github https://github.com/jeremytregunna/ruby-trello

#### Local set up instructions
    - `git clone git@github.com:siphosmall/rails_react_offerzen_assessment.git`
    - `cd rails_react_offerzen_assessment`
    - `bundle install`
    - `yarn install`
    - `rails s`
    - (in new terminal) `./bin/webpack-dev-server`

  You should now be able to navigate the site at localhost:3000, see details of all the lists and cards ,with working list and create a new card.

* System dependencies

* Configuration
  Trello API is configured on config/initializers/trello.rb

* Heroku Url  
  https://rails-react-offerzen-assesment.herokuapp.com
* ...
