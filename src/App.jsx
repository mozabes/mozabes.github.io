import * as stylex from '@stylexjs/stylex'

const styles = stylex.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  greeting: {
    fontSize: '2rem',
    color: '#333',
  }
})

function App() {
  return (
    <div {...stylex.props(styles.container)}>
      <h1 {...stylex.props(styles.greeting)}>Hi, I am Mike O'Brien</h1>
    </div>
  )
}

export default App
