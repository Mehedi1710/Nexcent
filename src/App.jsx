import Achievement from "./components/Achievement/Achievement"
import Banner from "./components/Banner/Banner"
import Calender from "./components/Calender/Calender"
import Client from "./components/Client/Client"
import Comunity from "./components/Comunity/Comunity"
import Customer from "./components/Customers/Customer"
import Dot from "./components/Dot/Dot"
import Footer from "./components/Footer/Footer"
import Marketing from "./components/Marketing/Marketing"
import Navbar from "./components/Navbar/Navbar"
import Unlock from "./components/Unlock/Unlock"


function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Client />
      <Comunity />
      <Unlock />
      <Achievement />
      <Calender />
      <Customer />
      <Marketing />
      <Dot />
      <Footer/>
    </>
  )
}

export default App
