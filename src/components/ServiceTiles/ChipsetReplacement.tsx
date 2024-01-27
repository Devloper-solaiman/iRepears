import useScrollGrow from "@/Hooks/ScrollGrowHook";
import { motion } from "framer-motion";
const ChipsetReplacement = () => {
  const { style, componentref } = useScrollGrow();
  return (
    <motion.div
      style={style}
      ref={componentref}
      className="bg-red-500 h-[415px] rounded-2xl col-span-6 lg:col-span-5"
    ></motion.div>
  );
};

export default ChipsetReplacement;
