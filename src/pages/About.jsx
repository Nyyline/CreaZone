import '../styles/About.css'
import about from '../assets/about/AboutUs-text.svg'

function About() {
  return (
    <main className="background">
      <section className= "about-section">
        <img src={about} alt="about" />
        <h1 className="font-[baloo] text-white text-center text-3xl w-[70%] !mt-10" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
          At Creazone, we believe creativity should be fun, accessible, and inspiring. 
          Our platform is built for dreamers, doers, and creators who want to bring 
          ideas to life through planners, templates, e-books, and more.
          </h1>
      </section>

      <div className='yellow-line-about'>
        <p>Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative | Shop Digital. Sell Creative |</p>
      </div>

    </main>
  )
}

export default About
