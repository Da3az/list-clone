import {
    HomeIcon,
    LightningBoltIcon,
    BadgeCheckIcon,
    CollectionIcon,
    SearchIcon,
    UserIcon,
  
} from '@heroicons/react/outline';
import {
    MoonIcon,
    SunIcon
} from '@heroicons/react/solid';
import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {useDispatch} from 'react-redux'
import {darkMode} from '../redux/actions'


function Header() {
    const dispatch = useDispatch()
    return (
        <header className='flex flex-col md:flex-row items-center justify-between w-full px-10 my-5 '>
            <div className="flex flex-grow justify-evenly items-center max-w-2xl">
                <HeaderItem title='HOME' Icon={HomeIcon}/>
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
                <HeaderItem title='SEARCH' Icon={SearchIcon}/>
                <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
                <div className="toggle flex flex-col ml-2 justify-center items-center w-8">
                   <span className=" font-medium mb-1 flex items-center justify-center m-auto  text-yellow dark:text-gray">
                     <SunIcon  className="h-6 w-6 "></SunIcon>
                   </span>
                    <div className="relative w-4 h-10 mr-2 align-middle select-none rounded-xl m-auto bg-yellow  dark:bg-hulu ">
                        <input onClick={() => dispatch(darkMode())} type="checkbox" name="toggle" id="Blue" className="border-2 outline-none focus:outline-none bottom-6 -right-0.5  checked:-bottom-0.5 duration-200 ease-in absolute block w-5 h-5 rounded-full bg-white  border-black appearance-none cursor-pointer"/>
                        <label htmlFor="Blue" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                    <span className="text-gray-400 font-medium mt-1 flex items-center justify-center m-auto text-auto dark:text-blue">
                     <MoonIcon  className="h-6 w-6  "></MoonIcon>
                   </span>
                </div>                    
                </div>
            <Image className="object-contain" src='/images/hulu.png' width='200' height='100'/>            
        </header>
    )
}

export default Header
