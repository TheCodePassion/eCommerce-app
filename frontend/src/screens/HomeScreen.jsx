import Header from './../components/Header'
import ShopSection from './../components/homeComponents/ShopSection'
import ContactInfo from './../components/homeComponents/ContactInfo'
import CalltoActionSection from './../components/homeComponents/CalltoActionSection'
import Footer from './../components/Footer'
function HomeScreen() {
  return (
    <div>
      <Header />
      <ShopSection />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  )
}
export default HomeScreen
