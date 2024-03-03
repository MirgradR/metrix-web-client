import type { Meta, StoryObj } from '@storybook/react'
import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  parameters: {
    icon: 'home',
    size: '24',
    color: 'green'
  }
}

export default meta
type Story = StoryObj<typeof Icon>

export const Primary: Story = {
  args: {
    icon: 'search',
    size: '24'
  }
}
