import makeDecorator from './makeDecorator'

const withStyles = makeDecorator({
  wrapper: (getStory, context, { options, parameters }) => {
    const root = document.createElement('div')
    Object.assign(root.style, options, parameters)

    const story = getStory(context)
    if (typeof story === 'string') {
      root.innerHTML = story
    } else if (story instanceof Node) {
      root.appendChild(story)
    }

    return root
  }
})

if (module && module.hot && module.hot.decline) {
  module.hot.decline()
}

export { withStyles }
