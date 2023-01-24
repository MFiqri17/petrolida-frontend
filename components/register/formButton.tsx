'use client'
import React from 'react'
import clsx from 'clsx'

const stepFunction = (step: number, compValue: string, title: string) => {
  if (compValue === '1' && title === 'Next') {
    return(step >= 0 && step <= 5)
  } else if (compValue === '1' && title === 'Back') {
    return step > 0 && step <= 6
  } else if (compValue === '1' && title === 'Register') {
    return step > 5
  } else if (
    compValue === '2' ||
    compValue === '3' ||
    compValue === '4' 
  ) {
    if (title === 'Next') {
      return step >= 0 && step <= 3
    } else if (title === 'Back') {
      return step > 0 && step <= 4
    } else {
      return step > 3
    }
  }
}

const Formbutton = ({
  step,
  increamentStep,
  decreamentStep,
  isValid,
  compValue,
}: {
  step: number
  increamentStep: () => void
  decreamentStep: () => void
  isValid: boolean
  compValue: string
}) => {
  return (
    <div className="flex flex-col-reverse justify-center space-y-5 space-y-reverse md:flex-row md:space-x-10 md:space-y-0">
      {stepFunction(step, compValue, 'Back') && (
        <button
          className={clsx(
            'w-full rounded-[30px] border-2 border-[#07003F] bg-transparent py-4 text-center text-2xl  font-semibold text-[#07003F] !transition !duration-300 hover:!scale-105 md:w-[190px]',
          )}
          onClick={decreamentStep}
          type="button"
        >
          Back
        </button>
      )}
      <>
        {stepFunction(step, compValue, 'Next') && (
          <button
            className={clsx(
              'w-full rounded-[30px] bg-[#07003F] py-4 text-center text-2xl  font-semibold text-[#FBFBFC] !transition !duration-300 hover:!scale-105 md:w-[190px]',
              !isValid && 'cursor-not-allowed',
            )}
            onClick={increamentStep}
            type="button"
          >
            Next
          </button>
        )}
        {stepFunction(step, compValue, 'Register') && (
          <button
            className={clsx(
              'w-full rounded-[30px] bg-[#07003F] py-4 text-2xl  font-semibold text-[#FBFBFC] !transition !duration-300 hover:!scale-105 md:w-[190px]',
            )}
            type="submit"
          >
            Register
          </button>
        )}
      </>
    </div>
  )
}

export default Formbutton
