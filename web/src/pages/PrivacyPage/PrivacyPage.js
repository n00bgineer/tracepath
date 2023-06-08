// IMPORTING PACKAGES/MODULES
import { Box, Typography } from '@mui/material'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import { MetaTags } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

import 'src/pages/ToSPage/policyPage.css'

const PrivacyPolicy = () => {
  return (
    <>
      <MetaTags title="Privacy" description="Privacy policy page" />

      <Header />
      <Box className="policy-container">
        <Typography variant="h2" className="policy-header">
          Privacy Policy
        </Typography>
        <Typography variant="body2" className="policy-last-update">
          Last Updated On: May 20th 2023
        </Typography>

        <Box className="policy-body">
          <ReactMarkdown>
            {`This Privacy Policy describes how n00bgineer ("us", "we", or "our") collects, uses, and discloses information when you use the Tracepath application (the "Service").

## 1. Information Collection and Use
1.1 User Data:

1.1.1 We may collect certain information from users, including but not limited to:

- Personal information such as name and email address when creating a user account.

- Non-personal information such as IP addresses, device information, and usage data.

1.1.2 We use this information to provide and improve the Service, communicate with users, and analyze usage patterns.

 ### 1.2 Third-Party Services:

1.2.1 The Service may use third-party services, such as analytics providers, that may collect information about your use of the Service.

1.2.2 These third-party services have their own privacy policies and we recommend reviewing them to understand their data practices.

## 2. Data Security

2.1 We implement reasonable security measures to protect user data against unauthorized access or disclosure.

2.2 However, no method of transmission or storage is completely secure, and we cannot guarantee the absolute security of user data.

## 3. Data Retention

3.1 We retain user data for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.

3.2 Users may request the deletion of their data by contacting us at **n00bgineer@protonmail.ch**.

## 4. Disclosure of Information
4.1 We may disclose user data in the following circumstances:

- To comply with legal obligations or respond to lawful requests.

- To protect our rights, property, or safety, or the rights, property, or safety of others.

- With the user's consent.

## 5. Children's Privacy
5.1 The Service is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13 years of age. If we become aware that we have collected personal information from a child under the age of 13, we will take steps to delete the information as soon as possible.

## 6. Changes to this Privacy Policy

6.1 We may update this Privacy Policy from time to time. The most current version will be posted on our website or provided within the Service.

6.2 It is your responsibility to review this Privacy Policy periodically for any changes. Your continued use of the Service after any modifications to this Privacy Policy constitutes your acceptance of such changes.

## 7. Contact Us
If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at **n00bgineer@protonmail.ch**.
`}
          </ReactMarkdown>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default PrivacyPolicy
