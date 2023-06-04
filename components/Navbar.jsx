import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(true)

	const handleNav = () => setIsOpen(!isOpen)

	return (
		<nav className='fixed left-0 top-0 z-40 flex w-full items-center justify-between bg-black/40 px-4 py-2 text-white'>
			<h1 className='mr-6 w-[250px] font-prompt text-xl tracking-wider lg:pl-2 lg:text-3xl'>Tomstal.</h1>
			<div className='hidden grow justify-center md:flex xl:mr-[274px]'>
				<ul className='flex gap-4'>
					<li className='relative cursor-pointer px-4 py-2 after:absolute  after:bottom-[0] after:left-[50%] after:h-[1px] after:w-[0] after:bg-[#fff] after:duration-300 hover:after:left-[0] hover:after:w-[100%]'>
						Strona Główna
					</li>
					<li className='relative cursor-pointer px-4 py-2 after:absolute  after:bottom-[0] after:left-[50%] after:h-[1px] after:w-[0] after:bg-[#fff] after:duration-300 hover:after:left-[0] hover:after:w-[100%]'>
						O nas
					</li>
					<li className='relative cursor-pointer px-4 py-2 after:absolute  after:bottom-[0] after:left-[50%] after:h-[1px] after:w-[0] after:bg-[#fff] after:duration-300 hover:after:left-[0] hover:after:w-[100%]'>
						Usługi
					</li>
					<li className='relative cursor-pointer px-4 py-2 after:absolute  after:bottom-[0] after:left-[50%] after:h-[1px] after:w-[0] after:bg-[#fff] after:duration-300 hover:after:left-[0] hover:after:w-[100%]'>
						Realizacje
					</li>
					<li className='relative cursor-pointer px-4 py-2 after:absolute  after:bottom-[0] after:left-[50%] after:h-[1px] after:w-[0] after:bg-[#fff] after:duration-300 hover:after:left-[0] hover:after:w-[100%]'>
						Kontakt
					</li>
				</ul>
			</div>
			<div onClick={handleNav} className='block md:hidden'>
				{!isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			<div
				className={
					!isOpen
						? 'fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] duration-500 ease-in-out'
						: 'fixed left-[-100%]'
				}>
				<h1 className='p-6 font-prompt text-xl tracking-wider'>Tomstal.</h1>
				<ul className='flex flex-col p-4 text-sm'>
					<li className='p-4'>Strona Główna</li>
					<li className='p-4'>O nas</li>
					<li className='p-4'>Usługi</li>
					<li className='p-4'>Realizacje</li>
					<li className='p-4'> Kontakt</li>
				</ul>
			</div>
		</nav>
	)
}
