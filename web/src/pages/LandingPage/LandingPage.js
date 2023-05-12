import { Box, Button, Typography } from '@mui/material'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LandingPage = () => {
  return (
    <>
      <MetaTags title="Landing" description="Landing page" />
      <Box>
        <Box component="header">
          <Typography variant="h1">Tracepath</Typography>
          <Box component="nav">
            <Link href="#">Home</Link>
            <Link href="#">Features</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Testimonials</Link>
            <Link href="#">Contact</Link>
          </Box>
          <Button
            variant="outlined"
            size="medium"
            onClick={() => console.log('Get Started')}
          >
            Get Started
          </Button>
        </Box>
        <Box id="hero" component="section">
          <img src="https://example.com/hero.png" alt="Tracepath Hero Image" />
          <Typography variant="h2">
            Visual Tracerouting and Application Monitoring
          </Typography>
          <Typography variant="body1">
            Tracepath is a visual tracerouting and application monitoring system
            that helps you understand the performance of your network and
            applications.
          </Typography>
          <Button onClick={() => console.log('Learn More')}>Learn More</Button>
        </Box>
        <Box id="features" component="section">
          <Typography variant="h2">Features</Typography>
          <ul>
            <li>Visual tracerouting</li>
            <li>Application monitoring</li>
            <li>Affordable pricing</li>
            <li>Historical data tracking</li>
            <li>More features coming soon!</li>
          </ul>
        </Box>
        <Box id="pricing" component="section">
          <Typography variant="h2">Pricing</Typography>
          <ul>
            <li>Free plan: Basic features</li>
            <li>Pro plan: More features, higher limits</li>
          </ul>
          <Typography variant="body1">
            The free plan is available now. The pro plan will be available soon.
          </Typography>
        </Box>
        <Box id="call-to-action" component="section">
          <Typography variant="h2">Call to Action</Typography>
          <Typography variant="body1">
            Sign up for a free trial of Tracepath today and see for yourself how
            it can help you improve the performance of your network and
            applications.
          </Typography>
          <Button onClick={() => console.log('Sign Up')}>Sign Up</Button>
        </Box>
        <Box component="footer">
          <Typography variant="body1">
            Copyright &copy; 2023 Tracepath
          </Typography>
          <ul>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </Box>
      </Box>
    </>
  )
}

export default LandingPage
