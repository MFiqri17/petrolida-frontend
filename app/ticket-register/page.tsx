import React from 'react'
import {useForm, useFieldArray} from 'react-hook-form'
import { Input, ImageInput } from '../../components/register/formComponent'
import { ErrorMessage } from '@hookform/error-message'

function TicketRegistration() {
  const {
    register,
    handleSubmit,
    control,
    trigger,
    formState: { errors },
  } = useForm()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'members',
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Name"
        name="members[0][name]"
        placeholder="Enter you full name"
        register={register}
        trigger={trigger}
        pattern={''}
        types={'text'}
        errors={errors}
        ErrorMessage={ErrorMessage}
      />
      <Input
        label="NIK"
        name="members[0][nik]"
        placeholder="Enter you NIK"
        register={register}
        trigger={trigger}
        pattern={''}
        types={'text'}
        errors={errors}
        ErrorMessage={ErrorMessage}
      />
      <Input
        label="WhatsApp Number"
        name="phone"
        placeholder="Enter your whatsapp number"
        register={register}
        trigger={trigger}
        pattern={''}
        types={'text'}
        errors={errors}
        ErrorMessage={ErrorMessage}
      />

      {fields.map((field, index) => (
        <div key={field.id}>
          <h2>Member {index + 1}</h2>
          <Input
            label="Name"
            name={`members[${index}].name`}
            placeholder="Enter member name"
            register={register}
            trigger={trigger}
            pattern={''}
            types={'text'}
            errors={errors}
            ErrorMessage={ErrorMessage}
          />
          <Input
            label="NIK"
            name={`members[${index}].nik`}
            placeholder="Enter member NIK"
            register={register}
            trigger={trigger}
            pattern={''}
            types={'text'}
            errors={errors}
            ErrorMessage={ErrorMessage}
          />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={() => append({ name: '', nik: '' })}>
        Add other members
      </button>
    </form>
  )
}

export default TicketRegistration;
