import { BsLightbulb, BsCloudy } from 'react-icons/bs'
import { BiShieldQuarter } from 'react-icons/bi'
import { FaChessKing } from 'react-icons/fa'
import { RiFilePaper2Line } from 'react-icons/ri'
import { IoIosConstruct } from 'react-icons/io'

export const traits = [
	{
		id: 1,
		icon: <BsLightbulb />,
		title: 'Doświadczenie',
		description:
			'Od ponad 20 lat dostarczamy naszym klientom wysokiej jakości produkty i usługi, spełniające najwyższe standardy branżowe.',
	},
	{
		id: 2,
		icon: <BiShieldQuarter />,
		title: 'Bezpieczeństwo',
		description:
			'Projektując, produkując i instalując wkłady kominowe, kładziemy nacisk na spełnienie najwyższych standardów bezpieczeństwa.',
	},
	{
		id: 3,
		icon: <IoIosConstruct />,
		title: 'Materiały',
		description:
			'Nasze wkłady są wykonane z materiałów najwyższej jakości, gwarantujących niezawodność, trwałość i efektywność systemu',
	},
	{
		id: 4,
		icon: <FaChessKing />,
		title: 'Profesjonalizm',
		description:
			'Dbamy o zapewnienie pełnego wsparcia klientom na każdym etapie procesu związanej z wkładami kominowymi',
	},

	{
		id: 5,
		icon: <BsCloudy />,
		title: 'Innowacyjność',
		description:
			'Stawiamy na ciągły rozwój i innowacyjność, aby dostarczać naszym klientom wkłady kominowe, które są dopasowane do współczesnych potrzeb i wymagań.',
	},
	{
		id: 6,
		icon: <RiFilePaper2Line />,
		title: 'Podejście',
		description: ' Nasze podejście opiera się na zrozumieniu i uwzględnieniu ich potrzeb, oczekiwań i priorytetów.',
	},
]
