import Text from './Text'

export default {
  title: 'Metrix UI/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    tag: {
      control: 'inline-radio',
      defaultValue: 'h1'
    },
    fontSize: {
      control: 'inline-radio',
      defaultValue: '32'
    },
    fontWeight: {
      control: 'inline-radio',
      defaultValue: '500'
    },
    color: {
      control: 'inline-radio',
      options: ['red', 'green', 'blue'],
      defaultValue: 'red'
    },
    fontFamily: {
      control: 'inline-radio',
      defaultValue: 'var(--ff-primary)'
    },
    children: {
      control: 'text',
      defaultValue: 'Lorem Ipsum'
    }
  }
}

export const Default = {
  args: {
    tag: 'h1',
    fontSize: '64px',
    fontWeight: '500',
    color: 'red',
    fontFamily: 'var(--ff-primary)',
    children: 'Lorem Ipsum Lorem Ipsum'
  }
}
