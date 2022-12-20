'use client'
import ListFooter from './listfooter'
import footerData from '../data/footerList'
import footeritem from '../data/footeritem'
import FooterCard from './footerCard'
import React, { useState } from 'react'
const Footer1 = () => {
  const [dataFooter] = useState(footerData)
  const [dataitemFooter] = useState(footeritem)
  return (
    <div className="flex lg:flex-row flex-col items-center justify-between lg:space-y-0 space-y-10  border-none">
      <ListFooter listfooters={dataFooter} />
      <FooterCard footerItem={dataitemFooter} />
    </div>
  )
}
export default Footer1;
