import React from 'react'
import { render, screen } from '@testing-library/react'
import Text from './Text'
import '@testing-library/jest-dom'

describe('Text Text Component', () => {
  it('renders correctly with default props', () => {
    render(<Text type="paragraph1">Hello World</Text>)
    const element = screen.getByText('Hello World')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('paragraph1')
  })

  it('applies correct tag based on type', () => {
    const { container } = render(<Text type="h1">Heading</Text>)
    expect(container.querySelector('h1')).toBeInTheDocument()
  })

  it('uses custom tagName if provided', () => {
    render(
      <Text tagName="div" type="paragraph1">
        Custom Tag
      </Text>
    )
    const element = screen.getByText('Custom Tag')
    expect(element.tagName).toBe('DIV')
  })

  it('applies weight class correctly', () => {
    render(
      <Text type="paragraph1" weight="bold">
        Bold Text
      </Text>
    )
    expect(screen.getByText('Bold Text')).toHaveClass('paragraph1--bold')
  })

  it('combines custom className correctly', () => {
    render(
      <Text className="custom-class" type="paragraph1">
        Custom Class
      </Text>
    )
    const element = screen.getByText('Custom Class')
    expect(element).toHaveClass('paragraph1', 'custom-class')
  })

  it('forwards additional props to the element', () => {
    render(
      <Text id="testId" type="paragraph1">
        Props Forwarding
      </Text>
    )
    expect(screen.getByText('Props Forwarding')).toHaveAttribute('id', 'testId')
  })
})
