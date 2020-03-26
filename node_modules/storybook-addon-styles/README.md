<h3 align="center">
  storybook-addon-styles
</h3>

<p align="center">
  Storybook addon to add styles to preview window
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/storybook-addon-styles">
    <img src="https://img.shields.io/npm/v/storybook-addon-styles.svg?style=flat">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/github/license/trevoreyre/storybook-addon-styles.svg?style=flat">
  </a>
</p>

## Installation

```bash
npm install --save-dev storybook-addon-styles
```

or

```bash
yarn add storybook-addon-styles --dev
```

## Usage

Add the `withStyles` decorator, either in your global config file, or to a group of stories.

```js
import { configure, addDecorator } from '@storybook/react';
import { withStyles } from 'storybook-addon-styles/react'

addDecorator(withStyles)

// ...rest of your configuration
```

Then, you can add parameters to add styles to a group of stories. The addon takes a JavaScript object of camelCased style properties, which will be applied to a wrapper around the content of the preview window.

```js
import { storiesOf } from '@storybook/react'
import MyComponent from './MyComponent'

storiesOf('MyComponent')
  .addParameters({
    // Add 40px of padding around preview window
    styles: { padding: '40px' }
  })
  .add('default', () => <MyComponent />)
  .add('with props', () => <MyComponent value="Some value" />)
```

Or to individual stories:

```js
import { storiesOf } from '@storybook/react'
import MyComponent from './MyComponent'

storiesOf('MyComponent')
  // Add 40px of padding just in this story
  .add('default', () => <MyComponent />, { styles: { padding: '40px' } })
  .add('with props', () => <MyComponent value="Some value" />)
```

## Global configuration

You can also add parameters in your global config file to add styles to all stories. You can still override these styles later with parameters in individual stories if you need to.

```js
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withStyles } from 'storybook-addon-styles/react'

// Add styles as options when adding the decorator...
addDecorator(withStyles({
  fontFamily: "'Roboto', Helvetica, sans-serif"
  padding: '40px'
}))

// ...and/or with parameters
addParameters({
  styles: {
    border: '1px solid black'
  }
})

// ...rest of your configuration
```

## Framework support

`storybook-addon-styles` is currently supported in React and Vue. Feel free to add an issue if you'd like support for another framework.
