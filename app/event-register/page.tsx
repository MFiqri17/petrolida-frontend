'use client'

import React from 'react'
import { registerData, registerData2 } from '../../data/register'
import { useForm } from 'react-hook-form'
import clsx from 'clsx'
import { Input, ImageInput } from '../../components/register/formComponent'
import FormTimeline from '../../components/register/formTimeline'
import Formbutton from '../../components/register/formButton'
import { FormValues } from '../../types/formValues'

const formtypeArray = [
  'General',
  'Leader',
  'Member 1',
  'Member 2',
  'Member 3',
  'Member 4',
  'Files',
]
const formTypeArray2 = ['General', 'Leader', 'Member 1', 'Member 2', 'Files']
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
  const initialFileState: IFileState = {
    file: null,
    src: '',
    dimension: { width: 0, height: 0 },
  }
  const [index, setIndex] = React.useState<number>(0)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const [Img, setImg] = React.useState(initialFileState)
  const [Img2, setImg2] = React.useState(initialFileState)
  const [Img3, setImg3] = React.useState(initialFileState)
  const [step, setStep] = React.useState(0)
  const [compValue, setCompValue] = React.useState<string>('Oil Rig Design')
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

  const conditionalForm = () => {
    switch (step) {
      case 0:
        return (
          <>
            <div className="mt-9 flex flex-col justify-center space-y-2">
              <label htmlFor={'compeType'} className="text-xl font-semibold">
                Competition Type
              </label>
              <select
                className={`h-[48px] w-full rounded-[30px] bg-white pl-4  font-normal text-[#605C84]
        focus:!border-2 focus:!border-[#838CEB] focus:outline-none  focus:!ring-[#838CEB] focus-visible:!border-[#838CEB] lg:h-[60px] lg:w-[700px]  `}
                id="compeType"
                name="compeType"
                onChange={(e: any) => {
                  setCompValue(e.target.value)
                }}
                value={compValue}
              >
                {competitionType.map((value) => (
                  <option className="mt-10 w-[500px]" key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <button
              className={clsx(
                'mt-20 w-full rounded-[30px] bg-[#07003F] py-4 text-center text-2xl  font-semibold text-[#FBFBFC] !transition !duration-300 hover:!scale-105 md:w-[190px]',
                !isValid && 'cursor-not-allowed',
              )}
              onClick={() => setStep(step + 1)}
              type="button"
              disabled={!isValid}
            >
              Next
            </button>
          </>
        )
      case 1:
        return (
          <>
            <FormTimeline
              formType={
                compValue === competitionType[0]
                  ? formtypeArray
                  : formTypeArray2
              }
              isActive={index}
            />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-9 flex w-full flex-col space-y-20 px-4 md:px-0 lg:mt-0 lg:w-[700px]"
            >
              {Object.values(
                compValue === competitionType[0] ? registerData : registerData2,
              ).map((registers: any[]) => (
                <>
                  {getKeyByValue(
                    compValue === competitionType[0]
                      ? registerData
                      : registerData2,
                    registers,
                  ) == formtypeArray[index] ? (
                    <div
                      className="flex flex-col space-y-10"
                      key={formtypeArray[index]}
                    >
                      {registers.map((registerItem) => (
                        <>
                          {registerItem.name == 'competition_type' ? (
                            <input
                              id={registerItem.name}
                              value={compValue}
                              {...register(registerItem.name, {
                                required: true,
                              })}
                              className="hidden"
                            />
                          ) : registerItem.types === 'file' ? (
                            <ImageInput
                              key={registerItem.id}
                              register={register}
                              setValue={setValue}
                              errors={errors}
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
                increamentStep={incrementIndex}
                decreamentStep={decrementIndex}
                isValid={isValid}
              />
            </form>
          </>
        )
    }
  }

  return (
    <div
      className={`bg-[#EDEEF3] px-5  ${
        step === 0 ? 'pb-48 pt-40' : 'pb-32 pt-36'
      }  lg:px-24   xl:px-48 2xl:px-72`}
    >
      <section
        style={{
          background:
            'linear-gradient(95.81deg, rgba(255, 255, 255, 0.448) 0%, rgba(255, 255, 255, 0.259) 100%)',
        }}
        className="flex flex-col items-center justify-center rounded-[30px] px-0 py-10 md:px-10 "
      >
        <h1 className="text-center text-[28px] font-black text-[#07003F] md:text-5xl">
          Event Registration
        </h1>
        {conditionalForm()}
      </section>
    </div>
  )
}

export default EventRegistration;