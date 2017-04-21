# City of Helsinki Bootstrap 3 Theme

:bangbang: :bangbang: :bangbang: Under development. For setup testing purposes only :bangbang: :bangbang: :bangbang:

This is the documentation for City of Helsinki [Bootstrap](https://getboostrap.com) theme. We are currently testing the best ways to deliver theming documentation and files.

## Contents

* Documentation - Made with [Mkdocs](http://www.mkdocs.org)
* Bootstrap sass theme - Available as npm package

## Install

Install or add Bootstrap sass theme to your application
```
npm install hel-bootstrap-3
```

## Use as it is

You can now either import the complete theme with all components
```
@import hel-bootstrap-theme;
```

## Use as customised

Or customise the theme and exclude the Bootstrap components you are not using
```
@import helsinki-variables;

@import application-custom-variables; // Copy and edit this file to customise your app theme

@import bootstrap-custom-variables;

@import bootstrap;
```

## Files

``
_helsinki-variables.scss
``
: Helsinki UI and Brand specific variables. Do not use these directly in your app, map them to app specific variables instead.

``
_application-variables.scss
``
: App specific setup. Copy and modify to customise your app's look using Helsinki brand or your own brand.

``
_custom-bootstrap-variables.scss
``
: Bootstrap variables with theme modifications

## Bootstrap components

More information about Bootstrap-sass [here](https://github.com/twbs/bootstrap-sass) and the use of Bootstrap components [here](http://getbootstrap.com/components/)

## Develop

* Clone this repository
* ``pip install requirements.txt``
* ``npm install``
* ``grunt dev``