import { Button, Card, CardActions, CardContent, Link } from "@mui/material"

const Intro = () => {
  return (
    <div className='info-card-container' id='info-cards'>
    {/* Todo
        Make grid look nice, bigger cards on desktop */}
            <Card variant='outlined' className='info-card'>
        <h1 className="info-card-title">Training</h1>
        <CardContent>
          <p className='info-card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </CardContent>
        <CardActions sx={{justifyContent: 'space-around'}}>
            {/* <Button>
                See more...
            </Button> */}
            <Button className='info-card-link'>
                Contact
            </Button>
            <Link href='/about' sx={{textDecoration: 'none', color: 'black'}}>
                <Button className='info-card-link'>
                    About VALERIE
                </Button>
            </Link>
            
        </CardActions>
      </Card>
            <Card variant='outlined' className='info-card'>
        <h1 className="info-card-title">Nutrition</h1>
        <CardContent>
          <p className='info-card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </CardContent>
        <CardActions sx={{justifyContent: 'space-around'}}>
            {/* <Button>
                See more...
            </Button> */}
            <Button className='info-card-link'>
                Contact
            </Button>
            <Link href='/about' sx={{textDecoration: 'none', color: 'black'}}>
                <Button className='info-card-link'>
                    About VALERIE
                </Button>
            </Link>
            
        </CardActions>
      </Card>
            <Card variant='outlined' className='info-card'>
        <h1 className="info-card-title">About Valerie</h1>
        <CardContent>
          <p className='info-card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </CardContent>
        <CardActions sx={{justifyContent: 'space-around'}}>
            {/* <Button>
                See more...
            </Button> */}
            <Button className='info-card-link'>
                Contact
            </Button>
            <Link href='/about' sx={{textDecoration: 'none', color: 'black'}}>
                <Button className='info-card-link'>
                    About VALERIE
                </Button>
            </Link>
            
        </CardActions>
      </Card>
            <Card variant='outlined' className='info-card'>
        <h1 className="info-card-title">Contact</h1>
        <CardContent>
          <p className='info-card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </CardContent>
        <CardActions sx={{justifyContent: 'space-around'}}>
            {/* <Button>
                See more...
            </Button> */}
            <Button className='info-card-link'>
                Contact
            </Button>
            <Link href='/about' sx={{textDecoration: 'none', color: 'black'}}>
                <Button className='info-card-link'>
                    About VALERIE
                </Button>
            </Link>
            
        </CardActions>
      </Card>
    </div>
  )
}

export default Intro
