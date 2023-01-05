'use client'
import React from 'react'
import clsx from 'clsx'
const Formbutton = ({
  step,
  increamentStep,
  decreamentStep,
  isLoading,
  isValid,
}: {
  step: number
  increamentStep: () => void
  decreamentStep: () => void
  isValid: boolean
  isLoading: boolean
}) => {
  const isFormValid = () => {
    return !isValid || isLoading
  }
  return (
    <div className="flex flex-col-reverse justify-center space-y-5 space-y-reverse md:flex-row md:space-x-10 md:space-y-0">
      {step > 0 && step <= 5 && (
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
        {step >= 0 && step < 5 && (
          <button
            className={clsx(
              'w-full rounded-[30px] bg-[#07003F] py-4 text-center text-2xl  font-semibold text-[#FBFBFC] !transition !duration-300 hover:!scale-105 md:w-[190px]',
              !isValid && 'cursor-not-allowed',
            )}
            onClick={() => {
              increamentStep()
            }}
            type="button"
            disabled={!isValid}
          >
            Next
          </button>
        )}
        {step >= 5 && (
          <button
            className={clsx(
              'w-full rounded-[30px] bg-[#07003F] py-4 text-2xl  font-semibold text-[#FBFBFC] !transition !duration-300 hover:!scale-105 md:w-[190px]',
              !isFormValid() && 'cursor-not-allowed',
            )}
            type="submit"
          >
            Daftar
          </button>
        )}
      </>
    </div>
  )
}

export default Formbutton
