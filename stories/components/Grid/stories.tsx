import React from 'react'
import { storiesOf } from '@storybook/react'

import { CreateTable } from '../Grid'

const Story = () => {
  return <CreateTable cellCount={50} />
}

storiesOf('Components', module).add('Grid', () => <Story />)
