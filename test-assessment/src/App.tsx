
import { menuItems } from './components/SidebarMenu/data'
import SidebarMenu from './components/SidebarMenu/SidebarMenu'
import Input from './UI/Input/InputBase'
import Toast from './UI/Toast/Toast'

function App() {

  return (
    <div className='container'>
      <Input typeInput='password' />
      <SidebarMenu menuItems={menuItems} />
      <Toast message="test message here" toastType="success" />
    </div>
  )
}

export default App
