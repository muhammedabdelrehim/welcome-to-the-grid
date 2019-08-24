import React from 'react'
import { storiesOf } from '@storybook/react'

import { CreateTable } from '../Grid'

const Story = () => {
  return <CreateTable cellCount={10} />
}

storiesOf('Components', module).add('Grid', () => <Story />)
