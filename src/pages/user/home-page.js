import React from 'react'
import Spacer from '../../components/common/spacer/spacer'
import BestOffers from '../../components/user/about/best-offers/best-offers'
import Team from '../../components/user/about/team/team'
import Slider from '../../components/user/home/slider/slider'
import UserTemplate from '../../templates/user-template'

const HomePage = () => {
  return (
    <UserTemplate>
      <Slider/>
      <Spacer/>
      <BestOffers/>
      <Spacer/>
      <Team/>
      <Spacer/>
    </UserTemplate>
  )
}

export default HomePage