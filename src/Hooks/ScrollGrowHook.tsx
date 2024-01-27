import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrollGrow = () => {
  const componentref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentref,
    offset: ["0 1", "1.1 1"],
  });
  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  const style = {
    scale: scaleValues,
    opacity: opacityValues,
  };
  return { componentref, style };
};

export default useScrollGrow;
