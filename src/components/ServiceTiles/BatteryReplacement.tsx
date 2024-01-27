import useScrollGrow from "@/Hooks/ScrollGrowHook";
import { motion } from "framer-motion";

const BatteryReplacement = () => {
  const { style, componentref } = useScrollGrow();
  return (
    <motion.div
      style={style}
      ref={componentref}
      className="bg-red-500 h-[415px] rounded-2xl col-span-12"
    ></motion.div>
  );
};

export default BatteryReplacement;
