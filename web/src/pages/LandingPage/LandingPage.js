// IMPORTING PACKAGES/MODULES
import { useEffect, useRef } from 'react'

import { FreeBreakfast, Paid } from '@mui/icons-material'
import { Box, Chip, Link, Typography } from '@mui/material'
import createGlobe from 'cobe'

import { Link as RedwoodLink, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import './landingPage.css'
import Button from 'src/components/Button/Button'
import FaqCard from 'src/components/FaqCard/FaqCard'
import FeaturesCard from 'src/components/FeaturesCard/FeaturesCard'
import PriceCard from 'src/components/PriceCard/PriceCard'

const LandingPage = () => {
  const canvasRef = useRef()

  useEffect(() => {
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
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
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
        <Box component="header">
          <Box
            component="nav"
            className="secondary-links"
            sx={(theme) => {
              return {
                '&>a': {
                  color:
                    theme.palette.mode === 'light'
                      ? 'common.black'
                      : 'common.white',
                },
              }
            }}
          >
            <Link
              component="a"
              href="https://twitter.com/n00bgineer"
              target="_blank"
            >
              Updates
            </Link>
          </Box>
          <Box className="brand-info-container">
            <img
              src="https://res.cloudinary.com/dgu9rv3om/image/upload/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
              alt="Tracepath logo"
              className="logo"
            />
            <Typography variant="body1" className="brand-name">
              Tracepath
            </Typography>
          </Box>
          <Box
            component="nav"
            className="primary-links"
            sx={(theme) => {
              return {
                '&>a': {
                  color:
                    theme.palette.mode === 'light'
                      ? 'common.black'
                      : 'common.white',
                },
              }
            }}
          >
            <Link component={RedwoodLink} href="#">
              Signup
            </Link>
          </Box>
        </Box>
        <Box id="hero" component="section">
          <Box className="hero-content-container">
            <Typography variant="h1" className="hero-headline">
              Application Monitoring Simplified
            </Typography>
            <Typography variant="body1" className="hero-subheadline">
              Tracepath generates simplified performance reports for your web
              apps from multiple locations across the world
            </Typography>
            <Box className="hero-cta-container">
              <Button
                variant="contained"
                component={RedwoodLink}
                size="large"
                to={routes.signup()}
                className="primary-grad"
              >
                Generate your app&rsquo;s report
              </Button>
            </Box>
          </Box>
          {/* <img src="https://example.com/hero.png" alt="Tracepath Hero " /> */}
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
              application efficiency for a seamless user experience.
            </Typography>
          </Box>
          <Box className="features-card-container">
            <FeaturesCard
              title="Simplified Metrics"
              content="Tracepath simplifies metrics for effortless optimization and makes it accessible to even non-technical stakeholders. Track, analyze, and improve performance indicators with ease."
              image="https://res.cloudinary.com/dgu9rv3om/image/upload/v1684180433/tracepath/assets/Fractal_Cube_4_0001_uwjnom.png"
              link={routes.signup()}
            />
            <FeaturesCard
              title="Visual Tracerouting"
              content="You can visualize the routing path of your network packets along with it's geographic location, allowing you to identify any potential bottlenecks or performance issues along the way."
              image="https://res.cloudinary.com/dgu9rv3om/image/upload/v1684179759/tracepath/assets/Atom_Bucky_1__R_tjxtpa.png"
              link={routes.signup()}
            />
            <FeaturesCard
              title="Multiple Servers"
              content="Tracepath allows you to generate comprehensive reports across global locations, from Tokyo to New York. Gain valuable insights into application behavior from different geographical regions. "
              image="https://res.cloudinary.com/dgu9rv3om/image/upload/v1684181735/tracepath/assets/Torus_Stack_Taper_R_hnkmsm.png"
              link={routes.signup()}
            />
            <FeaturesCard
              title="Competitor Analysis"
              content="Tracepath's competitor analysis feature, allows you to comparing your product's performance metrics against industry rivals. Gain valuable insights & surpass the competition."
              image="https://res.cloudinary.com/dgu9rv3om/image/upload/v1684180239/tracepath/assets/Block_Matrix_x3_0003_cvgebh.png"
              tags={['🚧 In Progress']}
            />
            <FeaturesCard
              title="Project-level tracking"
              content="Tracepath tracks performance metrics across multiple applications. Gain comprehensive insights into the performance of each app and optimize their performance."
              image="https://res.cloudinary.com/dgu9rv3om/image/upload/v1684181079/tracepath/assets/Platonic_3_-_Icosa0003_g4lqsk.png"
              tags={['🚧 In Progress']}
            />
            <FeaturesCard
              title="TraceScore&trade;"
              content="Tracepath evaluates and benchmarks your app's performance against multiple locations and uses multiple metrics like latency, response times, etc to create your app's TraceScore&trade;."
              image="https://res.cloudinary.com/dgu9rv3om/image/upload/v1684181893/tracepath/assets/Cylinder_Short_Stack_x5_0003_y4w3f7.png"
              tags={['🚧 In Progress']}
            />
          </Box>
        </Box>
        <Box id="pricing" component="section">
          <Box className="section-title-container">
            <Typography variant="h2" className="section-title">
              Pricing
            </Typography>
            <Typography variant="body1" className="section-subtitle">
              A no-nonsense guide to Tracepath&rsquo;s pricing. Only free mode
              is available for now.
            </Typography>
          </Box>
          <Box className="pricing-cards-container">
            <PriceCard
              selected={true}
              title="Free mode"
              content="Only a limited number of reports can be generated and a limited set of features are accessible."
              price="Free"
              features={[
                '- Deep dives for all metrics',
                '- Visual Tracerouting for reports',
                '- Only 3 reports/mo',
                '- Manual execution',
                '- Access to a limited number of servers',
                <Typography key="TraceScore" variant="body1">
                  - TraceScore&trade; isn&rsquo;t available{' '}
                  <Chip color="default" label="🚧 In Progress" />
                </Typography>,
                <Typography key="CompAnal" variant="body1">
                  - No Competitor Analysis{' '}
                  <Chip color="default" label="🚧 In Progress" />
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
                '- Deep dives for all metrics',
                '- Visual Tracerouting for reports',
                '- Upto 50 reports/mo',
                '- Schedule weekly reports',
                '- Access to all the servers',
                <Typography key="TraceScore" variant="TraceScore">
                  - TraceScore&trade; is available{' '}
                  <Chip color="default" label="🚧 In Progress" />
                </Typography>,
                <Typography key="CompAnal" variant="body1">
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
          <Box className="faq-cards-container">
            <FaqCard
              question="What is Tracepath?"
              answer="Tracepath is an application monitoring system that provides visual tracerouting and simplified performance metrics to help optimize application performance."
            />
            <FaqCard
              question="How does Tracepath help improve application performance?"
              answer="Tracepath enables users to track and analyze performance metrics, identify bottlenecks, and optimize their applications for seamless user experiences."
            />
            <FaqCard
              question="Can Tracepath monitor applications from multiple locations?"
              answer="Yes, Tracepath generates performance reports from multiple locations across the globe, offering insights into how an application performs in different geographical regions."
            />
            <FaqCard
              question="Is Tracepath suitable for non-technical users?"
              answer="Absolutely! Tracepath offers a user-friendly interface and simplified metrics, making it accessible and easy to use for both technical and non-technical users."
            />
            <FaqCard
              question="Can I compare my application's performance against competitors using Tracepath?"
              answer="It's WIP, but Tracepath provides a competitor analysis feature that allows you to compare your application's performance metrics against industry rivals, giving you insights to outperform the competition."
            />
            <FaqCard
              question="Can Tracepath monitor both web-based and mobile applications?"
              answer="Unfortunately, it only works for web applications for now."
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
                Tracepath. Start your monitoring journey today on our platform.
              </Typography>
              <Box className="hero-cta-container">
                <Button
                  variant="contained"
                  component={RedwoodLink}
                  size="large"
                  className="primary-grad"
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
        <Box
          component="footer"
          sx={(theme) => {
            return {
              background: `linear-gradient(to top, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main}, ${theme.palette.secondary.main})`,
            }
          }}
        >
          <Box className="brand-info-container">
            <Box className="brand-logo-container">
              <img
                src="https://res.cloudinary.com/dgu9rv3om/image/upload/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
                alt="Tracepath logo"
                className="logo"
              />
              <Typography variant="body1" className="brand-name">
                Tracepath
              </Typography>
            </Box>
            <Typography variant="body1">
              Application Monitoring Simplified
            </Typography>
          </Box>
          <Typography variant="body1" className="footer-copyright">
            Copyright &copy; n00bgineer 2023
          </Typography>
        </Box>
      </>
    </>
  )
}

export default LandingPage
