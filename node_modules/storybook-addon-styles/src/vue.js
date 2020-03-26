import makeDecorator from './makeDecorator'

const withStyles = makeDecorator({
  wrapper: (getStory, context, { options, parameters }) => ({
    template: `
      <div :style="style">
        <story />
      </div>
    `,
    data() {
      return {
        style: { ...options, ...parameters }
      }
    }
  })
})

if (module && module.hot && module.hot.decline) {
  module.hot.decline()
}

export { withStyles }
