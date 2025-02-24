import { foo } from '@cmdcolin/minimalpackage'
import { baz } from '@cmdcolin/minimalpackage2'

function App() {
  return (
    <>
      <div>
        this app imports @cmdcolin/minimalpackage@v11, here is it's output:{' '}
        {foo()}
      </div>
      <div>
        this app also imports @cmdcolin/minimalpackage2, which in turn uses
        @cmdcolin/minimalpackage@v10, here is it's output: {baz()}
      </div>
      <div>
        <a href="https://github.com/cmdcolin/useminimalpackage">Github</a>
      </div>
    </>
  )
}

export default App
