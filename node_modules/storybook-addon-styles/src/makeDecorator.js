import { makeDecorator } from '@storybook/addons'

export default props =>
  makeDecorator({
    name: 'withStyles',
    parameterName: 'styles',
    skipIfNoParametersOrOptions: true,
    ...props
  })
