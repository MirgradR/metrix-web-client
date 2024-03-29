import Logo from './Logo'
import '../../styles/theme.css'

export default {
  title: 'Metrix UI/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    size: {
      type: 'number',
      description: 'Размер логотипа',
      control: 'select',
      options: [16, 20, 24, 36, 52, 60],
      defaultValue: 50
    },
    withText: {
      type: 'boolean',
      description: 'С текстовым названием или без'
    },
    type: {
      type: 'string',
      options: ['main', 'blue'],
      description: 'Цветовой тип'
    }
  }
}

export const Default = {
  args: {
    withText: true,
    size: 52,
    type: 'main'
  }
}
