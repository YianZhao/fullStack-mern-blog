import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import {  Link,useLocation } from 'react-router-dom'
import{AiOutlineSearch} from'react-icons/ai'
import{FaMoon} from'react-icons/fa'
import {useSelector} from 'react-redux'

export default function Header() {

    const path = useLocation().pathname
    const {currentUser} = useSelector((state)=>state.user)
    console.log("test")
    console.log(currentUser.username)
    console.log(currentUser.email)
    console.log(currentUser.profilePicture)
    
  return (
    <Navbar className='border-b-2'>
        {/* logo */}
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-cyan-600 rounded-lg text-white'>Alex's</span>
            Blog
        </Link>

        {/* 表单用来输入框  */}
        <form> 
            <TextInput
                type='text'
                placeholder='Search..'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            />
        </form>

        {/* 搜索icon用来代替缩小后输入框 */}
        <Button className='w-12 h-10 lg:hidden' color='gray'>
            <AiOutlineSearch/>
        </Button>

        
        <div className='flex gap-2 md:order-2'>
            {/* 切换黑白的图标 */}
            <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                <FaMoon/>
            </Button>
            {currentUser?(
                <Dropdown 
                arrowIcon = {false}
                inline
                label = {
                    // <Avatar 
                    // alt='user'
                    // image = {currentUser.profilePicture}
                    // rounded
                    // />


                    <div>
                    <img 
                    className='rounded-full h-3 w-3 '
                        src={currentUser.profilePicture}
                        alt="user" 
                        style={{ width: '40px', height: '40px' }}
                    />
                </div>
                }>
                    <Dropdown.Header>
                        <span className='block text-sm '>@{currentUser.username}</span>
                        <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
                    </Dropdown.Header>
                    <Link to={'/dashboard?tab=profile'}>
                        <Dropdown.Item>Profile</Dropdown.Item>
                    </Link>
                    <Dropdown.Divider/>
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
            ):(
                            // {/* Signin按钮 */}
            <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
                Sign In
            </Button>
        </Link>
            )}

        </div>
        {/* 菜单 用navbar.taggle就可以实现*/}
        <Navbar.Toggle/>
        <Navbar.Collapse>
            <Navbar.Link active={path==='/'} as={'div'}>
                <Link to='/'>Home</Link>
            </Navbar.Link>

            <Navbar.Link active={path==='/about'} as={'div'}>
                <Link to='/about'>About</Link>
            </Navbar.Link>

            <Navbar.Link active={path==='/projects'} as={'div'}>
                <Link to='/projects'>Projects</Link>
            </Navbar.Link>
        </Navbar.Collapse>
        
    </Navbar>
  )
}
