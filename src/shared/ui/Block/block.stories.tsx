import Block from './Block'

import '../../styles/theme.css'

export default {
  title: 'Metrix UI/Block',
  component: Block,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export const Default = {
  args: {
    children: 'Content'
  }
}
