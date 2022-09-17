import { ArrowLeftIcon, ArrowPathIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { ALL_APP_ITEMS } from '@models/AppItem.model'
import { useRouter } from 'next/router'

import 'twin.macro'
import { useRef } from 'react'

function App() {
  const router = useRouter()
  const { query } = router
  const { appId } = query
  const ref = useRef<HTMLIFrameElement | undefined>()
  const app = ALL_APP_ITEMS.find((app) => app.id === appId)
  if (!app) {
    return null
  }

  return (
    <>
      {/* Actionbar */}
      <div tw="sticky inset-0 bottom-auto bg-black py-2.5 px-2 select-none z-10!">
        <div tw="flex justify-center items-center space-x-4">
          <button
            onClick={() => {
              ref.current?.contentWindow.history.back()
            }}
            tw="opacity-50 cursor-pointer transition-all hover:opacity-100"
          >
            <ArrowLeftIcon tw="h-5 w-5" />
          </button>
          <button
            onClick={() => {
              ref.current?.contentWindow.history.back()
            }}
            tw="opacity-50 cursor-pointer transition-all hover:opacity-100"
          >
            <ArrowRightIcon tw="h-5 w-5" />
          </button>
          <div tw="bg-white/10 rounded-lg py-0.5 px-3 text-white/50 text-center w-[18rem] text-ellipsis overflow-hidden">
            {window.location.toString()}
          </div>
          <button
            onClick={() => {
              ref.current?.contentWindow.location.reload()
            }}
            tw="opacity-50 cursor-pointer transition-all hover:opacity-100"
          >
            <ArrowPathIcon tw="h-5 w-5" />{' '}
          </button>
        </div>
      </div>

      {/* DApp-Frontend in iFrame */}
      <iframe ref={ref} src={`/apps/${app.id}/index.html`} width={'100%'} height={'100%'} />
    </>
  )
}

export default App
