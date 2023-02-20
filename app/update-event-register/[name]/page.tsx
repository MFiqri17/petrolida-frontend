'use client'

import React from 'react'
import { registerData, registerData2 } from '../../../data/register'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { Input, ImageInput } from '../../../components/register/formComponent'
import { api } from '../../../utils/api'
import FormTimeline from '../../../components/register/formTimeline'
import Formbutton from '../../../components/register/formButton'
import { FormValues, FormValues2 } from '../../../types/formValues'
import SuccessModal from '../../../components/register/successModal'
import Spinner from '../../../components/utils/spinner'
import toast, { Toaster } from 'react-hot-toast'
import { competitionData } from '../../../data/competition'

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
interface IFileState {
  file: File | null
  src: string
  dimension: {
    width: number
    height: number
  }
}

function getPageData(param: string) {
  const data = competitionData.filter(({ slug }) => slug === param)
  if (data[0]) {
    return data[0]
  }
  return null
}

const EventRegistrationUpdate = ({ params }: { params: { name: string } }) => {
  const data = getPageData(params.name)
  const initialFileState: IFileState = {
    file: null,
    src: '',
    dimension: { width: 0, height: 0 },
  }
  const [index, setIndex] = React.useState<number>(0)
  const [todayDate] = React.useState<any>(new Date())
  const [isClosed, setIsClosed] = React.useState<boolean>(true)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [user, setUser] = React.useState<any>([])
  const [Img, setImg] = React.useState(initialFileState)
  const [Img2, setImg2] = React.useState(initialFileState)
  const [Img3, setImg3] = React.useState(initialFileState)
  const [Img4, setImg4] = React.useState(initialFileState)
  const [Img5, setImg5] = React.useState(initialFileState)
  const [Img6, setImg6] = React.useState(initialFileState)
  const [Img7, setImg7] = React.useState(initialFileState)
  const [Img8, setImg8] = React.useState(initialFileState)
  const [Img9, setImg9] = React.useState(initialFileState)
  const [Img10, setImg10] = React.useState(initialFileState)
  const [Img11, setImg11] = React.useState(initialFileState)
  React.useEffect(() => {
    let currentDate: string =
      todayDate.getFullYear() +
      '-' +
      (todayDate.getMonth() + 1) +
      '-' +
      todayDate.getDate()
    if (
      currentDate >= data!.start_registration &&
      currentDate <= data!.end_registration
    ) {
      setIsClosed(false)
    }
  }, [])
  React.useEffect(() => {
    api
      .get('/events/registration')
      .then((res) => {
        setUser(res.data.data)
        console.log(user)
        console.log(res.data.data)
      })
      .catch((e) => console.log(e.message))
  }, [])
  const incrementIndex = () => {
    setIndex(index + 1)
  }
  const decrementIndex = () => {
    setIndex(index - 1)
  }
  function getKeyByValue(object: any, value: any) {
    return Object.keys(object).find((key) => object[key] === value)
  }

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setIsLoading(true)
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
        formData.append(val, data[val as keyof FormValues2])
      }
      console.log(data)
    })

    console.log(formData)
    api
      .post('/events/registration', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(() => {
        setIsOpen(true)
      })
      .catch((e: any) => {
        toast.error(e.message)
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
    trigger,
    formState: { errors, isValid },
  } = useForm<FormValues>()
  //     {
  //     defaultValues: {
  //       university: user.university,
  //       team_name: user.team_name,
  //     //   members: [
  //     //     {
  //     //       name: user.members[0].name,
  //     //       major: user.members[0].major,
  //     //       batch: user.members[0].batch,
  //     //       identity_id: user.members[0].identity_id,
  //     //       email: user.members[0].email,
  //     //       phone: user.members[0].phone,
  //     //       identity_card: user.members[0].identity_card_path,
  //     //       student_card: user.members[0].student_card_path,
  //     //     },
  //     //     {
  //     //       name: user.members[1].name,
  //     //       major: user.members[1].major,
  //     //       batch: user.members[1].batch,
  //     //       identity_id: user.members[1].identity_id,
  //     //       email: user.members[1].email,
  //     //       phone: user.members[1].phone,
  //     //       identity_card: user.members[1].identity_card_path,
  //     //       student_card: user.members[1].student_card_path,
  //     //     },
  //     //     {
  //     //       name: user.members[2].name,
  //     //       major: user.members[2].major,
  //     //       batch: user.members[2].batch,
  //     //       identity_id: user.members[2].identity_id,
  //     //       email: user.members[2].email,
  //     //       phone: user.members[2].phone,
  //     //       identity_card: user.members[2].identity_card_path,
  //     //       student_card: user.members[2].student_card_path,
  //     //     },
  //     //     {
  //     //       name: user.members[3].name,
  //     //       major: user.members[3].major,
  //     //       batch: user.members[3].batch,
  //     //       identity_id: user.members[3].identity_id,
  //     //       email: user.members[3].email,
  //     //       phone: user.members[3].phone,
  //     //       identity_card: user.members[3].identity_card_path,
  //     //       student_card: user.members[3].student_card_path,
  //     //     },
  //     //     {
  //     //       name: user.members[4].name,
  //     //       major: user.members[4].major,
  //     //       batch: user.members[4].batch,
  //     //       identity_id: user.members[4].identity_id,
  //     //       email: user.members[4].email,
  //     //       phone: user.members[4].phone,
  //     //       identity_card: user.members[4].identity_card_path,
  //     //       student_card: user.members[4].student_card_path,
  //     //     },
  //     //   ],
  //       transfer_receipt: user.payment.payment_proof,
  //     },
  //   }

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
            <FormTimeline
              formType={data?.id === 1 ? formtypeArray : formTypeArray2}
              isActive={index}
            />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-9 flex w-full flex-col space-y-20 px-4 md:px-0 lg:mt-0 lg:w-[700px]"
            >
              {Object.values(data?.id === 1 ? registerData : registerData2).map(
                (registers: any[]) => (
                  <>
                    {getKeyByValue(
                      data?.id === 1 ? registerData : registerData2,
                      registers,
                    ) ==
                    (data?.id === 1
                      ? formtypeArray[index]
                      : formTypeArray2[index]) ? (
                      <div
                        className="flex flex-col space-y-10"
                        key={
                          data?.id === 1
                            ? formtypeArray[index]
                            : formTypeArray2[index]
                        }
                      >
                        {registers.map((registerItem) => (
                          <>
                            {registerItem.name == 'amount' ? (
                              <input
                                id={registerItem.name}
                                value={data?.amount}
                                {...register(registerItem.name, {
                                  required: true,
                                })}
                                className="hidden"
                              />
                            ) : registerItem.name == 'event_id' ? (
                              <input
                                id={registerItem.name}
                                value={data?.id.toString()}
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
                                  registerItem.name ===
                                  `members[0][student_card]`
                                    ? Img
                                    : registerItem.name ===
                                      `members[0][identity_card]`
                                    ? Img2
                                    : registerItem.name ===
                                      `members[1][student_card]`
                                    ? Img3
                                    : registerItem.name ===
                                      `members[1][identity_card]`
                                    ? Img4
                                    : registerItem.name ===
                                      `members[2][student_card]`
                                    ? Img5
                                    : registerItem.name ===
                                      `members[2][identity_card]`
                                    ? Img6
                                    : registerItem.name ===
                                      `members[3][student_card]`
                                    ? Img7
                                    : registerItem.name ===
                                      `members[3][identity_card]`
                                    ? Img8
                                    : registerItem.name ===
                                      `members[4][student_card]`
                                    ? Img9
                                    : registerItem.name ===
                                      `members[4][identity_card]`
                                    ? Img10
                                    : Img11
                                }
                                setImg={
                                  registerItem.name ===
                                  `members[0][student_card]`
                                    ? setImg
                                    : registerItem.name ===
                                      `members[0][identity_card]`
                                    ? setImg2
                                    : registerItem.name ===
                                      `members[1][student_card]`
                                    ? setImg3
                                    : registerItem.name ===
                                      `members[1][identity_card]`
                                    ? setImg4
                                    : registerItem.name ===
                                      `members[2][student_card]`
                                    ? setImg5
                                    : registerItem.name ===
                                      `members[2][identity_card]`
                                    ? setImg6
                                    : registerItem.name ===
                                      `members[3][student_card]`
                                    ? setImg7
                                    : registerItem.name ===
                                      `members[3][identity_card]`
                                    ? setImg8
                                    : registerItem.name ===
                                      `members[4][student_card]`
                                    ? setImg9
                                    : registerItem.name ===
                                      `members[4][identity_card]`
                                    ? setImg10
                                    : setImg11
                                }
                                {...registerItem}
                              />
                            ) : (
                              <Input
                                register={register}
                                {...registerItem}
                                ErrorMessage={ErrorMessage}
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
                ),
              )}
              <Toaster position="bottom-center" />
              <Formbutton
                isLoading={isLoading}
                Spinner={Spinner}
                compValue={data?.id}
                step={index}
                increamentStep={incrementIndex}
                decreamentStep={decrementIndex}
                isValid={isValid}
              />
            </form>
          </>
        </section>
      )}

      <SuccessModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}
export default EventRegistrationUpdate