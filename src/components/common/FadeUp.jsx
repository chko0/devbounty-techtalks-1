import { motion } from "framer-motion";

export default function FadeUp({
  children,
  className = "",
  delay = 0,
  x = 0,
  y = 20,
  duration = 0.8,
  motionProps = {},
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y, ...motionProps.initial }}
      whileInView={{ opacity: 1, x: 0, y: 0, ...motionProps.whileInView }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
        ...motionProps.transition,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
