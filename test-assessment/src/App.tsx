
import { menuItems } from './components/SidebarMenu/data'
import SidebarMenu from './components/SidebarMenu/SidebarMenu'
import Input from './UI/Input/InputBase'

function App() {

  return (
    <>
      <Input typeInput='password' />
      <SidebarMenu menuItems={menuItems} />
    </>
  )
}

export default App
