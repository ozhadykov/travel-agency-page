import {
  Navbar,
  WelcomeComponent,
  ToursCarouselComponent,
  OfferFormComponent,
  NumberCardsComponent,
  FounderCardsComponent,
  FAQsComponent,
  ContactFormComponent,
  StepsComponent,
} from './HomeComponents'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <WelcomeComponent />
        <StepsComponent />
        <ToursCarouselComponent />
        <NumberCardsComponent />
        <OfferFormComponent />
        {/* <FounderCardsComponent /> */}
        <FAQsComponent />
        <ContactFormComponent />
      </main>
    </>
  )
}

export default Home
