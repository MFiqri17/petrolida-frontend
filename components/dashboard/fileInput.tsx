'use client'
import React from 'react'

export default function FileInput({
  register,
  title,
  errors,
  setValue,
  clearErrors,
  setError,
  name,
  submitStatus,
  setSubmitStatus,
  is_submitted,
  File,
  setFile,
}: {
  register: any
  title: string
  errors: any
  setValue: any
  clearErrors: any
  setError: any
  name: string
  submitStatus: any
  setSubmitStatus: any
  is_submitted: boolean
  File: any
  setFile: any
}) {
  const fileRef = React.useRef<HTMLInputElement>(null)
  React.useEffect(() => {
    register(name, {
      required: true,
    })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (!e.target.files) return
    const file = e.target.files[0]
    const url = URL.createObjectURL(file)
    setFile(() => ({ url: url, file: file }))
    e.target.files
  }

  return (
    <>
      <div className="text-cblack mt-6  flex flex-col justify-start space-y-2 font-medium">
        <div className="flex flex-row items-center justify-start">
          <button
            id={title}
            type="button"
            className={`${
              is_submitted
                ? 'pointer-events-none bg-[#EDEEF3] text-[#9C99B2] hover:cursor-not-allowed'
                : 'bg-[#3D4BE0] text-[#FBFBFC]'
            } w-[169px] rounded-[30px]  py-[14.5px]  text-center text-base font-semibold  !transition   !duration-300 hover:!scale-105`}
            onClick={(e) => {
              e.preventDefault()
              console.log(fileRef?.current)
              fileRef?.current?.click()
            }}
          >
            Upload Submission
          </button>
          <input
            ref={fileRef}
            type="file"
            multiple={false}
            id={title}
            name={name}
            onChange={(e: any) => {
              const value = e.target.files[0]
              console.log(e.target.files[0])
              console.log(value)
              setError(name)
              clearErrors(name)
              handleChange(e)
              setValue(name, value)
            }}
            className="hidden"
          />
        </div>
        {errors[name] && <p className="text-red-700 ">{title} is required</p>}
      </div>
      {File.url !== '' && (
        <div>
          <p>
            {' '}
            File:
            <a
              className="ml-1 inline hover:border-b-2 hover:border-black"
              rel="noreferrer"
              target="_blank"
              href={File.url}
            >
              {File.file?.name}
            </a>
          </p>
        </div>
      )}
      {File.url !== '' ? setSubmitStatus(true) : setSubmitStatus(false)}
    </>
  )
}
