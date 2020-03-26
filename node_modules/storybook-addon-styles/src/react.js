import React from 'react'
import makeDecorator from './makeDecorator'

const withStyles = makeDecorator({
  wrapper: (getStory, context, { options, parameters }) => (
    <div style={{ ...options, ...parameters }}>{getStory(context)}</div>
  )
})

if (module && module.hot && module.hot.decline) {
  module.hot.decline()
}

export { withStyles }
