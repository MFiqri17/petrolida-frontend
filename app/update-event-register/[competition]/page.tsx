'use client'
import React from 'react'
import { registerData, registerData2 } from '../../../data/register'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import {
  Input,
  ImageInputUpdate,
} from '../../../components/register/formComponent'
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
function getCompetitionData(competition: string) {
  const data = competitionData.filter(({ slug }) => slug === competition)
  if (data[0]) {
    return data[0]
  }
  return null
}

const EventRegistrationUpdate = ({
  params,
}: {
  params: { competition: string }
}) => {
  const data = getCompetitionData(params.competition)
  const initialFileState: IFileState = {
    file: null,
    src: '',
    dimension: { width: 0, height: 0 },
  }
  const [index, setIndex] = React.useState<number>(0)
  const [todayDate] = React.useState<any>(new Date())
  const baseStorageUrl = 'https://petrolidaserver.com/storage/'
  const [isClosed, setIsClosed] = React.useState<boolean>(true)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [team_id, setTeam_id] = React.useState<number>(0)
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
  const [ImgTwibbon, setImgTwibbon] = React.useState(initialFileState)
  const [ImgTwibbon2, setImgTwibbon2] = React.useState(initialFileState)
  const [ImgTwibbon3, setImgTwibbon3] = React.useState(initialFileState)
  const [ImgTwibbon4, setImgTwibbon4] = React.useState(initialFileState)
  const [ImgTwibbon5, setImgTwibbon5] = React.useState(initialFileState)
  const [src, setsrc] = React.useState('')
  const [src2, setsrc2] = React.useState('')
  const [src3, setsrc3] = React.useState('')
  const [src4, setsrc4] = React.useState('')
  const [src5, setsrc5] = React.useState('')
  const [src6, setsrc6] = React.useState('')
  const [src7, setsrc7] = React.useState('')
  const [src8, setsrc8] = React.useState('')
  const [src9, setsrc9] = React.useState('')
  const [src10, setsrc10] = React.useState('')
  const [src11, setsrc11] = React.useState('')
  const [srcTwibbon, setsrcTwibbon] = React.useState('')
  const [srcTwibbon2, setsrcTwibbon2] = React.useState('')
  const [srcTwibbon3, setsrcTwibbon3] = React.useState('')
  const [srcTwibbon4, setsrcTwibbon4] = React.useState('')
  const [srcTwibbon5, setsrcTwibbon5] = React.useState('')
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isValid },
  } = useForm<FormValues>()
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
      .get(`/events/registration/${data?.id}`)
      .then((res) => {
        const datas = res.data.data
        setValue('university', datas.university)
        setValue('team_name', datas.team_name)
        setTeam_id(datas.id)

        console.log(datas.members)
        datas.members.forEach((member: any, index: any) => {
          setValue(`members.${index}.name`, member.name)
          setValue(`members.${index}.major`, member.major)
          setValue(`members.${index}.batch`, member.batch)
          setValue(`members.${index}.identity_id`, member.identity_id)
          setValue(`members.${index}.email`, member.email)
          setValue(`members.${index}.phone`, member.phone)
        })

        if (data?.id === 1) {
          setsrc(baseStorageUrl + datas.members[0].student_card_path)
          setsrc2(baseStorageUrl + datas.members[0].identity_card_path)
          setsrcTwibbon(baseStorageUrl + datas.members[0].twibbon_path)
          setsrc3(baseStorageUrl + datas.members[1].student_card_path)
          setsrc4(baseStorageUrl + datas.members[1].identity_card_path)
          setsrcTwibbon2(baseStorageUrl + datas.members[1].twibbon_path)
          setsrc5(baseStorageUrl + datas.members[2].student_card_path)
          setsrc6(baseStorageUrl + datas.members[2].identity_card_path)
          setsrcTwibbon3(baseStorageUrl + datas.members[2].twibbon_path)
          setsrc7(baseStorageUrl + datas.members[3].student_card_path)
          setsrc8(baseStorageUrl + datas.members[3].identity_card_path)
          setsrcTwibbon4(baseStorageUrl + datas.members[3].twibbon_path)
          setsrc9(baseStorageUrl + datas.members[4].student_card_path)
          setsrc10(baseStorageUrl + datas.members[4].identity_card_path)
          setsrcTwibbon5(baseStorageUrl + datas.members[4].twibbon_path)
          setsrc11(baseStorageUrl + datas.payment.payment_proof)
          console.log(src, src2, srcTwibbon, src11)
        } else {
          setsrc(baseStorageUrl + datas.members[0].student_card_path)
          setsrc2(baseStorageUrl + datas.members[0].identity_card_path)
          setsrcTwibbon(baseStorageUrl + datas.members[0].twibbon_path)
          setsrc3(baseStorageUrl + datas.members[1].student_card_path)
          setsrc4(baseStorageUrl + datas.members[1].identity_card_path)
          setsrcTwibbon2(baseStorageUrl + datas.members[1].twibbon_path)
          setsrc5(baseStorageUrl + datas.members[2].student_card_path)
          setsrc6(baseStorageUrl + datas.members[2].identity_card_path)
          setsrcTwibbon3(baseStorageUrl + datas.members[2].twibbon_path)
          setsrc11(baseStorageUrl + datas.payment.payment_proof)
          console.log(src, src2, srcTwibbon, src11)
        }
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
      .post(`events/registration/${team_id}`, formData, {
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
                              <ImageInputUpdate
                                key={registerItem.id}
                                register={register}
                                setValue={setValue}
                                path={registerItem.path_twibbon}
                                Source={
                                  registerItem.name ===
                                  `members[0][student_card]`
                                    ? src
                                    : registerItem.name ===
                                      `members[0][identity_card]`
                                    ? src2
                                    : registerItem.name ===
                                      'members[0][twibbon_path]'
                                    ? srcTwibbon
                                    : registerItem.name ===
                                      `members[1][student_card]`
                                    ? src3
                                    : registerItem.name ===
                                      `members[1][identity_card]`
                                    ? src4
                                    : registerItem.name ===
                                      'members[1][twibbon_path]'
                                    ? srcTwibbon2
                                    : registerItem.name ===
                                      `members[2][student_card]`
                                    ? src5
                                    : registerItem.name ===
                                      `members[2][identity_card]`
                                    ? src6
                                    : registerItem.name ===
                                      'members[2][twibbon_path]'
                                    ? srcTwibbon3
                                    : registerItem.name ===
                                      `members[3][student_card]`
                                    ? src7
                                    : registerItem.name ===
                                      `members[3][identity_card]`
                                    ? src8
                                    : registerItem.name ===
                                      'members[3][twibbon_path]'
                                    ? srcTwibbon4
                                    : registerItem.name ===
                                      `members[4][student_card]`
                                    ? src9
                                    : registerItem.name ===
                                      `members[4][identity_card]`
                                    ? src10
                                    : registerItem.name ===
                                      'members[4][twibbon_path]'
                                    ? srcTwibbon5
                                    : src11
                                }
                                label={
                                  params.competition === 'business-case' &&
                                  registerItem.name === 'transfer_receipt'
                                    ? 'Grab Unlimited Proof'
                                    : registerItem.label
                                }
                                name={registerItem.name}
                                types={registerItem.types}
                                Img={
                                  registerItem.name ===
                                  `members[0][student_card]`
                                    ? Img
                                    : registerItem.name ===
                                      `members[0][identity_card]`
                                    ? Img2
                                    : registerItem.name ===
                                      'members[0][twibbon_path]'
                                    ? ImgTwibbon
                                    : registerItem.name ===
                                      `members[1][student_card]`
                                    ? Img3
                                    : registerItem.name ===
                                      `members[1][identity_card]`
                                    ? Img4
                                    : registerItem.name ===
                                      'members[1][twibbon_path]'
                                    ? ImgTwibbon2
                                    : registerItem.name ===
                                      `members[2][student_card]`
                                    ? Img5
                                    : registerItem.name ===
                                      `members[2][identity_card]`
                                    ? Img6
                                    : registerItem.name ===
                                      'members[2][twibbon_path]'
                                    ? ImgTwibbon3
                                    : registerItem.name ===
                                      `members[3][student_card]`
                                    ? Img7
                                    : registerItem.name ===
                                      `members[3][identity_card]`
                                    ? Img8
                                    : registerItem.name ===
                                      'members[3][twibbon_path]'
                                    ? ImgTwibbon4
                                    : registerItem.name ===
                                      `members[4][student_card]`
                                    ? Img9
                                    : registerItem.name ===
                                      `members[4][identity_card]`
                                    ? Img10
                                    : registerItem.name ===
                                      'members[4][twibbon_path]'
                                    ? ImgTwibbon5
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
                                      'members[0][twibbon_path]'
                                    ? setImgTwibbon
                                    : registerItem.name ===
                                      `members[1][student_card]`
                                    ? setImg3
                                    : registerItem.name ===
                                      `members[1][identity_card]`
                                    ? setImg4
                                    : registerItem.name ===
                                      'members[1][twibbon_path]'
                                    ? setImgTwibbon2
                                    : registerItem.name ===
                                      `members[2][student_card]`
                                    ? setImg5
                                    : registerItem.name ===
                                      `members[2][identity_card]`
                                    ? setImg6
                                    : registerItem.name ===
                                      'members[2][twibbon_path]'
                                    ? setImgTwibbon3
                                    : registerItem.name ===
                                      `members[3][student_card]`
                                    ? setImg7
                                    : registerItem.name ===
                                      `members[3][identity_card]`
                                    ? setImg8
                                    : registerItem.name ===
                                      'members[3][twibbon_path]'
                                    ? setImgTwibbon4
                                    : registerItem.name ===
                                      `members[4][student_card]`
                                    ? setImg9
                                    : registerItem.name ===
                                      `members[4][identity_card]`
                                    ? setImg10
                                    : registerItem.name ===
                                      'members[4][twibbon_path]'
                                    ? setImgTwibbon5
                                    : setImg11
                                }
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
