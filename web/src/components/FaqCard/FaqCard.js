import { Card, Typography } from '@mui/material'
import './faqCard.css'

const FaqCard = ({ question, answer }) => {
  return (
    <Card
      className="faq-card"
      sx={(theme) => {
        return {
          borderColor:
            theme.palette.mode === 'light'
              ? 'hsl(214.3 31.8% 91.4)'
              : 'rgba(230,230,230,0.4)',
          backdropFilter: 'blur(10px)',
        }
      }}
    >
      <Typography className="faq-question" variant="h6">
        {question}
      </Typography>
      <Typography className="faq-answer" variant="body1">
        {answer}
      </Typography>
    </Card>
  )
}

export default FaqCard
