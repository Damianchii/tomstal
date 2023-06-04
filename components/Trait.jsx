import React from 'react'

export const Trait = (props) => {
	return (
		<div className='flex flex-col items-center justify-start px-2 py-2'>
			<span className='text-2xl text-blue-500 lg:text-4xl'>{props.icon}</span>
			<h2 className='py-2 text-center font-bold text-white'>{props.title}</h2>
			<p className='text-center text-sm text-white'>{props.description}</p>
		</div>
	)
}
