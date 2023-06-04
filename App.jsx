import './App.css'
import { Navbar } from './components/Navbar'
import { Videosection } from './components/Videosection'
import { Aboutus } from './components/Aboutus'
import { RealizGallery } from './components/RealizGallery'
import { TraitsSection } from './components/TraitsSection'

function App() {
	return (
		<>
			<Navbar />
			<Videosection />
			<Aboutus />
			<RealizGallery />
			<TraitsSection />
		</>
	)
}

export default App
