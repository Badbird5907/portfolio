"use client";

import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverProps,
} from "@nextui-org/react";

interface PopoverWrapperProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  popoverProps?: Omit<PopoverProps, "children">;
}
const PopoverWrapper = ({
  trigger,
  content,
  popoverProps = {},
}: PopoverWrapperProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover isOpen={open} placement={"bottom"} {...popoverProps}>
      <PopoverTrigger>
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onClick={(e) => {
            // check if its a tap or a click
            if (e.detail === 0) {
              setOpen(!open);
            }
          }}
        >
          {trigger}
        </div>
      </PopoverTrigger>
      <PopoverContent className={"serif"}>{content}</PopoverContent>
    </Popover>
  );
};

export default PopoverWrapper;
