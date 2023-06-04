import React from 'react'
import { traits } from '../data/traits'
import { Trait } from './Trait'

export const TraitsSection = () => {
	return (
		<section className='flex items-center justify-center bg-[#222C35] px-10 py-2'>
			<div className='grid max-w-[800px] grid-flow-col grid-rows-3 py-6  lg:max-w-[1000px] lg:grid-rows-2 lg:gap-4'>
				{traits.map((item, key) => {
					return <Trait title={item.title} description={item.description} key={key} icon={item.icon} />
				})}
			</div>
		</section>
	)
}
