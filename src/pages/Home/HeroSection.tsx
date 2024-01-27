import Container from "@/components/Container/Container";
import { Button } from "@/components/ui/button";
import macbook from "@/assets/macbook-exposed.jpg";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};
const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, type: "spring", bounce: 0.5 },
  },
};

const laptop = {
  initial: { y: 0, rotate: 0, scale: 5 },
  animate: {
    y: 20,
    rotate: -30,
    scale: 1,
    transition: {
      duration: 1,
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <Container className="h-screen pt-16 mt-24 grid grid-cols-1 md:grid-cols-2 gap-5 place-content-center">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            variants={introChildren}
            className="text-5xl lg:text-7xl font-bold text-nowrap"
          >
            <span className="text-gray">don't worry,</span>
            <br />
            <span>we'll fix it.</span>
          </motion.h1>
          <motion.p
            variants={introChildren}
            className="text-dark_gray max-w-[50ch] my-10 mb-5 text-lg"
          >
            welcome to{" "}
            <span className="text-primary-foreground font-semibold">
              iRepair
            </span>
            your one stop plase for All kinds of
            <span className="text-primary-foreground font-semibold">
              mackBook repairs
            </span>{" "}
            and diagnistics.
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-3/4 lg:w-full mx-auto flex items-center justify-center"
          variants={laptop}
          initial="initial"
          animate="animate"
        >
          <img className=" h-[70%] object-contain" src={macbook} alt="" />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
