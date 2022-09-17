import { ALL_APP_ITEMS } from '@models/AppItem.model'
import { useRouter } from 'next/router'
import 'twin.macro'

function App() {
  const router = useRouter()
  const { query } = router
  const { appId } = query
  const app = ALL_APP_ITEMS.find((app) => app.id === appId)
  if (!app) {
    return null
  }

  return (
    <>
      <iframe src={`/apps/${app.id}/index.html`} width={'100%'} height={'100%'} />
    </>
  )
}

export default App
