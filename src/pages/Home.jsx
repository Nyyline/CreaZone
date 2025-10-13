import { HiShoppingCart } from 'react-icons/hi'
import { MdHeadphones } from 'react-icons/md'
import { FaDiamond } from 'react-icons/fa6'
import things from '../assets/home/things.svg'
import Group29 from '../assets/home/Group 29.svg'
import creazone from '../assets/LOGO 1.svg'
import features from '../assets/home/Features.svg'

function Home() {
  return (
    <main id='background'>
      
      
      <section className="main-content">
        <div className='hero-container'>
          <div className='hero-text-section'>
            <div className='hero-text-container'>
              <div className='flex align-center justify-center flex-wrap gap-1.5'>
                <span className='baloo-text'>A </span>
                <span className='pacifico-text '> Creative </span>
                <span className='baloo-text'> Playground</span>
              </div>
              
              <div className='hero-line gap-1.5'>
                <span className='baloo-text'>for Digital </span>
                <span className='pacifico-text'> Products</span>
              </div>

              <div className='flex flex-col items-center justify-center text-white'>
               <p className='subtitle-text'>
                 Discover, buy, and sell hand-crafted assets,<br />
                 made by creators for creators
               </p>
               
               <div className='button-container'>
                 <button className='cta-button explore-btn'>
                   Explore Products
                 </button>
                 <button className='cta-button sell-btn'>
                   Start Selling
                 </button>
               </div>
             </div>
            </div>
          </div>

          <div className='product-showcase'>
             <img src={things} alt="Product Showcase" className="mobile-showcase" />
             <img src={Group29} alt="Product Showcase" className="desktop-showcase" />
          </div>
        </div>

        
      </section>

    
      <div className='yellow-line'>
        <p>| Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books </p>
      </div>

      
      

      <section className="main-content2">
        <div className="flex w-full h-250 ">
          {/* Left Column - Why CreaZone */}
          <div className="flex-1 flex items-center justify-center p-8 lg:p-16 bottom-40 ">
            <div className="why-creazone-content">
              <div className="why-title">
                <span className="why-text">Why</span>
                <img src={creazone} alt="CreaZone" className=" w-65" />
                <span className="question-mark">?</span>
              </div>
              
              <div className="why-description">
                <p>
                  At CreaZone, we believe creativity should be accessible, secure, and fun. That's why we've built a marketplace designed for students, freelancers, and hobbyists who want to discover unique digital products without breaking the bank. Whether you're buying or selling, we make sure the experience is smooth, safe, and inspiring.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-16">
            <div className="features-container">
            
              {/* BENTO GRID: sticker included */}
              <div
                className="
                  mx-auto
                  grid justify-center items-start
                  gap-x-3 gap-y-4 sm:gap-x-5 sm:gap-y-8
                  /* thinner columns */
                  sm:grid-cols-[260px_170px]
                  md:grid-cols-[270px_210px]
                  lg:grid-cols-[280px_250px]
                  sm:grid-rows-[auto_auto_auto]
                "
              >
                {/* STICKER — row 1, col 1 */}
                <div className="sm:col-start-1 sm:row-start-1 flex justify-center items-center">
                  <img src={features} alt="Features" className="w-[240px] sm:w-[260px] relative -rotate-3" />
                </div>

                {/* YELLOW — col 2, spans row 1–2 (taller) */}
                <article
                  className="
                    rounded-[28px] p-5 md:p-6
                    bg-[#FFD166] text-[#2C2C2C]
                    sm:col-start-2 sm:row-start-1 sm:row-span-2
                    flex flex-col justify-between relative
                    min-h-[320px] md:min-h-[355px]
                    top-[14px]
                  "
                >
                  <div className="text-start mx-5">
                    <h3 className="font-['Pacifico'] text-[24px] md:text-[26px] text-black mb-2">
                      Built for Everyone
                    </h3>
                    <p className="text-[13.5px] md:text-[14px] leading-tight font-semibold">
                      From students and freelancers to busy professionals, Creazone makes planning,
                      organizing, and creating easier with digital products designed to fit every lifestyle.
                    </p>
                  </div>
                  <div className="mt-6 opacity-25 self-end">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-black/10" />
                  </div>
                </article>

                {/* ORANGE — col 1, row 2 */}
                <article
                  className="
                    rounded-[28px] bg-[#FF6F3C] text-white p-5 md:p-6
                    grid place-content-between relative
                    sm:col-start-1 sm:row-start-2
                    min-h-[200px]
                    
                  "
                >
                  <div>
                    <h3 className="font-['Pacifico'] text-[24px] md:text-[26px] leading-tight">Safe &amp; Secure</h3>
                    <p className="mt-2 text-[13.5px] md:text-[14px] leading-snug opacity-95 font-semibold">
                      Smooth checkout and instant digital downloads.
                    </p>
                  </div>
                  <div className="mt-6 opacity-20 self-end">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/25" />
                  </div>
                </article>

                {/* WHITE — col 1, row 3 */}
                <article
                  className="
                    rounded-[28px] bg-white text-[#2C2C2C] p-5 md:p-6
                    grid place-content-between relative
                    sm:col-start-1 sm:row-start-3
                    min-h-[190px]
                    top-[-20px]
                  "
                >
                  <div>
                    <h3 className="font-['Pacifico'] text-[24px] md:text-[26px] text-black">Creative Variety</h3>
                    <p className="mt-2 text-[13.5px] md:text-[14px] leading-snug">
                      Planners, templates, e-books, and more — all in one place.
                    </p>
                  </div>
                  <div className="mt-6 opacity-20 self-end">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#2C2C2C]/10" />
                  </div>
                </article>

                {/* CORAL — col 2, row 3 */}
                <article
                  className="
                    rounded-[28px] bg-[#FF6F3C] text-white p-5 md:p-6
                    grid place-content-between relative
                    sm:col-start-2 sm:row-start-3
                    min-h-[150px]
                  "
                >
                  <div>
                    <h3 className="font-['Pacifico'] text-[24px] md:text-[26px] leading-tight">
                      Affordable &amp; Accessible
                    </h3>
                    <p className="mt-2 text-[13.5px] md:text-[14px] leading-snug">
                      High-quality digital products without breaking the bank.
                    </p>
                  </div>
                  <div className="mt-6 opacity-20 self-end">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/25" />
                  </div>
                </article>
              </div>



              
              {/* <div className="features-grid">
                <div className="feature-card safe-secure">
                  <div className="star-icon">✦</div>
                  <h3>Safe & Secure</h3>
                  <p>Smooth checkout and instant digital downloads.</p>
                  <div className="card-icon folder-icon">📁</div>
                </div>
                
                <div className="feature-card built-everyone">
                  <div className="star-icon">✦</div>
                  <h3>Built for Everyone</h3>
                  <p>From students and freelancers to busy professionals, Creazone makes planning, organizing, and creating easier with digital products designed to fit every lifestyle.</p>
                  <div className="card-icon people-icon">👥</div>
                </div>
                
                <div className="feature-card creative-variety">
                  <div className="star-icon">✦</div>
                  <h3>Creative Variety</h3>
                  <p>Planners, templates, e-books, and more — all in one place.</p>
                  <div className="card-icon palette-icon">🎨</div>
                </div>
                
                <div className="feature-card affordable-accessible">
                  <div className="star-icon">✦</div>
                  <h3>Affordable & Accessible</h3>
                  <p>High-quality digital products without breaking the bank.</p>
                  <div className="card-icon piggy-icon">🐷</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="main-content3">
        <div className="bg-amber-500">
          {/* <img src={mask} alt="main-content" className='' /> */}
        </div>
      </section>

      <section className="main-content4">
        <div className="bg-amber-500">
          {/* <img src={mask} alt="main-content" className='' /> */}
        </div>
      </section>
    </main>
  )
}

export default Home
