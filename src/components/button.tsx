"use client";

import React, { useEffect } from "react";
import { Button as NextUIButton, ButtonProps } from "@nextui-org/react";
import { PressEvent } from "@react-types/shared";
import { FaCheck, FaX } from "react-icons/fa6";
import { useDynamicModal } from "@/components/dynamic-modal";

const CustomButton = ({
  modalOnError = true,
  showStatusColor = true,
  ...props
}: {
  onClickLoading?: (e: PressEvent) => Promise<any>;
  onClick?: (e: PressEvent) => void;
  onPress?: (e: PressEvent) => void;
  toggle?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  modalOnError?: boolean;
  showStatusColor?: boolean;
  closeModal?: () => void;
  href?: string;
} & React.ComponentProps<typeof NextUIButton>) => {
  const { showModal, closeModal } = useDynamicModal();
  const [loading, setLoading] = React.useState(false);
  const [statusIcon, setStatusIcon] = React.useState<React.ReactNode | null>(
    null
  );
  const [btnColor, setBtnColor] = React.useState<
    ButtonProps["color"] | undefined
  >(props.color);
  useEffect(() => {
    setBtnColor(props.color);
  }, [props.color]);
  const propsCopy = { ...props };
  delete propsCopy.onClickLoading; // fix invalid event handler error
  delete propsCopy.onClick;
  delete propsCopy.color;
  delete propsCopy.closeModal;
  delete propsCopy.href;
  if (!propsCopy.isDisabled && propsCopy.disabled) {
    propsCopy.isDisabled = propsCopy.disabled;
  }
  return (
    <>
      <NextUIButton
        disabled
        color={btnColor === "default" ? "primary" : btnColor || "primary"}
        onPress={(e: PressEvent) => {
          if (props.disabled) return;
          if (props.href) {
            // router.push(props.href);
            if (props.href.startsWith("http")) {
              window.open(props.href, "_blank"); // TODO find a better sol
            } else window.history.pushState({}, "", props.href);
          }
          if (props.onClickLoading) {
            setLoading(true);
            const promise = props.onClickLoading(e);
            if (promise) {
              let error = false;
              promise
                .catch((e: any) => {
                  error = true;
                  if (e?.response) {
                    // if there is res.data.message, show it
                    if (e.response.data.message) {
                      showModal({
                        title: "Error",
                        body: e.response.data.message,
                        footer: (
                          <NextUIButton color={"danger"} onPress={closeModal}>
                            Close
                          </NextUIButton>
                        ),
                      });
                    }
                  }
                })
                .finally(() => {
                  setLoading(false);
                  if (showStatusColor) {
                    const originalColor = props.color;
                    setBtnColor(error ? "danger" : "success");
                    setStatusIcon(error ? <FaX /> : <FaCheck />);
                    setTimeout(() => {
                      setBtnColor(originalColor);
                      setStatusIcon(null);
                      if (props.closeModal) {
                        props.closeModal();
                      }
                    }, 1000);
                  }
                });
            } else {
              setLoading(false);
            }
          } else if (props.onClick) {
            props.onClick(e);
          } else if (props.onPress) {
            props.onPress(e);
          } else if (props.toggle) {
            props.toggle[1](!props.toggle[0]);
          }
        }}
        isLoading={loading}
        {...propsCopy}
      >
        {statusIcon}
        {props.children}
      </NextUIButton>
    </>
  );
};

export default CustomButton;
