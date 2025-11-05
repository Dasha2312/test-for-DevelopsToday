
import { menuItems } from './components/SidebarMenu/data'
import SidebarMenu from './components/SidebarMenu/SidebarMenu'
import Input from './UI/Input/InputBase'
import Toast from './UI/Toast/Toast'

function App() {

  return (
    <div className='container'>
      <div className='mb-4'>
        <Input typeInput='password' />
      </div>
      <div className='mb-4'>
        <SidebarMenu menuItems={menuItems} />
      </div>
      <div className='mb-4'>
        <Toast message="test message here" toastType="success" />
      </div>
    </div>
  )
}

export default App
