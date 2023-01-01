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
    <div className="flex justify-center space-x-5">
      {step > 0 && step <= 5 && (
        <button
          className={clsx(
            'w-[190px] rounded-[30px] border-2 border-[#07003F] bg-transparent py-4  text-2xl font-semibold text-[#07003F] !transition !duration-300 hover:!scale-105',
          )}
          onClick={decreamentStep}
          type="button"
        >
          Back
        </button>
      )}
      {step >= 0 && step <= 4 ? (
        <button
          className={clsx(
            'w-[190px] rounded-[30px] bg-[#07003F] py-4  text-2xl font-semibold text-[#FBFBFC] !transition !duration-300 hover:!scale-105',
            !isValid && 'cursor-not-allowed',
          )}
          disabled={isFormValid()}
          onClick={increamentStep}
          type="button"
        >
          Next
        </button>
      ) : (
        <button
          className={clsx(
            'w-[190px] rounded-[30px] bg-[#07003F] py-4  text-2xl font-semibold text-[#FBFBFC] !transition !duration-300 hover:!scale-105',
            isFormValid() && 'cursor-not-allowed',
          )}
          disabled={isFormValid()}
        >
          Daftar
        </button>
      )}
    </div>
  )
}

export default Formbutton
