import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import Valerie from '../assets/valerie.jpg';
import ContactForm from './ContactForm';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 4,
  borderRadius: '5px',
  borderColor: '#da00b5',
  boxShadow: '3px 5px 5px #da00b5',
};
const Intro = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowWidth = () => {
      const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
      setIsMobile(isMobile);
    };

    // Initial check on component mount
    checkWindowWidth();

    // Add event listener to update when window is resized
    window.addEventListener('resize', checkWindowWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkWindowWidth);
    };
  }, []);

  const handleNewTab = (url) => {
    window.open(url, "_blank", "noreferrer")
  }
  return (
    <div className='info-card-container' id='info-cards'>
      {/* Todo
        Make grid look nice, bigger cards on desktop */}
      <Card variant='outlined' className='info-card'>
        <h1 className='info-card-title'>Training</h1>
        <CardContent>
          <p className='info-card-text' style={{marginBottom: '0', marginTop: '40px'}}>
            Embark on a transformative fitness journey with a dedicated personal
            trainer. Tailored training programs designed for your goals and
            abilities. From proper form to pushing limits, experience
            personalized guidance to achieve the body and fitness level you
            desire.
          </p>
        </CardContent>
      </Card>

      <Card variant='outlined' className='info-card-about' sx={{height: 'auto'}}>
        
        <h1 className='info-card-title'>About Valerie</h1>
        <div style={{borderTop: 'solid #da00b5 2px', borderBottom: 'solid #da00b5 2px' }}>
        <CardMedia
        component='img'
        alt='Valerie Turner Personal Trainer Midland Texas'
        image={Valerie}
        sx={{filter: 'grayscale(100%)', height: '320px'}}
        ></CardMedia></div>
        <CardContent>
          <p className='info-card-text'>
          Meet Valerie, on a mission to help you achieve your fitness goals. Offering personalized training programs, ongoing nutritional guidance, and a focus on flexibility and mobility. Experience transformative workouts and a supportive environment to reach your full potential.
          </p>
        </CardContent>
        <CardActions
          className='info-card-links'
          sx={{ justifyContent: 'space-around' }}
        >
          <Button onClick={handleOpen} className='info-card-link'>More Info</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  className='modal-container'
>
  <Box sx={style} className='modal'>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Valerie Turner<Button onClick={handleClose}style={{float: 'right', marginRight: '5%', color: 'pink', scale: '2'}}>X</Button>
    </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>


Since 2016, I&apos;ve been on a personal training journey, constantly challenging myself and expanding my knowledge in the field of fitness. In 2021, I made the decision to share my expertise with others and began training clients professionally. While I am not yet certified as a nutritional coach, I am actively working towards obtaining my certification to further enhance my ability to support your dietary needs.<br /><br />

In addition to personal training, I&apos;m also working towards certification in flexibility and mobility. This additional specialization will enable me to design holistic programs that enhance your overall fitness, improve range of motion, and prevent injuries. By combining effective training techniques and my evolving knowledge in nutrition, I aim to help you reach your full potential.<br /><br />

Please note that while I am currently working on obtaining certification as a nutritional coach, it&apos;s important for you to consider your specific needs and consult with a certified professional for detailed nutrition advice or dietary concerns.</Typography>
  </Box>
</Modal>
        </CardActions>
      </Card>
      <Card variant='outlined' className='info-card'>
        <h1 className='info-card-title'>Contact</h1>
        <CardContent>
          <p className='info-card-text'>
            You can contact me via phone, email, facebook or here on my website
            using the contact form!
          </p>
        </CardContent>
        <CardActions
          className='info-card-links'
          sx={{ justifyContent: 'space-around', alignItems: 'flex-start' }}
        >
          {/* <Button>
                See more...
            </Button> */}
            <Button className='info-card-link' sx={isMobile ? {textDecoration: 'none', color: 'black',marginLeft: '1.65%'} : {textDecoration: 'none', color: 'black',marginLeft: '1%'} }><PhoneIphoneIcon />{isMobile ? <a href='tel:4328895922' style={{color: 'black', textDecoration: 'none'}}>&nbsp;Phone</a> : '   (432) 889-5922' }</Button>
          {/* <Link href='/about' sx={{ textDecoration: 'none', color: 'black' }}>
            <Button className='info-card-link'>Email</Button>
          </Link> */}
            <Button className='info-card-link' sx={{ textDecoration: 'none', color: 'black' }} onClick={() => handleNewTab('https://www.facebook.com/valerie.corey.75?mibextid=LQQJ4d')}><FacebookIcon />Facebook</Button>
            <Button className='info-card-link' sx={{ textDecoration: 'none', color: 'black' }} onClick={(() => handleOpen2())}><AlternateEmailIcon />Contact Form</Button>
            <Modal
  open={open2}
  onClose={handleClose2}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  className='modal-container'
  style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}
>
  <Box sx={style} className='modal'>
    
          <ContactForm />
  </Box>
</Modal>
        </CardActions>
      </Card>
    </div>
  )
}

export default Intro
