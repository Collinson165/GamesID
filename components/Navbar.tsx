/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import { useAuth } from '../hooks/useAuth'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Games', href: '/games', current: false },
  { name: 'Sign in', href: '/signup', current: false },
]

const loggedNav = [
  { name: 'Home', href: '/', current: true },
  { name: 'Dashboard', href: '/dashboard', current: false },
  { name: 'Games', href: '/games', current: false },
  { name: 'Profile', href: '/account', current: false },
  { name: 'Sign Out', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const {user:loggedUser , loading, logout} = useAuth();
  const router = useRouter();
  const [navbarItems, setNavbarItems ] = useState(navigation)
  const [loggedNavbarItems, setLoggedNavbarItems] = useState(loggedNav)

  useEffect(() => {
    const updatedItems = navbarItems.map(item => ({
      ...item,
      current: item.href === router.pathname,
    }));

    const updatedLoggedItems = loggedNavbarItems.map(item => ({
      ...item,
      current: item.href === router.pathname
    }));

    setNavbarItems(updatedItems);
    setLoggedNavbarItems(updatedLoggedItems);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname])

  const userNavigation = [
    { name: 'Your Profile', href: '/account' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#'},
  ]
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full z-40">
        <Disclosure as="nav" className="bg-gray-300 dark:bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      /> */}
                      <Image alt="Your Company" src="/gameid.png" className="" width={100} height={100}  />
                      
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {loggedUser ? loggedNavbarItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-400 dark:bg-gray-900 text-gray-800 dark:text-white'
                                : 'text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        )): navbarItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-400 dark:bg-gray-900 text-gray-800 dark:text-white'
                                : 'text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <ThemeToggle />
                      <button
                        type="button"
                        className="rounded-full bg-gray-300 dark:bg-gray-800 p-1 text-gray-800 dark:text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            {loggedUser && <img className="h-8 w-8 rounded-full" src={loggedUser.photoURL} alt="" />}
                            {/* <Image className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" /> */}
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {loggedUser && userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {loggedUser ? loggedNavbarItems.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-400 dark:bg-gray-900 text-black dark:text-white' : 'text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  )) : navbarItems.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-400 dark:bg-gray-900 text-black dark:text-white' : 'text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      {loggedUser && <img className="h-10 w-10 rounded-full" src={loggedUser.photoURL} alt="" />}
                      {/* <Image className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" /> */}
                    </div>
                    <div className="ml-3">
                      {loggedUser && <div className="text-base font-medium leading-none text-white">{loggedUser.displayName}</div>}
                      {loggedUser && <div className="text-sm font-medium leading-none text-gray-400">{loggedUser.email}</div>}
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-300 dark:bg-gray-800 p-1 text-gray-800 dark:text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <ThemeToggle />
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {loggedUser && userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        onClick={item.name === 'Sign out' ? logout : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}