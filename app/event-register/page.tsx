'use client'

import React from 'react'
import { registerData } from '../../data/register'
import { useForm } from 'react-hook-form'
import { Input, Select } from '../../components/register/formComponent'
import FormTimeline from '../../components/register/formTimeline'
import Formbutton from '../../components/register/formButton'
import { FormValues } from '../../types/formValues'

const formtypeArray = [
  'General',
  'Leader',
  'Member 1',
  'Member 2',
  'Member 3',
  'Files',
]
const competitionType = [
  'Oil Rig Design',
  'Fracturing Fluid Design',
  'Petrosmart',
  'Paper',
  'Business Case',
]

const EventRegistration = () => {
  const [index, setIndex] = React.useState<number>(0)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const incrementIndex = () => {
    setIndex(index + 1)
  }
  const decrementIndex = () => {
    setIndex(index - 1)
  }
  function getKeyByValue(object: any, value: any) {
    return Object.keys(object).find((key) => object[key] === value)
  }
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm<FormValues>()
  return (
    <div className="bg-[#EDEEF3] px-72 pt-36 pb-32">
      <section
        style={{
          background:
            'linear-gradient(95.81deg, rgba(255, 255, 255, 0.448) 0%, rgba(255, 255, 255, 0.259) 100%)',
        }}
        className="mx-auto flex flex-col items-center justify-center py-10 px-20"
      >
        <FormTimeline formType={formtypeArray} isActive={index} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-20"
        >
          {Object.values(registerData).map((registers: any[]) => (
            <>
              {getKeyByValue(registerData, registers) ==
              formtypeArray[index] ? (
                <div
                  className="flex flex-col space-y-10"
                  key={formtypeArray[index]}
                >
                  {registers.map((registerItem) => (
                    <>
                      {registerItem.name == 'competition_type' ? (
                        <Select
                          key={registerItem.id}
                          register={register}
                          {...registerItem}
                          options={competitionType}
                        />
                      ) : (
                        <Input
                          register={register}
                          {...registerItem}
                          errors={errors}
                          trigger={trigger}
                        />
                      )}
                    </>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </>
          ))}
          <Formbutton
            step={index}
            isLoading={isLoading}
            increamentStep={incrementIndex}
            decreamentStep={decrementIndex}
            isValid={isValid}
          />
        </form>
      </section>
    </div>
  )
}

export default EventRegistration
