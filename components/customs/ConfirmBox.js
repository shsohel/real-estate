import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaCross } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { useState } from 'react';

const ConfirmBox = (props) => {
  const { isOpen = false, setSure } = props;

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={(e) => {
          console.log(e);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0  bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed top-28 right-0 left-0 z-10 overflow-y-auto md:top-44">
          <div className="flex  justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="mr-4 block transform  text-left text-base transition md:my-1  md:px-4 ">
                <div className="  overflow-hidden bg-white px-4 pt-4 pb-4 shadow-2xl ">
                  <div className="h-[10rem] w-[16rem] flex justify-center items-center gap-4">
                    <div>
                      <div className="font-bold my-3">
                        Are you sure to continue?
                      </div>
                      <button className="border px-6 py-2 bg-primary rounded mx-1 text-white">
                        OK
                      </button>
                      <button className="border px-6 py-2 bg-danger text-white rounded mx-1">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export const AreYouConfirm = (isOk) => {
  const [sure, setSure] = useState(isOk);

  if (sure) {
    return <ConfirmBox isOpen={sure} setSure={setSure} />;
  }
  return null;
};
