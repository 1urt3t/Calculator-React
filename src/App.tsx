import Calculator from "./components/Calculator"
import './App.css'
import logo from './imgs/iphone.png'
export default function App() {
  return (
    <div className="App">
      <img className='img' src={logo} alt="phone"/>
      <Calculator/>
      </div>
  )
}
