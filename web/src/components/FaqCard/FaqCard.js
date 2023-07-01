// IMPORTING PACKAGES/MODULES
import { Card as MuiCard, Typography, styled } from '@mui/material'
import './faqCard.css'

// CUSTOM COMPONENTS
// CUSTOM CARD COMPONENT
const CustomCard = styled(MuiCard)(({ theme }) => ({
  '&.faq-card': {
    border: '1px solid',
    borderRadius: '25px',
    display: 'flex',
    flexGrow: '1',
    flexWrap: 'wrap',
    margin: '15px',
    maxWidth: 'calc(33% - 50px)',
    minWidth: '400px',
    padding: '25px',
    borderColor:
      theme.palette.mode === 'light'
        ? 'hsl(214.3 31.8% 91.4)'
        : 'rgba(230,230,230,0.4)',
    backdropFilter: 'blur(10px)',
  },
  '&.faq-card > .faq-question': {
    fontSize: '1.1em',
    fontWeight: 'bold',
  },
  '&.faq-card > .faq-answer': {
    fontSize: '0.9em',
    marginTop: '5px',
  },
}))

const FaqCard = ({ question, answer }) => {
  return (
    <CustomCard className="faq-card">
      <Typography className="faq-question" variant="h6">
        {question}
      </Typography>
      <Typography className="faq-answer" variant="body1">
        {answer}
      </Typography>
    </CustomCard>
  )
}

export default FaqCard
