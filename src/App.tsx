import { foo } from '@cmdcolin/minimalpackage'
import { baz } from '@cmdcolin/minimalpackage2'

function App() {
  return (
    <>
      this package, which import @cmdcolin/minimalpackage {foo()}
      from other package @cmdcolin/minimalpackage2 which uses v8: {baz()}
    </>
  )
}

export default App
