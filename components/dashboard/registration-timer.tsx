import { useTimer } from 'react-timer-hook'

export default function RegistrationTimer({
  startRegistration,
  endRegistration,
}: {
  startRegistration: string
  endRegistration: string
}) {
  const endRegistrationDate = new Date(endRegistration)
  const { days, hours, minutes } = useTimer({
    expiryTimestamp: endRegistrationDate,
    onExpire: () => console.log('onExpire called'),
  })
  return (
    <div className="absolute left-0 right-0 bottom-4 mx-6 flex justify-between rounded-full bg-whiteb px-3 py-2 font-semibold">
      {new Date() > new Date(startRegistration) ? (
        <>
          <p>Register Ends</p>
          <div>
            <span className="rounded-md bg-primary p-1 text-whiteb">
              {days}
            </span>{' '}
            :
            <span className="rounded-md bg-primary p-1 text-whiteb">
              {hours}
            </span>{' '}
            :
            <span className="rounded-md bg-primary p-1 text-whiteb">
              {minutes}
            </span>
          </div>
        </>
      ) : (
        <>
          <p>Register Ends</p>
          <div>
            <span className="rounded-md bg-primary p-1 text-whiteb">
              {days}
            </span>{' '}
            :
            <span className="rounded-md bg-primary p-1 text-whiteb">
              {hours}
            </span>{' '}
            :
            <span className="rounded-md bg-primary p-1 text-whiteb">
              {minutes}
            </span>
          </div>
        </>
      )}
    </div>
  )
}
