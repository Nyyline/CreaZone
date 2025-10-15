import { useState, useCallback, useMemo, memo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Shield, Users, Palette, ShoppingBag } from "lucide-react"
import things from '../assets/home/things.svg'
import Group29 from '../assets/home/Group 29.svg'
import creazone from '../assets/LOGO 1.svg'
import features from '../assets/home/Features.svg'
import products from '../assets/home/products title.svg'
import tablet from '../assets/home/tablet-mockup-with-blank-screen_410639-117 1.svg'
import slider1 from '../assets/home/tablet photos/planners.svg'
import slider2 from '../assets/home/tablet photos/Posters.svg'
import slider3 from '../assets/home/tablet photos/Others.svg'
import plannerMobile from '../assets/home/tablet photos/planner_m.svg'
import posterMobile from '../assets/home/tablet photos/poster_m.svg'
import otherMobile from '../assets/home/tablet photos/other_m.svg'



// Memoized components for better performance
const MemoizedImage = memo(({ src, alt, className, loading = "lazy" }) => (
  <img src={src} alt={alt} className={className} loading={loading} />
))

const MemoizedIcon = memo(({ Icon, className, size }) => (
  <Icon className={className} size={size} />
))

function Home() {
  // Image slider state - memoized for performance
  const sliderImages = useMemo(() => [slider1, slider2, slider3], [])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Optimized event handlers with useCallback
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    )
  }, [sliderImages.length])

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    )
  }, [sliderImages.length])

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
             <MemoizedImage src={things} alt="Product Showcase" className="mobile-showcase" loading="eager" />
             <MemoizedImage src={Group29} alt="Product Showcase" className="desktop-showcase" loading="eager" />
          </div>
        </div>

        
      </section>

    
      <div className='yellow-line'>
        <p>| Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books | Planners | Calendars | Art | Printables | Templates | E-books </p>
      </div>

      
      

      <section className="main-content2">
        <div className="flex flex-col lg:flex-row w-full h-250 px-4 sm:px-8 lg:px-16">
          {/* Left Column - Why CreaZone */}
          <div className="flex-1 flex items-center justify-center py-4 sm:py-8 lg:py-16 bottom-40 w-full">
            <div className="why-creazone-content text-center sm:text-left w-full max-w-md mx-auto">
              <div className="why-title">
                <span className="why-text">Why</span>
                <MemoizedImage src={creazone} alt="CreaZone" className="w-32 sm:w-50 lg:w-65" loading="eager" />
                <span className="question-mark">?</span>
              </div>
              
              <div className="why-description px-2 sm:px-0">
                <p className="text-sm sm:text-base">
                  At CreaZone, we believe creativity should be accessible, secure, and fun. That's why we've built a marketplace designed for students, freelancers, and hobbyists who want to discover unique digital products without breaking the bank. Whether you're buying or selling, we make sure the experience is smooth, safe, and inspiring.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="flex-1 flex flex-col items-center justify-center py-4 sm:py-8 lg:py-16 w-full">
            <div className="features-container w-full max-w-sm sm:max-w-none px-2 sm:px-0">
            
              {/* BENTO GRID: sticker included */}
              <div
                className="
                  mx-auto
                  grid justify-center items-start
                  gap-x-2 gap-y-3 sm:gap-x-5 sm:gap-y-8
                  
                  grid-cols-2
                  sm:grid-cols-[150px_240px]
                  md:grid-cols-[280px_280px]
                  lg:grid-cols-[280px_300px]
                  grid-rows-[auto_auto_auto_auto]
                  sm:grid-rows-[auto_auto_auto]
                  w-full max-w-xs sm:max-w-none
                  justify-self-center
                  px-2 sm:px-0
                "
              >
                {/* STICKER — row 1, col 1 */}
                <div className="
                  col-start-1 row-start-1
                  sm:col-start-1 sm:row-start-1
                  flex items-center justify-center
                  h-[60px] sm:h-[100px]          /* sticker tile height */
                  mt-0 sm:mt-[14px]                   /* same vertical offset as yellow */
                ">
                  <MemoizedImage
                    src={features}
                    alt="Features"
                    className="w-[220px] h-[60px] sm:w-[260px] sm:h-[100px] relative top-[0px] sm:top-[30px]"
                    loading="eager"
                  />
                </div>

                {/* YELLOW — col 2, spans row 1–2 (taller) */}
                <article
                  className="
                    rounded-[20px] sm:rounded-[28px] !p-3 sm:!p-5 md:!p-6
                    bg-[#FFD166] text-[#2C2C2C]
                    col-start-2 row-start-1 row-span-2
                    sm:col-start-2 sm:row-start-1 sm:row-span-2
                    relative 
                    min-h-[200px] sm:min-h-[430px] md:min-h-[480px] lg:min-h-[400px] 
                    top-[0px] sm:top-[14px]
                    flex flex-col items-center justify-center text-start gap-2
                    overflow-hidden
                  "
                >
                  <div className="max-w-[140px] sm:max-w-[240px] md:max-w-[260px]">
                    <h3 className="font-['Pacifico'] text-[14px] sm:text-[22px] md:text-[25px] text-black !mb-2 sm:!mb-3 ">
                      Built for Everyone
                    </h3>
                    <p className="text-[10px] sm:text-[13.5px] md:text-[14px] leading-tight font-['Poppins'] font-semibold">
                      From students and freelancers to busy professionals, Creazone makes planning,
                      organizing, and creating easier with digital products designed to fit every lifestyle.
                    </p>
                  </div>

                  {/* emblem stays bottom-right */}
                  <MemoizedIcon Icon={Users} className="absolute -right-2 -bottom-3 sm:-right-3 sm:-bottom-5 w-12 h-12 sm:w-20 sm:h-20 md:w-30 md:h-30 text-black/10 pointer-events-none" />
                </article>

                {/* ORANGE — col 1, row 2 */}
                <article
                  className="
                    rounded-[20px] sm:rounded-[28px] bg-[#FF6F3C] text-white !p-3 sm:!p-5 md:!p-6
                    relative min-h-[120px] sm:min-h-[230px]
                    col-start-1 row-start-2
                    sm:col-start-1 sm:row-start-2
                    flex flex-col items-center justify-center text-start gap-2
                    overflow-hidden
                  "
                >
                  <div className="max-w-[140px] sm:max-w-[240px] md:max-w-[260px] ">
                    <h3 className="font-['Pacifico'] text-[14px] sm:text-[22px] md:text-[25px] leading-tight !mb-1">
                      Safe &amp; Secure</h3>
                    <p className="mt-1 text-[10px] sm:text-[13.5px] md:text-[14px] leading-snug opacity-95 font-['Poppins'] font-semibold">
                      Smooth checkout and instant digital downloads.
                    </p>
                  </div>

                  <MemoizedIcon Icon={Shield} className="absolute -right-3 -bottom-2 sm:-right-5 sm:-bottom-3 w-12 h-12 sm:w-20 sm:h-20 md:w-30 md:h-30 text-white/20 pointer-events-none" />
                </article>

                {/* WHITE — col 1, row 3 */}
                <article
                  className="
                    rounded-[20px] sm:rounded-[28px] bg-white text-[#2C2C2C] !p-3 sm:!p-5 md:!p-6
                    relative min-h-[120px] sm:min-h-[190px] 
                    top-[-5px] sm:top-[-20px]
                    col-start-1 row-start-3
                    sm:col-start-1 sm:row-start-3
                    flex flex-col items-center justify-center text-start gap-2
                    overflow-hidden
                  "
                >
                  <div className="max-w-[140px] sm:max-w-[240px] md:max-w-[260px]">
                    <h3 className="font-['Pacifico'] text-[14px] sm:text-[22px] md:text-[25px] text-black !mb-1">
                      Creative Variety</h3>
                    <p className="mt-1 text-[10px] sm:text-[13.5px] md:text-[14px] leading-snug font-['Poppins'] font-semibold ">
                      Planners, templates, e-books, and more — all in one place.
                    </p>
                  </div>
                  <MemoizedIcon Icon={Palette} className="absolute -right-3 -bottom-2 sm:-right-5 sm:-bottom-3 w-12 h-12 sm:w-20 sm:h-20 md:w-30 md:h-30 text-[#2C2C2C]/10 pointer-events-none" />
                </article>

                {/* CORAL — col 2, row 3 */}
                <article
                  className="
                    rounded-[20px] sm:rounded-[28px] bg-[#FF6F3C] text-white !p-3 sm:!p-5 md:!p-6
                    relative min-h-[120px] sm:min-h-[170px]
                    col-start-2 row-start-3
                    sm:col-start-2 sm:row-start-3
                    flex flex-col items-center justify-center text-start gap-2
                    overflow-hidden
                  "
                >
                  <div className="max-w-[140px] sm:max-w-[240px] md:max-w-[260px]">
                    <h3 className="font-['Pacifico'] text-[14px] sm:text-[20px] md:text-[25px] leading-tight !mb-1">
                      Affordable &amp; Accessible
                    </h3>
                    <p className="mt-1 text-[10px] sm:text-[13.5px] md:text-[14px] leading-snug font-['Poppins'] font-semibold">
                      High-quality digital products without breaking the bank.
                    </p>
                  </div>
                  <MemoizedIcon Icon={ShoppingBag} className="absolute -right-3 -bottom-2 sm:-right-5 sm:-bottom-3 w-12 h-12 sm:w-20 sm:h-20 md:w-30 md:h-30 text-white/20 pointer-events-none" />
                </article>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-content3">
        <div className='flex justify-center items-center flex-col'>
          {/* Desktop: Products title */}
          <div className='relative w-[70rem] h-[33rem] hidden sm:block'>
            <MemoizedImage src={products} alt="main-content" className='!mt-70' loading="eager" />
          </div>

          {/* Mobile: Three product cards */}
          <div className='flex flex-col sm:hidden w-full px-4 py-4 gap-2'>
          <div className='flex justify-center items-center w-full  sm:hidden'>
            <MemoizedImage src={products} alt="main-content" className='w-350 h-auto !mt-20 ' loading="eager" />
          </div>
            
            <div className='flex flex-row gap-2 justify-center items-center max-w-sm align-center !mb-[50%] !ml-4 '>
              {/* Planners Card */}
              <div className='flex items-center justify-center'>
                <MemoizedImage src={plannerMobile} alt="Planners" className='w-full h-full object-cover' loading="lazy" />
              </div>
              
              {/* Posters Card */}
              <div className='flex items-center justify-center'>
                <MemoizedImage src={posterMobile} alt="Posters" className='w-full h-full object-cover' loading="lazy" />
              </div>
              
              {/* Others Card */}
              <div className='flex items-center justify-center'>
                <MemoizedImage src={otherMobile} alt="Others" className='w-full h-full object-cover' loading="lazy" />
              </div>
            </div>
          </div>

          {/* Desktop: Tablet slider */}
          <div className='relative tablet-container hidden sm:block'>
            {/* Tablet frame */}
            <MemoizedImage src={tablet} alt="tablet-frame" className='tablet-frame' loading="eager" />
            
            {/* Image slider inside tablet */}
            <div className='tablet-screen'>
              <MemoizedImage 
                src={sliderImages[currentImageIndex]} 
                alt={`slider-${currentImageIndex + 1}`} 
                className='slider-image'
                loading="eager"
              />
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={prevImage}
              className='slider-arrow slider-arrow-left'
              aria-label="Previous image"
            >
              <MemoizedIcon Icon={ChevronLeft} size={24} />
            </button>
            
            <button 
              onClick={nextImage}
              className='slider-arrow slider-arrow-right'
              aria-label="Next image"
            >
              <MemoizedIcon Icon={ChevronRight} size={24} />
            </button>
          </div>
        </div>
        
      </section>

      <section className="main-content4">
        <div className="flex items-center justify-center w-[100%] h-[100%] ">
          <div className="text-center !mt-[96%] !mb-[100%]  ">
            <h2 className="text-white text-3xl md:text-6xl font-bold mb-6 leading-[1] ">
              Ready to shop or<br />
              sell your creativity?
            </h2>
            <button className="bg-[#FF6F3C] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg w-75 h-18 text-3xl !mt-5 border-white border-5">
              Shop Now!
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

// Memoize the entire Home component to prevent unnecessary re-renders
export default memo(Home)
