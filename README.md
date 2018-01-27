## Reference

Initially built off [Charlie Gleeson's fantastic "A Top Shelf Web Stack—Rails 5 API + ActiveAdmin + Create React App" article](https://medium.com/superhighfives/a-top-shelf-web-stack-rails-5-api-activeadmin-create-react-app-de5481b7ec0b)

Credit: https://medium.com/@superhighfives

## Quickstart

1. `bundle`
1. `be rake db:create db:migrate db:seed`
1. `cd client; yarn install`
1. `cd ..; foreman start -f Procfile.dev`

After initial install

`foreman start -f Procfile.dev`

## Deployment

`git push heroku master`

https://guarded-thicket-27288.herokuapp.com
