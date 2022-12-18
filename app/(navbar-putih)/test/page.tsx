'use client'
import React from 'react'
import MissionContainer from '../../../components/missionContainer'
import missionitem from '../../../data/missionitem'
import Timers from '../../../components/timercontainer'

export default function Test() {
  const [datamissions] = React.useState(missionitem)
  return (
    <>
      <MissionContainer missions={datamissions} />
      <Timers />
    </>
  )
}
