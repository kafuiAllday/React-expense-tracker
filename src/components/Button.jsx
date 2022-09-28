

function Button({children,isdisabled,type,version}) {
  return (
    <button className={version} disabled={isdisabled} type={type}>
        {children}
    </button>
  )
}

export default Button
