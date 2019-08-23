import React from 'react'
import { storiesOf } from '@storybook/react'

import { Grid } from '../Grid'

const Story = () => {
  return <Grid cells={50} />
}

storiesOf('Components', module).add('Header', () => <Story />)
