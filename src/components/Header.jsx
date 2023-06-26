import '../index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDashboard, faCircleInfo, faTerminal } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
       <header className='min-w-full bg-blue-900 h-16 flex items-center'>
        <div className='flex items-center h-16 ps-10 w-fit'>
         <h1 className='text-3xl select-none justify-center text-white font-bold'>Ziath</h1>
        </div>
        <div className='w-[21rem]'></div>
        <div className='flex justify-center items-center w-fit'>
            <ul>
                <li className='inline pe-3 text-white font-bold hover:text-blue-400'><a href='/dashboard'> <FontAwesomeIcon icon={faDashboard} /> Dashboard</a></li>
                <li className='inline pe-3 text-white font-bold hover:text-blue-400'><a href='/support'> <FontAwesomeIcon icon={faCircleInfo} /> Support</a></li>
                <li className='inline text-white font-bold hover:text-blue-400'><a href='/commands'> <FontAwesomeIcon icon={faTerminal} /> Commands</a></li>
            </ul>
        </div>
        <div className='w-[22rem]'></div>
        <div className='flex justify-center items-center w-fit'>
          <button className='bg-blue-400 rounded-full w-20 h-11'><a href='/login'>Login</a></button>
        </div>
       </header>
    </>
  )
}

export default Header
