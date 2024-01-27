import Container from "@/components/Container/Container";
import Tlaptop from "@/assets/Tlaptop.png";
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

const TlaptopAnimat = {
  initial: { x: 0 },
  animate: {
    x: 20,
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

const About = () => {
  return (
    <Container className="h-screen pt-16 mt-24 grid grid-cols-1 md:grid-cols-2 gap-5 place-content-center">
      <div>
        <motion.div
          className="absolute lg:w-full mx-auto flex items-start justify-start"
          variants={TlaptopAnimat}
          initial="initial"
          animate="animate"
        >
          <img
            className="relative -left-44 object-contain"
            src={Tlaptop}
            alt=""
          />
        </motion.div>
      </div>
      <motion.div variants={intro} initial="hidden" animate="visible">
        <motion.h1
          variants={introChildren}
          className="text-5xl lg:text-7xl font-bold text-nowrap"
        >
          who we are
        </motion.h1>
        <motion.p
          variants={introChildren}
          className="text-dark_gray max-w-[50ch] my-10 mb-5 text-lg align-middle justify-center"
        >
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
          <span className="text-primary-foreground font-semibold">
            mackBook repairs
          </span>{" "}
          and diagnistics.
        </motion.p>
        <motion.div variants={introChildren}>
          <h1 className="text-primary text-7xl flex items-baseline justify-between px-10">
            <span>98%</span>
            <span>2k +</span>
          </h1>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default About;
