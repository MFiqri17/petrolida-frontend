import clsx from 'clsx'
import React from 'react'

export function Input({
  register,
  name,
  types,
  placeholder,
  label,
  trigger,
  patterns,
  errors,
}: {
  placeholder: string
  types: string
  register: any
  label: string
  name: string
  patterns: any
  trigger: any
  errors: any
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
        } h-[60px] w-[700px] rounded-[30px]  bg-white pl-4 font-normal text-[#605C84]  `}
        placeholder={placeholder}
        type={types}
        onKeyUp={() => {
          trigger(name)
        }}
        {...register(name, { required: true, pattern: patterns })}
      />{' '}
      {errors[name] && (
        <p className="text-red-700 ">{name} is required or incorrect format</p>
      )}
    </div>
  )
}

export function Select({
  register,
  options,
  name,
  label,
}: {
  register: any
  name: string
  label: string
  options: string[]
}) {
  return (
    <div className="flex flex-col justify-center space-y-2">
      <label htmlFor={name} className="text-xl font-semibold">
        {label}
      </label>
      <select
        className={`h-[60px] w-[700px] rounded-[30px]  bg-white pl-4
        font-normal text-[#605C84] focus:!border-2  focus:!border-[#838CEB] focus:outline-none focus:!ring-[#838CEB] focus-visible:!border-[#838CEB]  `}
        {...register(name)}
      >
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  )
}

// export function ImageInput({register}:{register:any}) {
//   interface IFileState {
//     file: File | null
//     src: string
//     dimension: {
//       width: number
//       height: number
//     }
//   }
//   const fileRef = React.useRef<HTMLInputElement>(null)
//   const initialFileState: IFileState = {
//     file: null,
//     src: '',
//     dimension: { width: 0, height: 0 },
//   }
//   const MIME_TYPE = /image\/(png|jpg|jpeg)/i

//   const [Img, setImg] = React.useState(initialFileState)
//   return (
//     <>
//       <div className="font-mediumtext-cblack flex flex-col space-y-2">
//         <label className="text-xl font-semibold">
//           Upload bukti transfer kamu
//         </label>
//         <div className="flex flex-row items-center justify-start">
//           <button
//             id="buton"
//             type="button"
//             className=" focus:!border-cgreen focus:!ring-cgreen focus-visible:!border-cgreen flex items-center rounded-md !border border-[#6B7280] bg-transparent p-2  autofill:bg-transparent"
//             onClick={(e) => {
//               e.preventDefault()
//               fileRef?.current?.click()
//             }}
//           >
//             {' '}
//             <img className="mr-4" src="images/upload.svg" alt="" /> Add File{' '}
//           </button>
//           <input
//             ref={fileRef}
//             {...register(name, { required: true, pattern: patterns })}
//             // value={form2.buktiTF}
//             multiple={false}
//             id="buktiTF"
//             name="bukti-tf"
//             type="file"
//             className=" hidden rounded-md !border border-[rgb(107,114,128)] bg-transparent autofill:bg-transparent focus:!border-pink-200 focus:!ring-pink-200  focus-visible:!border-pink-200"
//           />
//         </div>
//         <p className="font-poppins font-semibold text-red-700">
//           {formErrors2.buktiTF}
//         </p>
//       </div>
//       <div>
//         <img src={Img.src} alt="" />
//       </div>
//     </>
//   )
// }
