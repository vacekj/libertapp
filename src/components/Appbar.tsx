import { Tooltip } from '@chakra-ui/react'
import { ALL_APP_ITEMS, AppItem } from '@models/AppItem.model'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import 'twin.macro'
import tw, { theme } from 'twin.macro'
import { Confetti } from './Confetti'

const Appbar: FC<PropsWithChildren> = ({ children, ...props }) => {
  const [showConfetti, setShowConfetti] = useState(false)
  const homeItem: AppItem = {
    id: 'home',
    name: 'Home',
    brandColor: theme('colors.primary'),
    iconPath: '/icons/home.png',
  }

  return (
    <>
      {showConfetti && <Confetti />}

      <nav tw="flex flex-col bg-black/50 text-white py-5 select-none" {...props}>
        <div tw="flex flex-col items-center space-y-3">
          <AppbarItem isHome={true} item={homeItem} href="/" />
          <div tw="w-[1.25rem] h-[.15rem] rounded-full bg-white/10 mb-3! mt-6!" />
          {ALL_APP_ITEMS.filter((item) => item.isFetched).map((item) => (
            <AppbarItem key={item.id} item={item} href={`/app/${item.id}`} />
          ))}
        </div>
        <div tw="mt-auto text-center">
          <Tooltip label="Happy Merge" closeOnClick={false}>
            <button
              onClick={() => {
                if (showConfetti) return
                setShowConfetti(true)
                setTimeout(() => {
                  setShowConfetti(false)
                }, 4000)
              }}
              tw="opacity-25 cursor-pointer transition-all hover:(opacity-100 text-primary scale-125)"
            >
              🐼
            </button>
          </Tooltip>
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
        <a tw="relative">
          <div
            css={[
              tw`flex items-center justify-center ring-[.2rem] ring-transparent border-[.2rem] border-transparent rounded-2xl shadow-lg w-[60px] h-[60px]`,
              tw`bg-white/10 transition-all cursor-pointer hover:(bg-white/20)`,
              isActive && `--tw-ring-color: ${item.brandColor};`,
              isHome && tw`bg-primary/80 hover:(bg-primary/100)`,
              isHome && isActive && tw`bg-primary/100 border-black`,
            ]}
            className="group"
          >
            <Image
              src={item.iconPath}
              width={isHome ? '30px' : '40px'}
              height={isHome ? '30px' : '40px'}
              alt={item.name}
              css={[item.id === 'tornado' && tw`group-hover:animate-spin`]}
            />
          </div>
        </a>
      </Link>
    </>
  )
}

export default Appbar
