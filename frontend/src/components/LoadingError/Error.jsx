const Message = ({ variant, children }) => {
  return <div className={`alert ${variant}`}>{children}</div>
}
{
  /* default */
}
Message.defaultProps = {
  variant: 'alert-info',
}
export default Message
