import './App.css'
import { Navbar } from './components/Navbar'
import { Videosection } from './components/Videosection'
import { Aboutus } from './components/Aboutus'
import { RealizGallery } from './components/RealizGallery'
import { TraitsSection } from './components/TraitsSection'
import { EmailSection } from './components/EmailSection'
import { Contact } from './components/Contact'

function App() {
	return (
		<>
			<Navbar />
			<Videosection />
			<Aboutus />
			<RealizGallery />
			<TraitsSection />
			<EmailSection />
			<Contact />
		</>
	)
}

export default App
