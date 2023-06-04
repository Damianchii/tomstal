import React, { useState } from 'react'
import { useCollapse } from 'react-collapsed'
import { AiOutlineArrowDown } from 'react-icons/ai'

export const ExpadnedCard = (props) => {
	const [isExpanded, setExpanded] = useState(false)
	const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

	return (
		<>
			<div
				key={props.key}
				className={`relative my-6 flex w-[80%] max-w-[500px] flex-col items-center justify-center rounded-lg bg-zinc-600 pb-6 shadow-xl`}>
				<span className='text-md absolute left-[-15px] top-[-15px] h-[30px] w-[30px] rounded-full bg-blue-500 text-center leading-[30px] text-white lg:h-[40px] lg:w-[40px] lg:leading-10'>
					{props.id}
				</span>
				<img
					src={props.img}
					alt={props.title}
					className='md-max-h-[200px] max-h-[160px] w-full rounded-t-xl object-cover object-center'
				/>
				<h1 className=' pb-2 pt-4 text-lg font-bold text-white'>{props.title}</h1>
				<div>
					<div {...getCollapseProps()} className=' lg:text-md px-6 text-center text-sm font-thin text-white'>
						{props.description}
					</div>
				</div>
				<button
					className='absolute bottom-[-20px] flex h-[35px] w-[35px] items-center justify-center rounded-full bg-blue-500 text-center text-white'
					{...getToggleProps({
						onClick: () => setExpanded((prevExpanded) => !prevExpanded),
					})}>
					{isExpanded ? <AiOutlineArrowDown className='rotate-button' size={20} /> : <AiOutlineArrowDown size={20} />}
				</button>
			</div>
		</>
	)
}
