import { HomeAppList } from '@components/HomeAppList'
import 'twin.macro'
// import { appWindow } from "@tauri-apps/api/window";
import { ALL_APP_ITEMS, AppItem } from '@models/AppItem.model'
import Image from 'next/image'
import libertappLogo from 'public/brand/libertapp-logo.svg'
import { useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'

const TagFilterButton = styled.button(({ isSelected }: any) => [
  tw`border border-white/10 text-white/50 rounded leading-none py-0.5 px-1 mx-1 my-1 tracking-wider`,
  isSelected ? tw`bg-white text-black` : tw`hover:(text-white/80 border-white/50)`,
])

function App() {
  const [allTags, setAllTags] = useState<string[]>([])
  const [tagFilter, setTagFilter] = useState<string>()
  const [appItems, setAppItems] = useState<AppItem[]>([])
  useEffect(() => {
    const newAppItems = ALL_APP_ITEMS.filter((item) => {
      return (
        !tagFilter ||
        (item.tags || []).map((tag) => tag.toLowerCase()).includes(tagFilter.toLowerCase())
      )
    })
    setAppItems(newAppItems)
  }, [tagFilter])
  useEffect(() => {
    const newAllTags = Array.from(
      new Set(ALL_APP_ITEMS.reduce((val, acc) => [...val, ...(acc.tags || [])], []))
    )
    newAllTags.sort()
    setAllTags(newAllTags)
  }, [])

  return (
    <>
      <div tw="p-10 h-screen overflow-scroll">
        {/* Logo & Title */}
        <div tw="mb-8">
          <Image src={libertappLogo} width="200px" height="33px" alt="Libertapp Logo" />
          <p tw="text-lg text-gray-500">
            Censorship-resistant DApp Frontends <span tw="text-xs">✴</span> Built at ETHBerlin³
          </p>
        </div>

        {/* Filterbar */}
        <div tw="flex flex-wrap -mx-1 mb-4">
          {[undefined, ...allTags].map((tag) => (
            <TagFilterButton
              key={`filter/${tag}`}
              isSelected={tagFilter === tag}
              onClick={() => {
                setTagFilter(tag)
              }}
            >
              {tag || 'All'}
            </TagFilterButton>
          ))}
        </div>

        {/* Apps List */}
        <HomeAppList appItems={appItems} />
      </div>
    </>
  )
}

export default App
