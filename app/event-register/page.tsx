'use client'

import React from 'react'
import { registerData } from '../../data/register'
import { useForm } from 'react-hook-form'
import {
  Input,
  Select,
  ImageInput,
} from '../../components/register/formComponent'
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

interface IFileState {
  file: File | null
  src: string
  dimension: {
    width: number
    height: number
  }
}

const EventRegistration = () => {
  const [index, setIndex] = React.useState<number>(0)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const initialFileState: IFileState = {
    file: null,
    src: '',
    dimension: { width: 0, height: 0 },
  }
  const [Img, setImg] = React.useState(initialFileState)
  const [Img2, setImg2] = React.useState(initialFileState)
  const [Img3, setImg3] = React.useState(initialFileState)
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
    setValue,
    clearErrors,
    setError,
    trigger,
    formState: { errors, isValid },
  } = useForm<FormValues>()
  return (
    <div className="bg-[#EDEEF3] px-5 pt-36 pb-32 lg:px-24   xl:px-48 2xl:px-72">
      <section
        style={{
          background:
            'linear-gradient(95.81deg, rgba(255, 255, 255, 0.448) 0%, rgba(255, 255, 255, 0.259) 100%)',
        }}
        className="flex flex-col items-center justify-center px-0 py-10 md:px-10 "
      >
        <h1 className="text-[28px] font-black text-[#07003F] md:text-5xl">
          Event Registration
        </h1>
        <FormTimeline formType={formtypeArray} isActive={index} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-9 flex w-full flex-col space-y-20 px-4 md:px-0 lg:mt-0 lg:w-[700px]"
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
                      ) : registerItem.types === 'file' ? (
                        <ImageInput
                          key={registerItem.id}
                          register={register}
                          setValue={setValue}
                          setError={setError}
                          clearErrors={clearErrors}
                          Img={
                            registerItem.name === 'transfer_receipt'
                              ? Img
                              : registerItem.name === 'ktp/passport'
                              ? Img2
                              : Img3
                          }
                          setImg={
                            registerItem.name === 'transfer_receipt'
                              ? setImg
                              : registerItem.name === 'ktp/passport'
                              ? setImg2
                              : setImg3
                          }
                          {...registerItem}
                          errors={errors}
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
