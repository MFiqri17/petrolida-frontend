'use client'
import ListFooter from './listfooter'
import footerData from '../../../data/footerList'
import footeritem from '../../../data/footeritem'
import FooterCard from './footerCard'
import React, { useState } from 'react'
const Footer1 = () => {
  const [dataFooter] = useState(footerData)
  const [dataitemFooter] = useState(footeritem)
  return (
    <div className="flex flex-col items-center justify-between space-y-10 border-none lg:flex-row  lg:space-y-0">
      <ListFooter listfooters={dataFooter} />
      <FooterCard footerItem={dataitemFooter} />
    </div>
  )
}
export default Footer1
