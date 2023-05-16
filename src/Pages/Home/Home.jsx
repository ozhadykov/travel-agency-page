import {
  Navbar,
  WelcomeComponent,
  AboutUsComponent,
  ToursCarouselComponent,
  OfferFormComponent,
  NumberCardsComponent,
  FounderCardsComponent,
  FAQsComponent,
  ContactFormComponent,
} from './HomeComponents'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <WelcomeComponent />
        {/* <AboutUsComponent /> */}
        <ToursCarouselComponent />
        <NumberCardsComponent />
        <FounderCardsComponent />
        <OfferFormComponent />
        <FAQsComponent />
        <ContactFormComponent />
      </main>
    </>
  )
}

export default Home
