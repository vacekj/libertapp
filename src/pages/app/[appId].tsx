import { ArrowLeftIcon, ArrowPathIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
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
      {/* Actionbar */}
      <div tw="sticky inset-0 bottom-auto bg-black/50 py-2.5 px-2 select-none">
        <div tw="flex justify-center items-center space-x-4">
          <button tw="opacity-50 cursor-pointer transition-all hover:opacity-100">
            <ArrowLeftIcon tw="h-5 w-5" />
          </button>
          <button tw="opacity-50 cursor-pointer transition-all hover:opacity-100">
            <ArrowRightIcon tw="h-5 w-5" />
          </button>
          <div tw="bg-white/10 rounded-lg py-0.5 px-3 text-white/50 text-center w-[18rem] text-ellipsis overflow-hidden">
            https://heroicons.com/
          </div>
          <button tw="opacity-50 cursor-pointer transition-all hover:opacity-100">
            <ArrowPathIcon tw="h-5 w-5" />{' '}
          </button>
        </div>
      </div>

      {/* DApp-Frontend in iFrame */}
      <iframe src={`/apps/${app.id}/index.html`} width={'100%'} height={'100%'} />
    </>
  )
}

export default App
