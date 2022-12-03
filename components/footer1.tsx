'use client'
import ListFooter from './listfooter'
import footerData from '../data/footerList'
import footeritem from '../data/footeritem'
import FooterCard from './footerCard'
import React, { useState } from 'react'
const footer1 = () => {
  const [dataFooter] = useState(footerData)
  const [dataitemFooter] = useState(footeritem)
  return (
    <div className="flex justify-between px-4 border-none">
      <ListFooter listfooters={dataFooter} />
      <FooterCard footerItem={dataitemFooter} />
    </div>
  )
}
export default footer1;
