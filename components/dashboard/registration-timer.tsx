import { useTimer } from 'react-timer-hook'

export default function RegistrationTimer({
  startRegistration,
  endRegistration,
}: {
  startRegistration: string
  endRegistration: string
}) {
  const endRegistrationDate = new Date(endRegistration)
  const { days } = useTimer({
    expiryTimestamp: endRegistrationDate,
    onExpire: () => console.log('onExpire called'),
  })
  return (
    <div className="absolute left-0 right-0 bottom-4 mx-6 flex flex-col items-center justify-center gap-x-2 rounded-full bg-whiteb py-2 font-semibold sm:flex-row">
      {new Date() > new Date(endRegistration) ? (
        <>
          <p>Registration Closed</p>
        </>
      ) : (
        <>
          <p>Register Ends</p>
          <div>
            <span className="rounded-md bg-primary p-1 text-whiteb">
              {days}
            </span>
          </div>
          <p>Days Again</p>
        </>
      )}
    </div>
  )
}
