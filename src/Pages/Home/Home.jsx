import {
  Navbar,
  WelcomeComponent,
  ToursCarouselComponent,
  OfferFormComponent,
  NumberCardsComponent,
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
        <FAQsComponent />
        <ContactFormComponent />
      </main>
    </>
  )
}

export default Home
