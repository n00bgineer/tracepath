// IMPORTING PACKAGES/MODULES
import { useEffect, useRef } from 'react'

import { FreeBreakfast, Https, Paid } from '@mui/icons-material'
import {
  Box,
  Card as MuiCard,
  Chip,
  Typography,
  useMediaQuery,
  styled,
} from '@mui/material'
import createGlobe from 'cobe'
import { useRecoilState } from 'recoil'

import { Link as RedwoodLink, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import './landingPage.css'
import Button from 'src/components/Button/Button'
import FaqCard from 'src/components/FaqCard/FaqCard'
import FeaturesCard from 'src/components/FeaturesCard/FeaturesCard'
import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import PriceCard from 'src/components/PriceCard/PriceCard'
import { darkModeAtom } from 'src/contexts/atoms'

// CUSTOM COMPONENTS
const AddressBar = styled(MuiCard)(({ theme }) => ({
  '&.MuiCard-root': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
    borderRadius: '15px',
    padding: '3px',
    bgColor: theme.palette.mode === 'light' ? 'background.card' : '#000',
    border: `1px solid ${theme.palette.divider}`,
  },
  '& .address-bar-icon': {
    marginRight: '5px',
  },
}))

const LandingPage = () => {
  // SETTING REFERENCES
  const canvasRef = useRef()

  // GETTING ATOMIC STATES
  const [isDarkMode] = useRecoilState(darkModeAtom)

  // SETTING MEDIA QUERY
  const isMobileViewport = useMediaQuery('(min-width:700px)')

  // SETTING SIDE EFFECTS
  useEffect(() => {
    // SETTING GLOBE OBJECT
    let phi = 0
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.01
      },
    })

    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <>
      <MetaTags
        title="Home"
        description="Track your application's performance effortlessly with Tracepath"
      />
      <>
        <Header />
        <Box id="hero" component="section">
          <Box className="hero-content-container">
            <Typography variant="h1" className="hero-headline">
              Application Monitoring Simplified
            </Typography>
            <Typography variant="body1" className="hero-subheadline">
              Tracepath generates simplified performance & security reports for
              your web apps from multiple locations across the world
            </Typography>
            <Box className="hero-cta-container">
              <Button
                variant="contained"
                component={RedwoodLink}
                size="large"
                to={routes.signup()}
              >
                {isMobileViewport
                  ? "Generate your app's report"
                  : 'Generate report'}
              </Button>
            </Box>
          </Box>
          <Box
            className="hero-img-container"
            sx={(theme) => {
              return {
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: `0 0 5px ${theme.palette.divider}`,
                bgcolor:
                  theme.palette.mode === 'light'
                    ? 'grey.100'
                    : 'background.default',
              }
            }}
          >
            <AddressBar elevation={0}>
              <Https
                fontSize="xs"
                className="address-bar-icon"
                color="success"
              />
              <Typography variant="body2">tracepath.in</Typography>
            </AddressBar>
            <img
              src={
                isDarkMode
                  ? 'https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1685827597/demo-dark_t2rsk2.png'
                  : 'https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1685827581/demo-light_dvuhln.png'
              }
              alt="Tracepath Desktop Hero"
              className="hero-desktop-img"
              loading="lazy"
            />
            <img
              src={
                isDarkMode
                  ? 'https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1685900422/demo-dark-mobile_nczznz.png'
                  : 'https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1685900398/demo-light-mobile_rzbpok.png'
              }
              alt="Tracepath Mobile Hero"
              className="hero-mobile-img"
              loading="lazy"
            />
          </Box>
        </Box>
        <Box id="features" component="section">
          <Box className="section-title-container">
            <Typography variant="h2" className="section-title">
              Enhance your app&rsquo;s performance with Tracepath
            </Typography>
            <Typography variant="body1" className="section-subtitle">
              Discover a user-friendly solution that empowers you to
              effortlessly monitor and optimize your applications. Gain
              actionable insights, track performance metrics, and enhance
              application security for a seamless user experience
            </Typography>
          </Box>
          <Box className="features-card-container card-container">
            <FeaturesCard
              title="Simplified Metrics"
              content="Tracepath shows performance reports with simplifies metrics & deep dives for effortless optimization and makes it accessible to even non-technical stakeholders to analyze and improve performance indicators with ease."
              image="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1684180433/tracepath/assets/Fractal_Cube_4_0001_uwjnom.png"
              link={routes.signup()}
            />
            <FeaturesCard
              title="Security Tracerouting"
              content="Tracepath visualizes the routing path of your network packets along with it's geographic location & does IP threat intelligence to look for malicious IP addresses from hops"
              image="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1684179759/tracepath/assets/Atom_Bucky_1__R_tjxtpa.png"
              link={routes.signup()}
            />
            <FeaturesCard
              title="Authenticated Routes"
              content="Tracepath currently offers report generations on non-authenticated routes, but the authenticated routes feature will allow to generate performance reports even on pages which requires authentication for access"
              image="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1684181735/tracepath/assets/Torus_Stack_Taper_R_hnkmsm.png"
              tags={['🚧 In Progress']}
            />
            <FeaturesCard
              title="Competitor Analysis"
              content="Tracepath's competitor analysis feature, allows you to compare your product's performance metrics against industry rivals. Gain valuable insights & surpass the competition"
              image="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1684180239/tracepath/assets/Block_Matrix_x3_0003_cvgebh.png"
              tags={['🚧 In Progress']}
            />
            <FeaturesCard
              title="Project-level tracking"
              content="Tracepath tracks performance metrics across multiple applications. Gain comprehensive insights into the performance of each app and optimize their performance"
              image="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1684181079/tracepath/assets/Platonic_3_-_Icosa0003_g4lqsk.png"
              tags={['🚧 In Progress']}
            />
            <FeaturesCard
              title="TraceScore"
              content="Tracepath evaluates and benchmarks your app's performance against multiple locations and uses multiple metrics like latency, response times, etc to create your app's TraceScore"
              image="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1684181893/tracepath/assets/Cylinder_Short_Stack_x5_0003_y4w3f7.png"
              tags={['🚧 In Progress']}
            />
          </Box>
        </Box>
        <Box id="pricing" component="section">
          <Box className="section-title-container">
            <Typography variant="h2" className="section-title">
              Pricing
            </Typography>
            <Typography
              variant="body1"
              component="div"
              className="section-subtitle"
            >
              A no-nonsense guide to Tracepath&rsquo;s pricing. Only{' '}
              <span className="default-pricing-mode">free mode</span> is
              available for now
            </Typography>
          </Box>
          <Box className="pricing-card-container card-container">
            <PriceCard
              selected={true}
              title="Free mode"
              content="Only a limited number of reports can be generated and a limited set of features are accessible"
              price="Free"
              features={[
                // '- Deep dives for all metrics',
                '- Security tracerouting for reports',
                '- Only 5 reports/mo',
                '- Manual execution',
                '- Access to all the servers',
                <Typography component="div" key="TraceScore" variant="body1">
                  - TraceScore isn&rsquo;t available{' '}
                  <Chip
                    component="div"
                    color="default"
                    label="🚧 In Progress"
                  />
                </Typography>,
                <Typography component="div" key="CompAnal" variant="body1">
                  - No Competitor Analysis{' '}
                  <Chip
                    component="div"
                    color="default"
                    label="🚧 In Progress"
                  />
                </Typography>,
              ]}
              link={routes.signup()}
              linkStartIcon={<FreeBreakfast />}
            />
            <PriceCard
              title="Pro mode"
              content="Generate upto 50 reports per month, schedule it's execution and access all the features."
              price="$15/mo"
              features={[
                // '- Deep dives for all metrics',
                '- Security tracerouting for reports',
                '- Upto 50 reports/mo',
                '- Schedule weekly reports',
                '- Access to all the servers',
                <Typography key="TraceScorePro" variant="TraceScore">
                  - TraceScore is available{' '}
                  <Chip color="default" label="🚧 In Progress" />
                </Typography>,
                <Typography key="CompAnalPro" variant="body1">
                  - Competitor Analysis is available{' '}
                  <Chip color="default" label="🚧 In Progress" />
                </Typography>,
              ]}
              link={routes.signup()}
              linkDisabled={true}
              linkStartIcon={<Paid />}
            />
          </Box>
        </Box>
        <Box id="faq" component="section">
          <Box className="section-title-container">
            <Typography variant="h2" className="section-title">
              Frequently asked questions
            </Typography>
          </Box>
          <Box className="faq-card-container card-container">
            <FaqCard
              question="What is Tracepath?"
              answer="Tracepath is an application performance and security monitoring system that generates reports with security tracerouting and simplified performance metrics to help optimize application performance"
            />
            <FaqCard
              question="How does Tracepath help improve application performance?"
              answer="Tracepath enables users to track and analyze performance metrics, identify bottlenecks, and optimize their applications for seamless user experiences"
            />
            <FaqCard
              question="Can Tracepath monitor applications from multiple locations?"
              answer="Yes, Tracepath generates performance reports from multiple locations across the globe, offering insights into how an application performs in different geographical locations"
            />
            <FaqCard
              question="Is Tracepath's reports suitable to be used by non-technical stackeholders?"
              answer="Absolutely! Tracepath offers a user-friendly interface and simplified metrics, making it accessible and easy to use for both technical and non-technical users"
            />
            <FaqCard
              question="Can I compare my application's performance against competitors using Tracepath?"
              answer="It's WIP, but Tracepath provides a competitor analysis feature that allows you to compare your application's performance metrics against industry rivals, giving you insights to outperform the competition"
            />
            <FaqCard
              question="Can Tracepath generate performance reports fpr native mobile applications (e.g. React Native, etc)?"
              answer="Unfortunately, the performance analysis only works for web applications for which a URL has been provided. Currently, we don't even accept IP addresses as an input"
            />
          </Box>
        </Box>
        <Box id="cta" component="section">
          <Box className="cta-content-container">
            <Box className="section-title-container">
              <Typography variant="h2" className="section-title">
                Optimise your applications with ease
              </Typography>
              <Typography variant="body1" className="section-subtitle">
                Take the first step in optimizing your applications with
                Tracepath. Start your monitoring journey today on our platform
              </Typography>
              <Box className="hero-cta-container">
                <Button
                  variant="contained"
                  component={RedwoodLink}
                  size="large"
                  to={routes.signup()}
                >
                  Get Started
                </Button>
              </Box>
            </Box>
          </Box>
          <Box className="cta-canvas-container">
            <canvas
              ref={canvasRef}
              style={{
                width: 600,
                height: 600,
                maxWidth: '100%',
              }}
              className="cta-canvas"
            />
          </Box>
        </Box>
        <Footer />
      </>
    </>
  )
}

export default LandingPage
