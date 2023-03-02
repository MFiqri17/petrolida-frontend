'use client'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { api } from '../../utils/api'
import FileInput from './fileInput'
import { EventInput, SubmissionInput } from './textInput'
import Spinner from '../utils/spinner'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface IFileState {
  file: File | null
  url: string
}

export default function FormField({
  id,
  title,
  compId,
  is_submitted,
  isPending,
  isRejected,
}: {
  id: number
  title: string
  compId: string
  is_submitted: boolean
  isPending: any
  isRejected: any
}) {
  const initialFileState: IFileState = {
    file: null,
    url: '',
  }
  const [submitStatus, setSubmitStatus] = React.useState<boolean>(false)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [File, setFile] = React.useState(initialFileState)
  const router = useRouter()
  const onSubmit: SubmitHandler<any> = (data) => {
    setIsLoading(true)
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
        toast.success('Your File Submission Success')
        router.refresh()
        setFile(initialFileState)
      })
      .catch((e: any) => {
        toast.error(e.response.data.message)
        console.error(e)
      })
      .finally(() => {
        setIsLoading(false)
      })
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
    <>
      {isPending === 'unverifed' || isRejected === 'rejected' ? (
        <form
          className="mb-5 flex w-full flex-col items-start justify-center space-y-2 rounded-[30px] bg-[#FBFBFC] px-6 py-[30px]"
          key={id}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h5 className="text-base font-bold leading-[19px] text-[#605C84]">
            Competition Submission
          </h5>
          <p className="text-lg font-semibold text-[#1E1E2D]">{title}</p>
          <EventInput register={register} value={compId} title={title} />
          <SubmissionInput register={register} value={id} title={title} />
          <FileInput
            register={register}
            title={title}
            setValue={setValue}
            clearErrors={clearErrors}
            setError={setError}
            errors={errors}
            name={'file'}
            submitStatus={submitStatus}
            setSubmitStatus={setSubmitStatus}
            is_submitted={is_submitted}
            File={File}
            setFile={setFile}
          />
          <button
            className={`${
              submitStatus ? 'block' : 'hidden'
            } w-[80px] rounded-[30px] bg-[#3D4BE0] py-[14.5px]  text-center text-base font-semibold text-[#FBFBFC] !transition   !duration-300 hover:!scale-105`}
            type="submit"
          >
            {isLoading ? <Spinner /> : 'Submit'}
          </button>
        </form>
      ) : null}
    </>
  )
}
