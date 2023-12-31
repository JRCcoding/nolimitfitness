/* eslint-disable react/no-unknown-property */
import { Card, CardContent } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import testimonial_blank from '../assets/silhouette.jpg';
import testimonial_1 from '../assets/testimonial_1.jpg';
import testimonial_2 from '../assets/testimonial_2.jpg';

const Testimonials = () => {
    const handleUpButton = () => {
        document.getElementById('contact').scrollIntoView({behavior: "smooth",  inline: "nearest"})
      }
  return (
    <div id='testimonials' className='testi-container'>
        {/* <h1 style={{textAlign: 'center', fontSize: '50px', fontFamily: 'Kanit'}}>Testimonials</h1> */}
      {/* <Carousel infiniteLoop={true} autoPlay={true} interval={5000} showIndicators={true} swipeable={true} emulateTouch={true} showThumbs={false} className='carousel'>
                <div>
                    <img src={testimonial_1} />
                    <p className="legend">Christina</p>
                </div>
                <div>
                    <img src={testimonial_2} />
                    <p className="legend">Emily</p>
                </div>
            </Carousel> */}
      <Card variant='outlined' className='info-card-testis'>
        <h1 className='info-card-title'>Testimonials</h1>
        <CardContent>
          <hr/>
          <div className='testi-left'>  
            <img src={testimonial_1} alt='No Limit Fitness Testimonials' className='testi-thumb'/>        
            <p className='testi-quote' style={{width: '100%'}}></p>
            <h2 className='testi-name'>Christina</h2>
          </div>
          <hr/>
          <div className='testi-right'>
            <img src={testimonial_2} alt='No Limit Fitness Testimonials' className='testi-thumb'/>
            <p className='testi-quote'>&apos;&apos;Working with Valerie has been amazing. I couldn’t even do battle rope when first starting out now I can consistently do them. I feel better, I can move better and in general I am way healthier than I have been! Her class help a lot because they are designed to push you and motivate you to work out…all you have to do is get inside her door. Truly is the best motivation.&apos;&apos;</p>
            <h2 className='testi-name'>Emily</h2>
          </div>
          <hr/>
          <div className='testi-left' >
            <img className='testi-thumb' src={testimonial_blank} alt='No Limit Fitness Midland Texas'/>
            <p className='testi-quote'>&apos;&apos;Hi, my name is Mylinda and I’m 60 years old. I have been with Valerie just over a month. I do have some limitations on what I can and can’t do. With that being said she always has an alternative way for me to accomplish the workout. I have discovered that you&apos;re never too old or out of shape to do what your heart desires. Valerie is an amazing trainer and she will gently push you to your fullest potential. I look forward to going to class!!!&apos;&apos;   </p>
            <h2 className='testi-name'>Mylinda</h2>
          </div>
        </CardContent>
      </Card>
      <svg  className='up-arrow-svg' onClick={handleUpButton} fill="#dc5265" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path> </g></svg>
      <h3 className='contact-bottom' onClick={handleUpButton} >Contact Valerie</h3>
    </div>
  )
}

export default Testimonials
