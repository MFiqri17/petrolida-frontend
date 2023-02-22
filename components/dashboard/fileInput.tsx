'use client'
import React from 'react'
import NextImage from 'next/image'

interface IFileState {
  file: File | null
  url: string
}

export default function FileInput({
  register,
  submission_id,
  setValue,
}: {
  register: any
  submission_id: number
  setValue: any
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
      <div className="text-cblack  flex flex-col justify-start space-y-2 font-medium">
        <div className="flex flex-row items-center justify-start">
          <button
            id={submission_id.toString()}
            type="button"
            className="h-[48px] w-[228px] rounded-[30px] bg-white pl-5 text-left text-base font-semibold text-[#605C84] !transition   !duration-300 hover:!scale-105   md:h-[60px]"
            onClick={(e) => {
              e.preventDefault()
              console.log(fileRef?.current)
              fileRef?.current?.click()
            }}
          >
            <NextImage
              className="mr-4 inline"
              src={'/images/upload.png'}
              alt="upload"
              width={24}
              height={24}
            />{' '}
            Upload
          </button>
          <input
            ref={fileRef}
            type="file"
            multiple={false}
            id={submission_id.toString()}
            name={'file'}
            onChange={(e: any) => {
              const value = e.target.files[0]
              console.log(submission_id)
              console.log(e.target.files[0])
              handleChange(e)
              setValue('file', value)
            }}
            className="hidden"
          />
        </div>
      </div>
      {File.url !== '' && (
        <div>
          <a rel="noreferrer" target="_blank" href={File.url}>
            Open your File
          </a>
        </div>
      )}
    </>
  )
}
