import React from 'react'
import { ExpadnedCard } from './ExpadnedCard'
import { data } from '../data/headline'

export const RealizGallery = () => {
	return (
		<main className='flex flex-col items-center justify-center bg-[#1A232A] px-6 py-2 md:pb-10'>
			<h1 className='p-2 text-2xl  font-bold text-white md:p-4 md:text-4xl'>Proces Realizacji</h1>
			<div className='flex w-full max-w-[1640px] flex-col items-center justify-center py-2 font-prompt lg:flex-row lg:items-start lg:gap-6'>
				{data.map((item, key) => {
					let keyNumber = key
					return (
						<ExpadnedCard
							title={item.title}
							key={keyNumber}
							description={item.description}
							id={item.id}
							img={item.image}
						/>
					)
				})}
			</div>
		</main>
	)
}
