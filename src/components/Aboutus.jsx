import React, { useState } from "react"

export const Aboutus = () => {
	const [toggleState, setToggleState] = useState(1)

	const toggleMenu = index => {
		setToggleState(index)
	}
	return (
		<section className='flex flex-col items-center justify-center bg-zinc-800 p-6 pb-10'>
			<h1 className=' p-2 text-2xl  font-bold text-white md:p-4 md:text-5xl'>
				O nas
			</h1>
			<div className='mt-4 flex max-w-[1640px] flex-col md:mt-6 md:flex-row'>
				{/*LEft menu*/}
				<div className='w-full  md:w-[30%] '>
					<ul className='flex h-full justify-center gap-6  md:flex-col md:items-start md:gap-0'>
						<li
							className={
								toggleState === 1
									? "active-li text-md cursor-pointer py-2 text-white  md:text-xl"
									: "text-md cursor-pointer py-2 text-white md:text-xl"
							}
							onClick={() => toggleMenu(1)}>
							Doświadczenie
						</li>
						<li
							className={
								toggleState === 2
									? "active-li text-md cursor-pointer py-2 text-white  md:text-xl"
									: "text-md cursor-pointer py-2 text-white md:text-xl"
							}
							onClick={() => toggleMenu(2)}>
							Realizacja
						</li>
						<li
							className={
								toggleState === 3
									? "active-li text-md cursor-pointer py-2 text-white  md:text-xl"
									: "text-md cursor-pointer py-2 text-white md:text-xl"
							}
							onClick={() => toggleMenu(3)}>
							Gwarancja
						</li>
						<li
							className={
								toggleState === 4
									? "active-li text-md cursor-pointer py-2 text-white  md:text-xl"
									: "text-md cursor-pointer py-2 text-white md:text-xl"
							}
							onClick={() => toggleMenu(4)}>
							Materiały
						</li>
					</ul>
				</div>
				{/*Result Right Bar*/}
				<div
					className={
						toggleState === 1
							? "flex w-[100%] flex-col items-start p-4 text-white md:w-[70%]"
							: "hidden"
					}>
					<h1 className='border-under-h1 py-1 font-prompt text-2xl font-bold tracking-wide md:text-3xl'>
						Doświadczenie.
					</h1>
					<div className='text-md px-4 py-4 md:px-6 md:text-xl'>
						<p>
							Jesteśmy doświadczoną firmą zajmującą się wkładami kominowymi od
							ponad 20 lat. Nasza pasja i długoletnie doświadczenie sprawiają,
							że jesteśmy liderem w branży. Z dumą dostarczamy wysokiej jakości
							wkłady kominowe, które zapewniają bezpieczeństwo i efektywność
							energetyczną Twojego budynku.
						</p>

						<p className='py-2 md:py-4'>
							Nasze doświadczenie pozwala nam doskonale zrozumieć potrzeby i
							oczekiwania naszych klientów. Dlatego nasze wkłady kominowe są
							dostosowane do indywidualnych wymagań budynku, zapewniając nie
							tylko bezpieczne odprowadzanie spalin, ale również optymalną
							wydajność i oszczędność energii.
						</p>
						<p className='py-2 md:py-4'>
							Współpracujemy z klientami z różnych sektorów, w tym z
							właścicielami domów, firmami budowlanymi i architektami. Nasza
							renoma opiera się na zaufaniu, jakości i profesjonalizmie, które
							stawiamy na pierwszym miejscu w każdym projekcie.
						</p>
					</div>
				</div>
				<div
					className={
						toggleState === 2
							? "flex w-[100%] flex-col items-start p-4 text-white md:w-[70%]"
							: "hidden"
					}>
					<h1 className='border-under-h1 py-1 font-prompt text-2xl font-bold tracking-wide md:text-3xl'>
						Realizacja.
					</h1>
					<div className='text-md px-4 py-4 md:px-6 md:text-xl'>
						<p>
							Nasza firma ma bogate doświadczenie w realizacji projektów
							związanych z wkładami kominowymi. Dzięki naszemu profesjonalnemu
							podejściu i wysokiej jakości produktom, zapewniamy skuteczne i
							bezproblemowe wdrożenie systemów odprowadzania spalin i poprawy
							efektywności energetycznej budynków.
						</p>

						<p className='py-2 md:py-4'>
							Po etapie projektowania, przechodzimy do produkcji wkładów
							kominowych. Nasze produkty są wykonane z wysokiej jakości
							materiałów, które spełniają najwyższe standardy bezpieczeństwa i
							wydajności. Nasza zaawansowana technologia produkcji gwarantuje
							trwałość i niezawodność naszych wkładów.
						</p>
						<p className='py-2 md:py-4'>
							Następnie przystępujemy do etapu montażu. Nasz zespół
							doświadczonych techników wykonuje profesjonalny montaż, z
							dbałością o najwyższe standardy i przepisy branżowe. Zapewniamy,
							że nasze wkłady kominowe są dokładnie dopasowane i odpowiednio
							zainstalowane, aby zapewnić bezpieczne i efektywne odprowadzanie
							spalin.
						</p>
					</div>
				</div>
				<div
					className={
						toggleState === 3
							? "flex w-[100%] flex-col items-start p-4 text-white md:w-[70%]"
							: "hidden"
					}>
					<h1 className='border-under-h1 py-1 font-prompt text-2xl font-bold tracking-wide md:text-3xl'>
						Gwarancja.
					</h1>
					<div className='text-md px-4 py-4 md:px-6 md:text-xl'>
						<p>
							Jako firma specjalizująca się w wkładach kominowych, oferujemy
							naszym klientom solidną gwarancję na nasze produkty i usługi.
							Zdajemy sobie sprawę, jak istotne jest zapewnienie niezawodności,
							bezpieczeństwa i długotrwałej wydajności systemów odprowadzania
							spalin.
						</p>

						<p className='py-2 md:py-4'>
							Nasza gwarancja obejmuje zarówno materiały, z których wykonane są
							nasze wkłady kominowe, jak i profesjonalny montaż oraz usługi
							serwisowe. Dążymy do zapewnienia pełnej satysfakcji naszych
							klientów, dlatego gwarantujemy, że nasze produkty są wolne od wad
							fabrycznych i będą działać zgodnie z oczekiwaniami.
						</p>
						<p className='py-2 md:py-4'>
							W przypadku jakichkolwiek problemów, nasz zespół techników jest
							gotowy do udzielenia wsparcia. Oferujemy szybką reakcję na
							zgłoszenia i podejmujemy działania naprawcze, jeśli zajdzie taka
							potrzeba. Naszym celem jest zapewnienie pełnego zadowolenia
							klienta i rozwiązanie ewentualnych problemów w sposób skuteczny i
							rzetelny.
						</p>
					</div>
				</div>
				<div
					className={
						toggleState === 4
							? "flex w-[100%] flex-col items-start p-4 text-white md:w-[70%]"
							: "hidden"
					}>
					<h1 className='border-under-h1 py-1 font-prompt text-2xl font-bold tracking-wide md:text-3xl'>
						Materiały.
					</h1>
					<div className='text-md px-4 py-4 md:px-6 md:text-xl'>
						<p>
							Nasza firma składa dużą wagę na jakość materiałów używanych do
							produkcji wkładów kominowych. Dążymy do zapewnienia naszym
							klientom produktów, które są trwałe, niezawodne i spełniają
							najwyższe standardy bezpieczeństwa.
						</p>

						<p className='py-2 md:py-4'>
							Stal nierdzewna: Stal nierdzewna jest jednym z najczęściej
							stosowanych materiałów w produkcji wkładów kominowych. Jest
							odporna na korozję, wytrzymała i dobrze radzi sobie z wysokimi
							temperaturami. Zapewnia długotrwałą wydajność i bezpieczne
							odprowadzanie spalin.
						</p>
						<p className='py-2 md:py-4'>
							Nasze wkłady kominowe są starannie wykonane z wysokiej jakości
							materiałów, które zostały poddane rygorystycznym testom i
							spełniają wszystkie odpowiednie normy i przepisy branżowe.
							Stawiamy na trwałość, niezawodność i bezpieczeństwo naszych
							produktów, aby zapewnić naszym klientom najlepsze rozwiązania w
							dziedzinie odprowadzania spalin i efektywności energetycznej.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
