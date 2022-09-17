import { CenterBody } from '@components/CenterBody'
import { ALL_APP_ITEMS } from '@models/AppItem.model'
import { useRouter } from 'next/router'
import 'twin.macro'

function App() {
  const router = useRouter()
  const { query } = router
  const { appId } = query
  const app = ALL_APP_ITEMS.find((app) => app.id === appId)

  return (
    <>
      <CenterBody>
        <div>App: {app?.name}</div>
      </CenterBody>
    </>
  )
}

export default App
