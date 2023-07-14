/* eslint-disable react/no-unknown-property */
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import testimonial_1 from '../assets/testimonial_1.jpg';
import testimonial_2 from '../assets/testimonial_2.jpg';

const Testimonials = () => {
    const handleUpButton = () => {
        document.getElementById('contact').scrollIntoView({behavior: "smooth",  inline: "nearest"})
      }
  return (
    <div id='testimonials' className='testi-container'>
        {/* <h1 style={{textAlign: 'center', fontSize: '50px', fontFamily: 'Kanit'}}>Testimonials</h1> */}
      <Carousel showIndicators={true} swipeable={true} emulateTouch={true} showThumbs={false} className='carousel'>
                <div>
                    <img src={testimonial_1} />
                    <p className="legend">Emily, 1 year</p>
                </div>
                <div>
                    <img src={testimonial_2} />
                    <p className="legend">Christina, 2 years</p>
                </div>
                {/* <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div> */}
            </Carousel>
            <svg  className='up-arrow-svg' onClick={handleUpButton} fill="#dc5265" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path> </g></svg>

    </div>
  )
}

export default Testimonials
