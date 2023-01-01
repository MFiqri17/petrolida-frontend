import { twMerge } from 'tailwind-merge'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function classNames(...args: any[]) {
  // Initialize an empty array to store the class names
  const classNames = []

  // Iterate through the arguments
  for (const arg of args) {
    // If the argument is a string, add it to the array
    if (typeof arg === 'string') {
      classNames.push(arg)
    }
    // If the argument is an object, iterate through its keys
    else if (typeof arg === 'object') {
      for (const key in arg) {
        // If the value of the key is truthy, add the key (which represents the class name) to the array
        if (arg[key]) {
          classNames.push(key)
        }
      }
    }
  }

  // Join the class names in the array with a space and return the resulting string
  return twMerge(classNames.join(' '))
}
