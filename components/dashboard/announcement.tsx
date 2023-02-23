'use client'
import React from 'react'
import Image from 'next/image'
import FileInput from './fileInput'
import { SubmitHandler, useForm } from 'react-hook-form'
import { api } from '../../utils/api'

const Announcement = ({
  events,
  status,
  submission,
}: {
  events: any[]
  status: any[]
  submission: any[]
}) => {
  interface competitionTypeInterface {
    id: string
    name: string
    amount: string
  }

  const [compId, setCompId] = React.useState('1')
  const [closed, setClosed] = React.useState<boolean>(false)
  const competitionType: competitionTypeInterface[] = [
    { id: '1', name: 'Oil Rig Design', amount: '150.000' },
    { id: '2', name: 'Paper', amount: '100.000' },
    { id: '3', name: 'Business Case', amount: '150.000' },
    { id: '4', name: 'Fracturing Fluid Design', amount: '180.000' },
    { id: '5', name: 'Case Study', amount: '100.000' },
    { id: '6', name: 'Petrosmart', amount: '150.000' },
  ]

  const onSubmit: SubmitHandler<any> = (data) => {
    const formData = new FormData()
    Object.keys(data).forEach((val) => {
      formData.append(val, data[val as keyof any])
    })
    console.log(data)
    console.log(formData)
    api
      .post('/submission/team', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(() => {
        console.log('success bro')
      })
      .catch((e: any) => {
        console.error(e)
      })
      .finally(() => {})
  }
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm<any>()
  return (
    <div className="mb-20">
      <h1 className="mb-6 text-2xl font-bold leading-[29px] text-[#1E1E2D]">
        Announcement
      </h1>
      <select
        className="!focus:border-0 mb-[18px] !border-0 !bg-transparent text-lg font-bold leading-[21.76px] text-[#131736] focus:outline-none "
        onChange={(e: any) => {
          setCompId(e.target.value)
          setClosed(false)
          console.log(compId)
        }}
      >
        {competitionType.map((comp) => (
          <option key={comp.id} value={comp.id}>
            {comp.name}
          </option>
        ))}
      </select>

      {status
        .filter((item: any) => compId === item.event_id)
        .map((stat: any) => (
          <>
            {stat.identity_team_status === 'unverifed' && (
              <section
                key={stat.event_id}
                className={`${
                  closed ? 'hidden' : 'block'
                } flex w-full items-start justify-between rounded-[30px] bg-[#FF695A] py-3.5 px-5`}
              >
                <div className="flex space-x-3">
                  <div>
                    <Image
                      src={'/images/info.png'}
                      width={32}
                      height={32}
                      alt={'info logo'}
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <p className="text-lg font-bold text-[#FBFBFC]">
                      We regret to inform you that an error has been detected in
                      your registration status
                    </p>
                    <p className="text-base font-medium text-[#EDEEF3]">
                      Please upload a new file or provide additional information
                      to help us fix the error
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setClosed(true)
                  }}
                  className=""
                  type="button"
                >
                  <Image
                    src={'/images/Close.png'}
                    width={16}
                    height={16}
                    alt={'close'}
                  />
                </button>
              </section>
            )}
          </>
        ))}

      {events
        .filter((item: any) => compId === item.event_id)
        .map((event: any) => (
          <div
            key={event.id}
            className="mt-6 flex flex-col justify-between space-x-6"
          >
            <section className="mb-5 flex w-full flex-col items-start justify-center space-y-2 rounded-[30px] bg-[#FBFBFC] px-6 lg:h-[150px]">
              <h5 className="text-base font-bold leading-[19px] text-[#605C84]">
                Announcement
              </h5>
              <p className="text-lg font-semibold text-[#1E1E2D]">
                {event.content}
              </p>
            </section>
          </div>
        ))}

      <div className="flex justify-between space-x-8">
        {submission
          .filter((item: any) => compId === item.event_id)
          .map((event: any) => (
            <form
              className="mb-5 flex w-full flex-col items-start justify-center space-y-2 rounded-[30px] bg-[#FBFBFC] px-6 py-[30px]"
              key={event.id}
              onSubmit={handleSubmit(onSubmit)}
            >
              <h5 className="text-base font-bold leading-[19px] text-[#605C84]">
                Competition Submission
              </h5>
              <p className="text-lg font-semibold text-[#1E1E2D]">
                {event.title}
              </p>
              <FileInput
                register={register}
                title={event.title}
                setValue={setValue}
                clearErrors={clearErrors}
                setError={setError}
                errors={errors}
              />
              <input
                className="hidden"
                {...register('event_id', {
                  required: true,
                })}
                value={compId}
              />
              <input
                className="hidden"
                {...register('submission_id', {
                  required: true,
                })}
                value={event.id}
              />
              <button
                className="w-[80px] rounded-[30px] bg-[#3D4BE0] py-[14.5px]  text-center text-base font-semibold text-[#FBFBFC] !transition   !duration-300 hover:!scale-105"
                type="submit"
              >
                Submit
              </button>
            </form>
          ))}
      </div>
    </div>
  )
}
export default Announcement
