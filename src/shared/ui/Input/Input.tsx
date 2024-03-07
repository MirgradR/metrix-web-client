import './input.styles.css'
import { InputProps } from '@/shared/ui/Input/input.model'

const Input = ({ type = 'text', width = '375px', leftIcon = null, rightIcon = null, ...props }: InputProps) => {
  return (
    <div className="inputContainer" style={{ width }}>
      <div className="iconLeftWrapper">{Boolean(leftIcon) && leftIcon}</div>
      <div className="inputWrapper">
        <input type={type} className="input" {...props} />
      </div>
      <div className="iconRightWrapper">{Boolean(rightIcon) && rightIcon}</div>
    </div>
  )
}
export default Input
