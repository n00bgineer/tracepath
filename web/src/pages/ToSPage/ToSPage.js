// IMPORTING PACKAGES/MODULES
import { Box, Typography } from '@mui/material'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import { MetaTags } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

import './policyPage.css'

const ToSPage = () => {
  return (
    <>
      <MetaTags title="ToS" description="ToS page" />

      <Header />
      <Box className="policy-container">
        <Typography variant="h2" className="policy-header">
          Terms of Services
        </Typography>
        <Typography variant="body2" className="policy-last-update">
          Last Updated On: May 20th 2023
        </Typography>
        <Box className="policy-body">
          <ReactMarkdown>
            {`Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Tracepath application (the "Service") operated by n00bgineer ("us", "we", or "our").

## 1. Acceptance of Terms
By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.

## 2. Description of Service
Tracepath is an open-source application that provides users with simplified reports about the performance of their applications. The Service allows users to track, analyze, and improve performance indicators of their applications through simplified metrics, visual tracerouting, and generating comprehensive reports across global locations.

## 3. Use of the Service
### 3.1 User Accounts:
3.1.1 In order to access certain features of the Service, you may be required to create a user account. You must provide accurate and complete information when creating an account.

3.1.2 You are solely responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized use of your account.

### 3.2 Acceptable Use:
3.2.1 You agree to use the Service in compliance with all applicable laws and regulations.

3.2.2 You shall not use the Service to engage in any illegal, abusive, or unauthorized activities.

### 3.3 Intellectual Property:

3.3.1 The Service and its original content, features, and functionality are and will remain the exclusive property of n00bgineer and its licensors.

3.3.2 You may not copy, modify, distribute, sell, or lease any part of the Service or its content without prior written permission from n00bgineer.

## 4. Privacy
### 4.1 Data Collection:

4.1.1 We may collect certain information from users as described in our Privacy Policy. By using the Service, you consent to the collection and use of your data in accordance with our Privacy Policy.

### 4.2 Security:

4.2.1 We strive to implement reasonable security measures to protect the confidentiality and integrity of user data. However, no method of transmission or electronic storage is completely secure, and we cannot guarantee absolute security.

## 5. Limitation of Liability
5.1 You expressly understand and agree that n00bgineer shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses resulting from the use or inability to use the Service.

## 6. Modification and Termination
6.1 We reserve the right to modify, suspend, or discontinue the Service at any time without prior notice or liability.

6.2 We may also terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.

## 7. Governing Law
7.1 These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.

## 8. Severability
8.1 If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole.

## 9. Entire Agreement
9.1 These Terms constitute the entire agreement between you and n00bgineer regarding the use of the Service and supersede any prior agreements or understandings.

## 10. Contact Us
10.1 If you have any questions about these Terms, please contact us at n00bgineer@protonmail.ch.
            `}
          </ReactMarkdown>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default ToSPage
