'use client'
import { Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'

interface IMenuProps {
  button: React.ReactNode
  buttonClassName?: string
  menuClassName?: string
  width?: string | number
  items: {
    title: React.ReactNode
    as?: React.ElementType
    helperFunction?: () => void
    className?: string
  }[]
}

export default function DropdownMenu({
  button,
  buttonClassName = '',
  menuClassName = '',
  width = '10rem',
  items,
}: IMenuProps) {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className={clsx('p-1', buttonClassName)}>
          {button}
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            style={{ width: width }}
            className={clsx(
              'absolute mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
              menuClassName,
            )}
          >
            {items.length === 0 ? (
              <>
                <p className="py-1 text-center text-xs font-medium text-gray-500">
                  Empty Dropdown
                </p>
              </>
            ) : (
              items.map(
                (
                  {
                    title,
                    as: Tag = 'a',
                    helperFunction = () => undefined,
                    className,
                  },
                  i,
                ) => (
                  <Menu.Item key={i}>
                    <Tag
                      className={clsx(
                        'flex w-full items-center text-sm',
                        className,
                      )}
                      onClick={helperFunction}
                    >
                      {title}
                    </Tag>
                  </Menu.Item>
                ),
              )
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
