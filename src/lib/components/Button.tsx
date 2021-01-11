const Button = () => {
  const buttonDefaultStyles = {
    background: 'transparent',
    color: 'white',
  }

  const buttonStyles = {
    ...buttonDefaultStyles,
  }

  return <button style={buttonStyles}>Click Me</button>
}
export default Button
