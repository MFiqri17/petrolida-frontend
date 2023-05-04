'use client'
import { ErrorMessage } from '@hookform/error-message'
import clsx from 'clsx'
import React from 'react'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import { Input, ImageInput } from '../../components/register/formComponent'
import Spinner from '../../components/utils/spinner'
import Image from 'next/image'
import { api } from '../../utils/api'
import toast, { Toaster } from 'react-hot-toast'
import SuccessModal from '../../components/register/successModal'

interface IFileState {
  file: File | null
  src: string
  dimension: {
    width: number
    height: number
  }
}

const TicketRegistration = () => {
  const initialFileState: IFileState = {
    file: null,
    src: '',
    dimension: { width: 0, height: 0 },
  }
  const [isClosed, setIsClosed] = React.useState<boolean>(false)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [Img, setImg] = React.useState(initialFileState)
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const {
    register,
    handleSubmit,
    control,
    trigger,
    setError,
    setValue,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<any>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'members',
  })

  const onSubmit: SubmitHandler<any> = (data: any) => {
    const formData = new FormData()
    Object.keys(data).forEach((val) => {
      let index = 0
      if (val === 'members') {
        data.members.forEach((member: any) => {
          Object.keys(member).forEach((memb) => {
            formData.append(`members[${index}][${memb}]`, member[memb])
          })
          index++
        })
      } else {
        formData.append(val, data[val as keyof any])
      }
      console.log(data)
    })

    api
      .post('/events/ticket', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(() => {
        setIsOpen(true)
      })
      .catch((e: any) => {
        toast.error(e.response.data.message)
        console.error(e)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div
      className={
        !isClosed
          ? 'bg-[#EDEEF3] px-5 pb-32 pt-36 lg:px-24 xl:px-48 2xl:px-72'
          : 'h-screen items-center justify-center bg-[#EDEEF3]'
      }
    >
      {isClosed ? (
        <h1 className="pt-64 text-center text-[28px] font-black text-[#07003F] md:text-5xl">
          Event Registration is closed
        </h1>
      ) : (
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
          <>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-9 flex w-full flex-col space-y-5 px-4 md:px-0 lg:mt-16 lg:w-[700px]"
            >
              <input
                id={'name'}
                value={"members[0][name]"}
                {...register('name', {
                  required: true,
                })}
                className="hidden"
              />

              <input
                id={'event_id'}
                value={7}
                {...register('event_id', {
                  required: true,
                })}
                className="hidden"
              />

              <input
                id={'ticket_type'}
                value={'Presale 1'}
                {...register('ticket_type', {
                  required: true,
                })}
                className="hidden"
              />

              <input
                id={'amount'}
                value={'30000000'}
                {...register('amount', {
                  required: true,
                })}
                className="hidden"
              />

              <div className="flex flex-col space-y-10">
                <Input
                  label="Name"
                  name="members[0][name]"
                  placeholder="Enter your full name"
                  register={register}
                  trigger={trigger}
                  pattern=""
                  errors={errors}
                  ErrorMessage={ErrorMessage}
                  types={'text'}
                />

                <Input
                  label="NIK"
                  name={`members[0][nik]`}
                  placeholder="Enter member NIK"
                  register={register}
                  trigger={trigger}
                  pattern=""
                  errors={errors}
                  ErrorMessage={ErrorMessage}
                  types={'text'}
                />

                <Input
                  label="Email"
                  name="email"
                  placeholder="Enter your email"
                  register={register}
                  trigger={trigger}
                  pattern={/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i}
                  errors={errors}
                  ErrorMessage={ErrorMessage}
                  types={'email'}
                />

                <Input
                  label="WhatsApp Number"
                  name="phone"
                  placeholder="Enter your phone number"
                  register={register}
                  trigger={trigger}
                  pattern=""
                  errors={errors}
                  ErrorMessage={ErrorMessage}
                  types={'text'}
                />

                <ImageInput
                  label="Upload Payment Receipt"
                  name="payment_proof"
                  register={register}
                  errors={errors}
                  setValue={setValue}
                  clearErrors={clearErrors}
                  setError={setError}
                  types={'file'}
                  Img={Img}
                  setImg={setImg}
                  Source={''}
                  path={''}
                  ErrorMessage={ErrorMessage}
                />
              </div>

              {fields.map((field, index) => (
                <div key={field.id}>
                  {index > 0 && index <= 3 && (
                    <div className="flex flex-col space-y-10 border-t-2 border-[#C3C2D1] py-20">
                      <section className="flex justify-between">
                        <h2 className="text-xl font-semibold text-[#605C84]">
                          Member {index + 1}
                        </h2>
                        <button
                          className="!transition !duration-300 hover:!scale-110"
                          onClick={() => remove(index)}
                          type="button"
                        >
                          <Image
                            src="/icon/close black.png"
                            width={36}
                            height={36}
                            alt="close"
                          />
                        </button>
                      </section>
                      <Input
                        label="Name"
                        name={`members[${index}][name]`}
                        placeholder="Enter member name"
                        register={register}
                        trigger={trigger}
                        pattern=""
                        errors={errors}
                        ErrorMessage={ErrorMessage}
                        types={'email'}
                      />
                      <Input
                        label="NIK"
                        name={`members[${index}][nik]`}
                        placeholder="Enter member NIK"
                        register={register}
                        trigger={trigger}
                        pattern=""
                        errors={errors}
                        ErrorMessage={ErrorMessage}
                        types={'email'}
                      />
                    </div>
                  )}
                </div>
              ))}

              <button
                className={`text-xl ${
                  fields.length > 3 ? 'hidden' : 'block'
                } font-semibold text-[#605C84] underline underline-offset-4 !transition !duration-300 hover:!scale-110`}
                type="button"
                onClick={() => append({})}
              >
                Add other members
              </button>

              <div className="flex justify-center">
                <button
                  className={clsx(
                    'mt-20 w-full rounded-[30px] bg-[#07003F] py-4 text-center  text-2xl font-semibold text-[#FBFBFC] !transition !duration-300 hover:!scale-105 md:w-[190px]',
                  )}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? <Spinner /> : 'Submit'}
                </button>
              </div>
            </form>
          </>
        </section>
      )}
      <SuccessModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default TicketRegistration
