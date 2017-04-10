# City of Helsinki Bootstrap Theme

This is the documentation for City of Helsinki [Bootstrap](https://getboostrap.com) theme. We are currently testing the best ways to deliver theming documentation and files.

## Contents

* Documentation - Made with [Mkdocs](http://www.mkdocs.org)
* Bootstrap sass theme - Available as npm package

## How to use

Install or add Bootstrap sass theme to your application
```
npm install hel-bootstrap-theme
```

You can now either import the complete theme with all components
```
@import hel-bootstrap-theme;
```

Or customise the theme and exclude the Bootstrap components you are not using
```
@import hel-variables;

// you can override bootstrap variables by adding your own variables file
@import app-custom-variables;

// you can copy the original _bootstrap.scss and comment out the components you will not be using
@import bootstrap-custom
```