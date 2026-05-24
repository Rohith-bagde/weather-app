import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >

        <h1 className="text-7xl font-bold mb-4">
          WeatherSphere
        </h1>

        <p className="text-gray-400 text-xl mb-8">
          AI Powered Weather Analytics
        </p>

        <Link
          to="/dashboard"
          className="bg-blue-600 px-8 py-4 rounded-xl text-lg"
        >
          Launch Dashboard
        </Link>

      </motion.div>
    </div>
  );
}