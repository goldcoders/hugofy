# Hugofy - Hugo CMS

![Hugofy - Hugo CMS](https://user-images.githubusercontent.com/55337687/120845837-ec50ee00-c5a3-11eb-9b7f-3cfcf46af3c5.png)


## Basic Requirements

- [git](https://git-scm.com/downloads)
- [nodejs & npm](https://nodejs.org/en/download/)
- [hugo](https://github.com/gohugoio/hugo/releases)
- [yarn](https://yarnpkg.com/getting-started/install)

## Set ENV Path
- on windows you need to manually add hugo to the sysytem PATH variables

## Note On Windows Users
- majority of the command only runs on git bash

### Usage

- open gitbash on windows , or terminal on linux / mac
- go to your Project Directory
- type command: `git clone https://github.com/goldcoders/hugofy`
- install all the dependencies type command: `yarn`

### SET Your .env

> Assuming you are already inside `cms` folder

- run this command `mv .env.example .env`

> Note: setting .env inside `cms` folder overrides .env on the `theme` folder

- edit `.env` file on windows type command: `notepad .env` on other OS (linux max) use your default editor eg.: `vim .env`
- modify SITE_URL and DISPLAY_URL according to your domain name
- you can also modify logo on login page by modifying LOGO_URL

```
LOCAL_BACKEND=true
SHOW_PREVIEW_LINKS=true
MEDIA_FOLDER=exampleSite/static/images
SITE_URL=http://example.com
DISPLAY_URL=http://example.com
LOGO_URL=/images/logo.svg
PUBLIC_FOLDER=/images
```

## Running CMS
- go back to Project Folder
- yarn cms
- open one browser on left side on `http://localhost:1234` (LOCAL CMS)
- open one browser on right side on `http://localhost:1313` (LOCAL SITE WITH LIVE RELOAD)

## License

[MIT](./LICENSE)
