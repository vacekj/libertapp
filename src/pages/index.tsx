import { CenterBody } from '@components/CenterBody'
import 'twin.macro'
// import { appWindow } from "@tauri-apps/api/window";

function App() {
  // const [greetMsg, setGreetMsg] = useState('')
  // const [name, setName] = useState('')
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke('greet', { name }))
  // }

  return (
    <>
      <CenterBody>
        <div>Home Page</div>
      </CenterBody>
    </>
  )
}

export default App
