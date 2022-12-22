import './App.css'

const Header = () => (
  <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
    CiberMonday II
  </div>
)

const Footer = () => (
  <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
  Solo los mejores productos
  </div>
)

function App() {
  return (
    <div className="App">
      <Header/>
        <div className="my-10">
          <p>Haciendo css con tailwind</p>
        </div>
      <Footer/>
    </div>
  )
}

export default App