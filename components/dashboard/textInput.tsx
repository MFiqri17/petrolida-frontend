export function EventInput({
  register,
  value,
  title,
}: {
  register: any
  value: any
  title: string
}) {
  return (
    <input
      id={title}
      className="hidden"
      value={value}
      {...register('event_id', {
        required: true,
      })}
    />
  )
}

export function SubmissionInput({
  register,
  value,
  title,
}: {
  register: any
  value: any
  title: string
}) {
  return (
    <input
      id={title}
      className="hidden"
      value={value}
      {...register('submission_id', {
        required: true,
      })}
    />
  )
}
