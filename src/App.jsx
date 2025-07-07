import {HeaderComponent} from "./components/Header.jsx"
import {FooterComponent} from "./components/Footer.jsx"
import BodyComponent from './components/Body.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col justify-between gap-16 px-6 py-3 lg:px-12 lg:py-8">
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  )
}

