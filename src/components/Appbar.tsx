import { ALL_APP_ITEMS, AppItem } from '@models/AppItem.model'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import 'twin.macro'
import tw, { theme } from 'twin.macro'

export const Appbar: FC<PropsWithChildren> = ({ children, ...props }) => {
  const homeItem: AppItem = {
    id: 'home',
    name: 'Home',
    brandColor: theme('colors.primary'),
    iconPath: '/icons/home.png',
  }

  return (
    <>
      <nav tw="bg-black/50 text-white py-5 select-none" {...props}>
        <div tw="flex flex-col items-center space-y-3">
          <AppbarItem isHome={true} item={homeItem} href="/" />
          <div tw="w-[1.25rem] h-[.15rem] rounded-full bg-white/10" />
          {ALL_APP_ITEMS.map((item) => (
            <AppbarItem key={item.id} item={item} href={`/app/${item.id}`} />
          ))}
        </div>
      </nav>
    </>
  )
}

export interface AppbarItemProps {
  isHome?: boolean
  item: AppItem
  href: string
}
export const AppbarItem: FC<AppbarItemProps> = ({ isHome, item, href, ...props }) => {
  const router = useRouter()
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    setIsActive(router.asPath === href)
  }, [router.asPath])

  return (
    <>
      <Link href={href} passHref>
        <a
          css={[
            tw`flex items-center justify-center ring-[.15rem] ring-transparent border-[.2rem] border-black/50 rounded-2xl bg-white/10 w-[60px] h-[60px]`,
            isHome && tw`bg-primary border-black/100`,
            isActive && `--tw-ring-color: ${item.brandColor};`,
          ]}
        >
          <Image
            src={item.iconPath}
            width="40px"
            height="40px"
            alt={item.name}
            className="pixel-img"
          />
        </a>
      </Link>
    </>
  )
}
