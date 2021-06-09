# Hugofy - Hugo Site CMS

![Hugofy - Hugo Site CMS](https://user-images.githubusercontent.com/55337687/120845837-ec50ee00-c5a3-11eb-9b7f-3cfcf46af3c5.png)

## Site Using Hugofy:

- [pitlords.com](https://pitlords.com)
- [thriftshop.site](https://thriftshop.site)
## Basic Requirements

- [git](https://git-scm.com/downloads)
- [nodejs & npm](https://nodejs.org/en/download/)
- [hugo](https://github.com/gohugoio/hugo/releases)
- [snowpack](https://www.snowpack.dev/tutorials/getting-started)
- [esbuild](https://esbuild.github.io/getting-started/)
- [yarn](https://yarnpkg.com/getting-started/install)

## Note On Windows Users
- majority of the command only runs on [git bash](https://git-scm.com/downloads)
### Installation

- open gitbash on windows , or terminal on linux / mac
- go to your Hugo Site Directory: `cd PROJECT_FOLDER`
- clone this Repo: `git clone https://github.com/goldcoders/hugofy cms`
- go to cms folder: `cd cms`
- install all the dependencies type command: `yarn`
- edit .env on your Hugo Site Directory 

> Go to Your Hugo Site Folder and Add this to Your .env , one folder above cms folder

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
- edit `.env` file on windows type command: `notepad .env` on other OS (linux max) use your default editor eg.: `vim .env`
## Using Hugofy CMS
- go back to Project Folder
- yarn cms
- google chrome will open  `http://localhost:1234` (HUGOFY CMS)
- update any content on inside the CMS
- open another tab on right side on `http://localhost:1313` (HUGO SITE)
- see the changes happen within milliseconds

## For Developers
- create new .env by issuing this command: `cp .env.example .env`
- download dependencies: `yarn` 
- start developing `yarn cms`
## License

[MIT](./LICENSE)
