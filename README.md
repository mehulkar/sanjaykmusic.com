# sanjaykmusic.com

Uses `rack/try_static` to deploy Ruby app.

Heroku detects Ruby buildpack and runs `rake assets:precompile`

Build with Middleman

## Setup

```
bundle install
middleman server
```

## Deploy

```
git push heroku master
```
