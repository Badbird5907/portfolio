declare global {
  interface Window {
    captchaToken: string;
  }

}

// HACK!
declare module "framer-motion" {
  interface MotionProps {
    className?: string;
    onClick?: () => void;
  }
}


export {};
