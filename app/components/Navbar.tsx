"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Inicio", href: "/", current: true },
  // { name: "Nosotros", href: "/about", current: false },
  // { name: "Contacto", href: "/contact", current: false },
  // { name: "FAQ", href: "/faq", current: false },
];

const navigationFull = [
  { name: "Inicio", href: "/", current: true },
  { name: "Nosotros", href: "/about", current: false },
  { name: "Contacto", href: "/contact", current: false },
  { name: "FAQ", href: "/faq", current: false },
  { name: "Musculacion", href: "/GymTemplate1/musculacion", current: false },
  { name: "Crossfit", href: "/GymTemplate1/crossfit", current: false },
  { name: "Spinning", href: "/GymTemplate1/spinning", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const pathname = usePathname();
  return (
    <Disclosure
      as="nav"
      className="bg-[#f8f9fb] md:min-h-[150px] z-10 md:shadow-3xl sticky"
      style={{ filter: "drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.5))" }}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-18 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  {open ? (
                    <XMarkIcon className="block h-10 w-10" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-10 w-10" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start min-h-[100px]">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="max-w-[200px] "
                    src="logo.png"
                    alt="Logo Gimnasio"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block md:flex md:flex-1 md:justify-end">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          pathname == item.href
                            ? "text-[#bf0600]"
                            : "text-gray-400",
                          "group flex flex-row text-center items-center rounded-md px-3 py-2 text-lg font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <span className="bg-left-bottom bg-gradient-to-r from-[#bf0600] to-[#bf0600] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] all duration-500 ease-out">
                          {item.name}
                        </span>
                      </a>
                    ))}
                    <Menu
                      as="div"
                      className="relative ml-3 text-center inline-flex items-center"
                    >
                      <div className="flex items-center">
                        <Menu.Button className="group text-gray-300 rounded-md px-3 py-2 text-lg font-medium all duration-300 ease-in-out ">
                          <span
                            className={classNames(
                              pathname.startsWith("/GymTemplate1/musculacion") ||
                                pathname.startsWith("/GymTemplate1/crossfit") ||
                                pathname.startsWith("/GymTemplate1/spinning") 
                                ? "text-[#bf0600]"
                                : "text-gray-400",
                              "group flex flex-row text-center items-center rounded-md px-3 py-2 text-lg font-medium bg-left-bottom bg-gradient-to-r from-[#bf0600] to-[#bf0600] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] all duration-500 ease-out"
                            )}
                          >
                            Actividades
                            <svg
                              className="w-2.5 h-2.5 ml-2.5 "
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 10 6"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="3"
                                d="m1 1 4 4 4-4"
                              />
                            </svg>
                          </span>
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-3000"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none top-[5.5rem]" style={{ filter: "drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.5))" }}>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="GymTemplate1/musculacion"
                                className={classNames(
                                  active ? "bg-gray-100 " : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Musculacion
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="GymTemplate1/crossfit"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Crossfit
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="GymTemplate1/spinning"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Spinning
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 rounded-br-lg rounded-bl-lg shadow-2xl">
              {navigationFull.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    pathname == item.href
                      ? "bg-gray-900 text-white"
                      : "text-gray-500",
                    "block border-b-2 last:border-b-0 px-3 py-[0.55rem] text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
