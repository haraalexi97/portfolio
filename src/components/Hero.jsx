import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-between section">
      
      <motion.div
        initial={{ opacity:0, y:50 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.8 }}
        className="max-w-xl"
      >
        <p className="text-sky-400 mb-4">
          Full Stack Developer
        </p>

        <h1 className="text-6xl font-bold leading-tight">
          Hi, I'm <span className="gradient-text">Velan</span>
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          I build modern, responsive and interactive web applications with premium UI/UX.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 transition"
          >
            View Projects
          </a>

          <a
            href="YOUR_RESUME_LINK"
            className="px-6 py-3 rounded-xl border border-gray-500 hover:border-sky-400 transition"
          >
            Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={{ y:[0,-20,0] }}
        transition={{ repeat:Infinity,duration:3 }}
        className="hidden lg:block"
      >
        <div className="w-80 h-80 rounded-full bg-gradient-to-r from-sky-500 to-purple-600 blur-3xl opacity-40 absolute"></div>

        <img
          src="YOUR_IMAGE_LINK"
          alt=""
          className="w-80 relative rounded-full border-4 border-sky-400"
        />
      </motion.div>
    </section>
  );
}

export default Hero;