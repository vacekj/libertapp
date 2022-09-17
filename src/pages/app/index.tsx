import Link from 'next/link'
import 'twin.macro'

function App() {
  return (
    <div tw="flex justify-center items-center">
      <Link href="/">
        <a tw="underline cursor-pointer my-10">Go back</a>
      </Link>

      <h1>i am iframe degen!</h1>

      <iframe
        title="The best social network"
        src="//lenster.xyz/"
        width="500px"
        height="500px"
        id="lenster"
        sandbox="asd"
      ></iframe>
    </div>
  )
}

export default App
