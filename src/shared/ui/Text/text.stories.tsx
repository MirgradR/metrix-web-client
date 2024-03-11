import Text from './Text'

export default {
  title: 'Metrix UI/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'inline-radio',
      defaultValue: 'h1'
    },
    weight: {
      control: 'inline-radio',
      defaultValue: 'regular'
    },
    children: {
      control: 'text',
      defaultValue: 'Lorem Ipsum'
    }
  }
}

export const Default = {
  args: {
    type: 'h1',
    weight: 'regular',
    children: 'Lorem Ipsum Lorem Ipsum'
  }
}
