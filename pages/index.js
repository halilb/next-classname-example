export default () => {
  const isServer = typeof window === 'undefined'
  const color = isServer ? 'red' : 'blue'

  return (
  <div>
    <p className={color}>color: {color}</p>
    <style jsx>{`
        .red {
          color: red;
        }
        .blue {
          color: blue;
        }
      `}</style>
  </div>
)
}
