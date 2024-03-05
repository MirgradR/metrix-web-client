import { InputProps } from '@/shared/ui/Input/Input.model'
import './Input.styles.css'

const Input = ({
  variant = 'text',
  size = 375,
  placeholder = '',
  className = '',
  iconLeft = null,
  iconRight = null,
  ...props
}: InputProps) => {
  const inputClasses = ['input', `input-${size}`, `input-${variant}`] //todo needs improvement
  if (className) {
    inputClasses.push(className)
  }
  return (
    <div className="inputContainer">
      <div className="iconLeftWrapper">{Boolean(iconLeft) && iconLeft}</div>
      <div className="inputWrapper">
        <input type={variant} placeholder={placeholder} className={inputClasses.join(' ')} {...props} />
      </div>

      <div className="iconRightWrapper">{Boolean(iconRight) && iconRight}</div>
    </div>
  )
}

export default Input
