import { Popover, Transition } from "@headlessui/react";
import { useState } from "react";
import { usePopper } from "react-popper";

type Props = {
  Logo?: React.FC<any>;
  title?: string;
  children?: string;
};

export function Event({ Logo, title, children }: Props) {
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "right",
    modifiers: [{ name: "offset", options: { offset: [0, 100] } }],
  });
  return (
    <Popover className="relative">
      <Popover.Button
        ref={setReferenceElement}
        className="m-auto flex h-40 w-40 items-center justify-center rounded-full border-2 border-stark bg-transparent outline-none"
      >
        <div className="h-32 w-32 rounded-full bg-stark duration-300 hover:h-36 hover:w-36">
          <div className="flex h-full w-full items-center justify-center">
            {Logo && <Logo className="m-2 h-32 w-32 text-black" />}
          </div>
        </div>
      </Popover.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel
          key={title}
          className="h-fit w-96 rounded-lg bg-stark p-2 text-void"
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <h1 className="text-lg">{title}</h1>
          <p className="text-sm">{children}</p>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
