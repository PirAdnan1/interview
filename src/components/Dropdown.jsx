import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

// import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex flex-col items-center justify-center gap-0.5 shadow-sm hover:bg-gray-300 rounded-full w-9 h-9">
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={classNames(
                    active
                      ? "bg-gray-100 text-[#555E6D] text-lg"
                      : "text-[#555E6D] text-lg",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  FAQ's
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={classNames(
                    active
                      ? "bg-gray-100 text-[#555E6D] text-lg"
                      : "text-[#555E6D] text-lg",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Interview Tips
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={classNames(
                    active
                      ? "bg-gray-100 text-[#555E6D] text-lg"
                      : "text-[#555E6D] text-lg",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Send Feedback
                </Link>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active
                        ? "bg-gray-100 text-[#555E6D] text-lg"
                        : "text-[#555E6D] text-lg",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    Microphone Help
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
