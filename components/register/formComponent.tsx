'use client'
import NextImage from 'next/image'
import React from 'react'

export function Input({
  register,
  name,
  types,
  placeholder,
  label,
  trigger,
  pattern,
  errors,
  ErrorMessage,
}: {
  placeholder: string
  types: string
  register: any
  label: string
  name: string
  pattern: any
  trigger: any
  errors: any
  ErrorMessage: any
}) {
  return (
    <div className="flex flex-col justify-center space-y-2">
      <label htmlFor={name} className="text-xl font-semibold">
        {label}
      </label>
      <input
        id={name}
        className={`${
          errors[name]
            ? `!border-2 !border-red-700 outline-none !ring-red-700`
            : `focus:!border-2 focus:!border-[#838CEB] focus:outline-none  focus:!ring-[#838CEB] focus-visible:!border-[#838CEB]`
        } h-[48px] w-full rounded-[30px] bg-white pl-4  font-normal text-[#605C84] lg:h-[60px] lg:w-[700px]  `}
        placeholder={placeholder}
        type={types}
        onKeyUp={() => {
          trigger(name)
        }}
        {...register(name, { required: true, pattern: pattern })}
      />{' '}
      <ErrorMessage
        errors={errors}
        name={name}
        render={() => (
          <p className="text-red-700 ">
            {label.toLowerCase()} is required or incorrect format
          </p>
        )}
      />
    </div>
  )
}

export function Select({
  register,
  options,
  name,
  setValue,
  label,
}: {
  register: any
  name: string
  label: string
  setValue: any
  options: string[]
}) {
  React.useEffect(() => {
    register(name, {
      required: true,
    })
  }, [])
  return (
    <div className="flex flex-col justify-center space-y-2">
      <label htmlFor={name} className="text-xl font-semibold">
        {label}
      </label>
      <select
        className={`h-[48px] w-full rounded-[30px] bg-white pl-4  font-normal text-[#605C84]
        focus:!border-2 focus:!border-[#838CEB] focus:outline-none  focus:!ring-[#838CEB] focus-visible:!border-[#838CEB] lg:h-[60px] lg:w-[700px]  `}
        onChange={(e: any) => setValue(name, e.target.value)}
      >
        {options.map((value) => (
          <option className="mt-10 w-[500px]" key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  )
}

export function ImageInput({
  register,
  name,
  label,
  errors,
  setValue,
  clearErrors,
  setError,
  types,
  Img,
  setImg,
  Source,
}: {
  register: any
  name: string
  label: string
  errors: any
  setValue: any
  clearErrors: any
  setError: any
  types: string
  Img: any
  setImg: any
  Source: any
}) {
  console.log(Source)
  const fileRef = React.useRef<HTMLInputElement>(null)
  React.useEffect(() => {
    register(name)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (!e.target.files) return
    const file = e.target.files[0]
    setImg((prev: any) => ({ ...prev, file: file }))
    e.target.files
  }

  React.useEffect(() => {
    const fileReader = new FileReader()
    let isCancel = false
    if (Img) {
      fileReader.onload = () => {
        const result = fileReader.result
        if (result && !isCancel) {
          const img = new Image()
          img.onload = () => {
            const height = img.height
            const width = img.width
            setImg((prev: any) => ({
              ...prev,
              dimension: { height, width },
            }))
          }
          img.src = result.toString()
          setImg((prev: any) => ({ ...prev, src: result.toString() }))
        }
      }
      if (Img.file) {
        fileReader.readAsDataURL(Img.file)
      }
    }
    return () => {
      isCancel = true
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort()
      }
    }
  }, [Img])
  return (
    <>
      <div className="text-cblack  flex flex-col justify-start space-y-2 font-medium">
        <label htmlFor={name} className="text-xl font-semibold">
          {label}
        </label>
        <div className="flex flex-row items-center justify-start">
          <button
            id={name}
            type="button"
            className="h-[48px] w-[228px] rounded-[30px] bg-white pl-5 text-left text-base font-semibold text-[#605C84] !transition   !duration-300 hover:!scale-105   md:h-[60px]"
            onClick={(e) => {
              e.preventDefault()
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
            multiple={false}
            accept="image/*"
            id={name}
            name={name}
            onChange={(e: any) => {
              const value = e.target.files[0]
              if (!value) {
                setValue(name, Source)
                clearErrors(name)
              }
              setError(name)
              handleChange(e)
              setValue(name, value)
            }}
            type={types}
            className="hidden"
          />
        </div>
        {/* {errors[name] && (
          <p className="text-red-700 ">{label.toLowerCase()} is required</p>
        )} */}
      </div>
      <div>
        <p>{Source}</p>
        <img src={Img.src} alt="" />
      </div>
    </>
  )
}
