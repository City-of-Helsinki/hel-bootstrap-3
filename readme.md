# City of Helsinki Bootstrap 3 Theme

City of Helsinki [Bootstrap](https://getboostrap.com) theme. **Beta**

## Contents

* Documentation - Made with [Mkdocs](http://www.mkdocs.org)
* Bootstrap sass theme - Available as npm package

## Install

Install or add Bootstrap sass theme to your application
```
npm install hel-bootstrap-3
```

## Use customised

Import the sass files in this order. Customise the theme for your application and exclude the Bootstrap components you are not using.

```
@import helsinki-variables;

@import application-variables; // Copy and edit this file to customise your app theme

@import theme-bootstrap-variables;

@import bootstrap;

@import theme-custom-styles;
```



## Files

``
_helsinki-variables.scss
``
: Helsinki UI and Brand specific variables. Do not use these directly in your app styles!

``
_application-variables.scss
``
: App specific setup. Copy and modify to customise your app's look using Helsinki brand variables or your own brand.

``
_theme-bootstrap-variables.scss
``
: Bootstrap variables with theme modifications

``
_theme-custom-styles.scss
``
: Bootstrap overrides that can not be achieved only through variables

## Bootstrap components

In your application make use of standard Bootstrap 3 components as much as possible.

More information about Bootstrap-sass [here](https://github.com/twbs/bootstrap-sass) and the use of Bootstrap components [here](http://getbootstrap.com/components/)

Compatible with [React-Bootstrap](https://react-bootstrap.github.io) components.

## Develop

* Clone this repository
* ``pip install requirements.txt``
* ``npm install``
* ``grunt dev``