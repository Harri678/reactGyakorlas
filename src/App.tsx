import Header from "./components/header"
import Introduction from "./components/introduction"
import Lists from "./components/lists"
import Tablazat from "./components/tablazat"
import Kartyak from "./components/kartyak"
import Tudnivalok from "./components/fontosTudnivalok"
import Footer from "./components/lablec"

function App() {

  return (
    <>
      <div className="container">
        <Header></Header>
        <Introduction></Introduction>
        <Lists></Lists>
        <Tablazat></Tablazat>
        <Kartyak></Kartyak>
        <Tudnivalok></Tudnivalok>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App

