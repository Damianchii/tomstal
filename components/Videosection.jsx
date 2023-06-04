import React from "react"
import video from "../welder-1.mp4"

export const Videosection = () => {
	return (
		<header className='relative flex h-screen items-center justify-center overflow-hidden'>
			<div className='relative z-30 rounded-xl p-5 text-center text-white'>
				<h1 className='p-4 text-3xl lg:text-5xl'>
					Wkłady kominowe -{" "}
					<span className='text-blue-500'>Bezpieczeństwo</span> i Efektywność
					Energetyczna
				</h1>
				<p className='leading-2 max-w-[1240px] p-2 text-center text-[15px] lg:p-6 lg:text-[20px]'>
					Nasza firma, działająca w branży wkładów kominowych od ponad 20 lat,
					jest pionierem i liderem w dziedzinie systemów odprowadzania spalin i
					poprawy efektywności energetycznej budynków. Zbudowaliśmy solidną
					reputację jako firma, która dostarcza wysokiej jakości produkty i
					usługi, spełniające oczekiwania nawet najbardziej wymagających
					klientów.
				</p>
				<button className='my-4 w-[100px] rounded border-2 border-transparent bg-blue-500 p-1 text-lg lg:w-[150px] lg:p-2 lg:text-xl '>
					O nas
				</button>
			</div>
			<video
				loop
				autoplay=''
				muted
				width='100%'
				className='object-fit pointer-events-none absolute z-10 min-h-full w-auto min-w-full max-w-none select-none'>
				<source src={video} type='video/mp4' />
				Your browser does not support the video tag.
			</video>
		</header>
	)
}
