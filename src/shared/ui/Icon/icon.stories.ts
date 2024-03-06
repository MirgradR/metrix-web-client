import Icon from './Icon'
import icons from '../Icon/assets'

export default {
  title: 'Metrix UI/Icon',
  component: Icon,
  tags: ['icons', 'common'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [16, 20, 24, 36, 60]
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(icons)
    },
    color: {
      control: { type: 'select' },
      options: ['red', 'green', 'blue']
    },
    arg: {
      control: { type: 'boolean' },
      options: [false, true]
    }
  }
}

export const Default = {
  args: {
    icon: 'home',
    size: 24,
    color: 'black',
    arg: false
  }
}
