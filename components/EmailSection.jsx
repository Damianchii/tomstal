import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

export const EmailSection = () => {
	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs.sendForm('service_jmyl3qs', 'template_fve2dtm', form.current, 'GBRNgq2uuwpYxnsK3').then(
			(result) => {
				console.log(result.text)
			},
			(error) => {
				console.log(error.text)
			}
		)
	}
	return (
		<section className='relative flex w-full justify-center bg-[#1A232A]'>
			{/* <img
				src='https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
				className='absolute left-0 top-0 max-h-[400px] w-full object-cover'
				alt='welder'
			/> */}
			<div className='flex w-full max-w-[1640px] flex-col items-center p-4'>
				<h1 className='pb-6 text-xl text-white lg:text-2xl'>Masz pytanie? Napisz..</h1>
				<form ref={form} className='flex w-[80%] flex-col items-center  text-white' onSubmit={sendEmail}>
					<div className='flex flex-col lg:flex-row'>
						<label className='lg:text-md m-2 flex items-center justify-center gap-1 rounded-md border border-blue-500 p-2 text-sm'>
							<BsFillPersonFill className='text-xl' />
							<input
								className='bg-transparent px-2 outline-none'
								type='text'
								name='user_name'
								placeholder='Jan Kowalski'
								autocomplete='off'
							/>
						</label>
						<label className='lg:text-md m-2 flex items-center justify-center gap-1 rounded-md border border-blue-500 p-2 text-sm'>
							<AiOutlineMail className='text-xl' />
							<input
								className='bg-transparent px-2 outline-none'
								type='email'
								name='user_email'
								placeholder='nazwa@mail.com'
								autocomplete='off'
							/>
						</label>
					</div>

					<div className='w-full max-w-[600px]'>
						<label for='message' class='m-2 block w-full text-left text-sm font-medium text-gray-900 dark:text-white'>
							Wiadomość
						</label>
						<textarea
							name='message'
							class='lg:text-md block h-[100px]  w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 lg:h-[150px]'
							placeholder='Napisz wiadomość...'></textarea>
					</div>

					<input
						type='submit'
						className='lg:text-md my-4 w-[80px] cursor-pointer rounded-md bg-blue-500 p-2 text-sm hover:bg-blue-700 lg:w-[100px]'
						value='Wyślij'
					/>
				</form>
			</div>
		</section>
	)
}
