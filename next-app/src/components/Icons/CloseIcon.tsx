import { motion, AnimatePresence } from "framer-motion";

type closeIconProps = {
  className: string;
  onClick: () => void;
};

export const CloseIcon = ({ onClick, className }: closeIconProps) => {
  return (
    <AnimatePresence>
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        initial="hidden"
        animate="visible"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
        onClick={onClick}
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
          }}
          strokeWidth={1.5}
          strokeDasharray="0 1"
          fill="none"
          d="M6 18L18 6M6 6l12 12"
        ></motion.path>
      </motion.svg>
    </AnimatePresence>
  );
};
