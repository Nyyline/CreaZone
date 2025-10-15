import '../styles/About.css'
import about from '../assets/about/AboutUs-text.svg'
import creazone from '../assets/LOGO 1.svg'

import { Rocket } from 'lucide-react';
import { Lightbulb } from 'lucide-react';

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

      <section className='section2-and-section3'>
        <section className='w-full h-[50%] flex flex-row'>
          <div className=' w-[50%] h-[100%] flex flex-col items-center justify-center !mt-10 !ml-30 '>
          <div className='flex flex-col items-end !mr-15 justify-center'>
            <div className='flex !mr-16 !mb-5'>
                <h2 className='bento-title-inline '>Who is<img src={creazone} alt="creazone" className='w-[250px] h-[100px] !mt-3 '/>?</h2>
                </div>

                <div className='bento-main-card w-[75%] '>
                  <div className='bento-content'>
                    <p className='font-[poppins] text-[23px] font-semibold mb-4'>Creazone is more than just a digital shop - it's a community built for creators, dreamers, and doers. We provide digital planners, templates, e-books, and creative tools designed to make life easier, more organized, and more inspiring.</p>
                      
                    <p className='font-[poppins] text-[23px] font-semibold mb-4'>Our name comes from 'Create' + 'Zone' - a space where imagination and productivity come together. Whether you're a student, entrepreneur, or hobbyist, Creazone is here to help you design your own path, your own way.</p>
                    <p className='font-[poppins] text-2l font-semibold'>✨ Shop Digital. Sell Creative.</p>
                  </div>
                </div>
          </div>
             
          </div>

          <div className=' w-[50%] h-[100%] flex flex-col items-start justify-center !mt-10 gap-7'>
            <div className='bg-[#FF6F3C] border-5 border-white w-[65%] h-[38%] rounded-3xl !p-10 relative overflow-hidden'>
              <h2 className='bento-card-title'>Our Mission</h2>
              <p className='bento-card-text font-semibold w-[75%]'>To provide a safe, vibrant space where creativity thrives and digital products become accessible to everyone.</p>
              <Rocket className='absolute bottom-2 right-2 w-80 h-80 text-white opacity-30 left-65 top-10' />
            </div>

            <div className='bg-[#1ABC9C] border-5 border-white w-[65%] h-[38%] rounded-3xl !p-10 relative overflow-hidden'>
              <h2 className='bento-card-title'>Our Vision</h2>
              <p className='bento-card-text font-semibold w-[75%]'>To become the go-to hub for planners, templates, e-books, and creative resources worldwide.</p>
              <Lightbulb className='absolute bottom-2 right-2 w-80 h-80 text-white opacity-30 left-75 top-8 rotate-18' />
            </div>
              
            </div>

            
        </section>

          <section className=' w-full h-[50%] flex items-center justify-center'>
           <div className='flex flex-col items-center text-center justify-center h-full !mt-30'>
             <h2 className='font-[pacifico] text-7xl text-white !mb-5 text-shadow-lg/20'>Our Promise</h2>
             <p className='font-[poppins] text-2xl text-white font-regular w-[70%] text-shadow-lg/20'>"At Creazone, we promise to empower both creators and customers. For freelancers and sellers, we provide a trusted platform to share and sell digital products with ease. For buyers, we ensure every product is accessible, affordable, and designed to spark creativity. Together, we're building a marketplace where ideas turn into opportunities.</p>
           </div>
          </section>



      </section>

    </main>
  )
}

export default About
