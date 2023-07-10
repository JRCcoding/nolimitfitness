/* eslint-disable react/no-unknown-property */
const Hero = () => {
  const handleDownButton = () => {
    document.getElementById('info-cards').scrollIntoView({behavior: "smooth",  inline: "nearest"})
  }
  return (
    <div className='hero'>
      <h1 className='hero-title'>No Limit Fitness</h1>
      <h3 className='hero-subtitle'>-Valerie Turner</h3>
      <svg onClick={handleDownButton} className='down-arrow-svg' fill="#da00b5" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" stroke="#ff00d4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>
    </div>
  )
}

export default Hero
