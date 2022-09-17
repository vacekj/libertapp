import { FC, PropsWithChildren } from 'react'
import 'twin.macro'
import dynamic from 'next/dynamic'

const Appbar = dynamic(() => import('./Appbar'), {
  ssr: false,
})

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div tw="flex grow relative h-screen overflow-hidden">
        <Appbar tw="w-[90px] h-full overflow-scroll shrink-0 grow-0" />
        <main tw="h-full overflow-scroll grow">{children}</main>
      </div>
    </>
  )
}
