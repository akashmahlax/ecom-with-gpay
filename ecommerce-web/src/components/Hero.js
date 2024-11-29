import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div 
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-6xl font-bold">Discover Your Style</h1>
      <p className="mt-4 text-xl">Shop the best trends of the season</p>
      <button className="mt-6 px-6 py-3 bg-yellow-500 rounded-full text-lg hover:bg-yellow-600">
        Shop Now
      </button>
    </motion.div>
  );
};

export default Hero;