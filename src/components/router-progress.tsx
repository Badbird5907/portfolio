import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";
import colors from "tailwindcss/colors";

import "nprogress/nprogress.css";

NProgress.configure({
  easing: "ease",
  minimum: 1,
  showSpinner: false,
  speed: 800,
});
const RouterLoadProgress = () => {
  const { events } = useRouter();
  useEffect(() => {
    events.on("routeChangeStart", () => NProgress.start());
    events.on("routeChangeComplete", () => NProgress.done());
    events.on("routeChangeError", () => NProgress.done());
  }, []);
  return (
    <style>{`
#nprogress .bar {
  height: 0.15rem;
  background-color: ${colors.blue[500]};
}`}</style>
  );
};

export default RouterLoadProgress;
