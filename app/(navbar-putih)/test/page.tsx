'use client'
import React from 'react'
import MissionContainer from '../../../components/missionContainer'
import missionitem from '../../../data/missionitem'
import Timers from '../../../components/timercontainer'
import PetrolidaAbout from '../../../components/petrolida-jumbotron'

export default function Test() {
  const [datamissions] = React.useState(missionitem)
  return (
    <>
      <PetrolidaAbout />
    </>
  )
}
