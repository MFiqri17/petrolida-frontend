import { Disclosure, Transition } from '@headlessui/react'
import clsx from 'clsx'
import SectionTitle from './utils/section-title'

export default function FaqSection({
  faq,
}: {
  faq: { question: string; answer: string }[]
}) {
  return (
    <section className="bg-light py-20">
      <SectionTitle title="FAQ" />
      <div className="mx-auto w-3/4 py-8">
        {faq.map(({ question, answer }, i) => (
          <Disclosure key={i} as="div" className="mb-4">
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={clsx(
                    'z-50 flex w-full items-center justify-between bg-white px-4 py-4 text-left font-bold text-black transition-transform focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75',
                    open ? 'rounded-t-2xl' : 'rounded-2xl',
                  )}
                >
                  <span className="pl-6 pr-5 md:pr-20">{question}</span>
                  <div
                    className={clsx(
                      open ? 'rotate-180 transform' : 'rotate-0',
                      'text-cblack h-8 w-8 transition-transform',
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </Disclosure.Button>
                <Transition
                  enter="transition duration-150 ease-out"
                  enterFrom="transform -translate-y-2 opacity-0"
                  enterTo="transform translate-y-0 opacity-100"
                  leave="transition duration-150 ease-out"
                  leaveFrom="transform translate-y-0 opacity-100"
                  leaveTo="transform -translate-y-2 opacity-0"
                >
                  <Disclosure.Panel className="rounded-b-2xl bg-white pl-10 pr-20 pb-4 text-black">
                    {answer}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  )
}
