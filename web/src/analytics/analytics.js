//IMPORTING PACKAGES/MODULES
import mixpanel from 'mixpanel-browser'
import ReactGA from 'react-ga4'

//INITIALIZING MIXPANEL
mixpanel.init('51c49825a5fff7412132de09c22e119c', {
  debug: false,
  ignore_dnt: true,
})

//INITIALIZING GOOGLE ANALYTICS
ReactGA.initialize('G-2S364EQ2YG')
ReactGA.send('pageview')

//EVENTS OBJECT
const Events = {
  auth: {
    set: (properties) => mixpanel.people.set(properties),
    setOnce: (properties) => mixpanel.people.set_once(properties),
    reset: () => mixpanel.reset(),
    identify: (id) => mixpanel.identify(id),
  },
}

export default Events
