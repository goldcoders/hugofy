# Hugofy - Hugo Site CMS

![Hugofy - Hugo Site CMS](https://user-images.githubusercontent.com/55337687/120845837-ec50ee00-c5a3-11eb-9b7f-3cfcf46af3c5.png)


## Basic Requirements

- [git](https://git-scm.com/downloads)
- [nodejs & npm](https://nodejs.org/en/download/)
- [hugo](https://github.com/gohugoio/hugo/releases)
- [snowpack](https://www.snowpack.dev/tutorials/getting-started)
- [esbuild](https://esbuild.github.io/getting-started/)
- [yarn](https://yarnpkg.com/getting-started/install)

## Set ENV Path
- on windows you need to manually add hugo to the sysytem PATH variables

## Note On Windows Users
- majority of the command only runs on git bash

### Usage

- open gitbash on windows , or terminal on linux / mac
- go to your Hugo Site Directory
- type command: `git clone https://github.com/goldcoders/hugofy cms`
- go to cms folder: `cd cms`
- install all the dependencies type command: `yarn`
### SET Your .env

> Assuming you are already inside `cms` folder

- run this command `mv .env.example .env`

> Note: setting .env inside `cms` folder overrides .env on the `theme` folder

- edit `.env` file on windows type command: `notepad .env` on other OS (linux max) use your default editor eg.: `vim .env`
- modify SITE_URL and DISPLAY_URL according to your domain name
- you can also modify logo on login page by modifying LOGO_URL

```
SNOWPACK_PUBLIC_BACKEND_TYPE=git-gateway
SNOWPACK_PUBLIC_BASEURL=https://goldcoders.dev
SNOWPACK_PUBLIC_REPO=goldcoders/site
SNOWPACK_PUBLIC_BRANCH=main
SNOWPACK_PUBLIC_BACKEND=true
SNOWPACK_PUBLIC_SHOW_PREVIEW_LINKS=true
SNOWPACK_PUBLIC_MEDIA_FOLDER=static/images
SNOWPACK_PUBLIC_SITE_URL=https://goldcoders.dev
SNOWPACK_PUBLIC_DOMAIN=goldcoders.dev
SNOWPACK_PUBLIC_DISPLAY_URL=https://goldcoders.dev
SNOWPACK_PUBLIC_LOGO_URL=/images/logo.svg
SNOWPACK_PUBLIC_PUBLIC_FOLDER=/images
```

## Running CMS
- go back to Project Folder
- yarn cms
- google chrome will open  `http://localhost:1234` (HUGOFY CMS)
- open another tab on right side on `http://localhost:1313` (HUGO SITE)

## License

[MIT](./LICENSE)
