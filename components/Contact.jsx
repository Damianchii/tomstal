import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'

export const Contact = () => {
	return (
		<section className='object-fit relative h-[300px] overflow-hidden bg-[url(https://images.unsplash.com/photo-1508465818649-14a170138405?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1279&q=80)] bg-cover bg-center bg-no-repeat p-12 text-center'>
			<div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/70 bg-fixed text-white'>
				<div className='flex h-full flex-col items-center justify-center gap-4 lg:flex-row lg:gap-6'>
					<div className='flex flex-col items-center justify-center py-2 lg:px-6'>
						<AiOutlinePhone size={30} className=' text-blue-500' />
						<p className='font-bold lg:text-xl'>+48 696 299 775</p>
					</div>
					<div className='flex flex-col items-center justify-center py-2 lg:px-6'>
						<AiOutlineMail size={30} className=' text-blue-500' />
						<p className='font-bold lg:text-xl'>tomstalwklady@gmail.com</p>
					</div>
					<div className='flex flex-col items-center justify-center py-2 lg:px-6'>
						<MdLocationOn size={30} className=' text-blue-500' />
						<p className='font-bold lg:text-xl'>Gózd 93</p>
						<p className='font-bold lg:text-xl'>Łączna 26-140</p>
					</div>
				</div>
			</div>
		</section>
	)
}
