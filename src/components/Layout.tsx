import { FC, PropsWithChildren } from 'react'
import 'twin.macro'
import { Appbar } from './Appbar'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div tw="flex grow">
        <Appbar tw="w-[90px] shrink-0 grow-0" />
        <main tw="grow p-10">{children}</main>
      </div>
    </>
  )
}
