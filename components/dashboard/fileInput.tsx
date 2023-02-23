'use client'
import React from 'react'

interface IFileState {
  file: File | null
  url: string
}

export default function FileInput({
  register,
  title,
  errors,
  setValue,
  clearErrors,
  setError,
}: {
  register: any
  title: string
  errors: any
  setValue: any
  clearErrors: any
  setError: any
}) {
  const initialFileState: IFileState = {
    file: null,
    url: '',
  }
  const fileRef = React.useRef<HTMLInputElement>(null)
  const [File, setFile] = React.useState(initialFileState)
  React.useEffect(() => {
    register('file', {
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
            className="w-[169px] rounded-[30px] bg-[#3D4BE0] py-[14.5px]  text-center text-base font-semibold text-[#FBFBFC] !transition   !duration-300 hover:!scale-105"
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
            name={'file'}
            onChange={(e: any) => {
              const value = e.target.files[0]
              console.log(e.target.files[0])
              console.log(value)
              setError('file')
              clearErrors('file')
              handleChange(e)
              setValue('file', value)
            }}
            className="hidden"
          />
        </div>
        {errors['file'] && (
          <p className="text-red-700 ">{title} is required</p>
        )}
      </div>
      {File.url !== '' && (
        <div>
          <a rel="noreferrer" target="_blank" href={File.url}>
            {File.file?.name}
          </a>
        </div>
      )}
    </>
  )
}
