import { ShieldCheckIcon } from '@heroicons/react/24/solid'
import { AppItem } from '@models/AppItem.model'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import 'twin.macro'
import tw from 'twin.macro'

export interface HomeAppListProps {
  appItems: AppItem[]
}
export const HomeAppList: FC<HomeAppListProps> = ({ appItems }) => {
  return (
    <>
      <div tw="flex flex-col space-y-5">
        {appItems.map((item) => (
          <HomeAppListItem key={item.id} item={item} href={`/app/${item.id}`} />
        ))}
      </div>
    </>
  )
}

export interface HomeAppListItemProps {
  item: AppItem
  href: string
}
export const HomeAppListItem: FC<HomeAppListItemProps> = ({ item, href, ...props }) => {
  return (
    <>
      <div
        css={[
          tw`grow flex space-x-4 items-center transition-all rounded-lg border-2 border-transparent py-4 px-4`,
          item.isFetched ? tw`bg-black/50` : tw`border-black/25`,
        ]}
      >
        <Image
          src={item.iconPath}
          width="64px"
          height="64px"
          alt={item.name}
          tw="grow-0 shrink-0 select-none"
        />
        <div tw="grow flex flex-col">
          {/* Title, Tags, and Description */}
          <div tw="flex items-center mb-1">
            <h2 tw="text-2xl leading-none mr-3">{item.name}</h2>
            <div tw="flex space-x-1">
              {(item.tags || []).map((tag) => (
                <div
                  key={`${item.name}/${tag}`}
                  tw="border border-white/10 text-white/50 rounded leading-none tracking-wide py-0.5 px-1"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          {item.description && (
            <p tw="font-sans text-sm opacity-50 max-w-prose">{item.description}</p>
          )}

          {/* Encorporated Frontend Changes */}
          <div tw="flex flex-wrap -my-1 -mx-1.5 mt-2">
            {!!item.changes?.length && (
              <>
                {item.changes.map((change) => (
                  <div key={change} tw="flex justify-center text-sm items-center my-1 mx-1.5 ">
                    <ShieldCheckIcon tw="h-4 w-4 text-primary mr-1" />
                    {change}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Action Button (Open, Download) */}
        <div>
          {item.isFetched ? (
            <Link href={`/app/${item.id}`} passHref>
              <a tw="block whitespace-nowrap text-xl bg-primary/100 text-black py-2 px-4 rounded-md transition-all shadow-lg hover:(bg-primary/75)">
                Open Frontend
              </a>
            </Link>
          ) : (
            <button
              tw="whitespace-nowrap text-xl bg-white/80 text-black py-2 px-4 rounded-md transition-all shadow-lg"
              disabled
            >
              Download
            </button>
          )}
        </div>
      </div>
    </>
  )
}
