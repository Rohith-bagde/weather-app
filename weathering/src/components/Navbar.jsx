import { motion } from "framer-motion";
import { WiDayCloudy } from "react-icons/wi";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav
      className="
      sticky
      top-0
      z-50
      backdrop-blur-md
      bg-slate-950/80
      border-b
      border-slate-800
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        justify-between
        items-center
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          flex
          items-center
          gap-3
          "
        >
          <motion.div
            animate={{
              rotate: [
                0,
                10,
                -10,
                0,
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
          >
            <WiDayCloudy
              size={55}
              className="
              text-blue-400
              drop-shadow-lg
              "
            />
          </motion.div>

          <div>
            <h1
              className="
              weathering-glow
              text-4xl
              font-extrabold
              bg-gradient-to-r
              from-blue-400
              via-cyan-300
              to-sky-500
              bg-clip-text
              text-transparent
              "
            >
              Weathering
            </h1>

            <p
              className="
              text-xs
              tracking-[4px]
              text-slate-400
              "
            >
              REAL-TIME WEATHER ANALYTICS
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <ThemeToggle />
        </motion.div>
      </div>
    </nav>
  );
}