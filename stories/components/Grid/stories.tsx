import React from 'react'
import { storiesOf } from '@storybook/react'

import { Grid } from '../Grid'

const Story = () => {
  return <Grid cellCount={10} />
}

storiesOf('Components', module).add('Grid', () => <Story />)
