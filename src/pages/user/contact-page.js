import React from 'react'
import Spacer from '../../components/common/spacer/spacer'
import PageHeader from '../../components/user/common/page-header/page-header'
import UserTemplate from '../../templates/user-template'

const ContactPage = () => {
  return (
    <UserTemplate>
        <PageHeader title="Contact Us"/>
        <Spacer/>
    </UserTemplate>
  )
}

export default ContactPage