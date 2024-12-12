"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function Form() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!form.current) return;

    try {
      await emailjs.sendForm(
        "service_fzlkhuh",
        "template_qynz1rw",
        form.current,
        "CqOt_i2a7x9ig0tV6"
      );
      setStatus("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" z-20 relative">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block relative h-[600px] rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
            <Image
              src="/images/contact.jpg"
              alt="Contact illustration"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-8 left-8 bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Get in touch
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                We&apos;d love to hear from you
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - Form */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-lg shadow-md mb-6"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Contact us today!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our experts are here to guide you every step of the way, from
                planning to launch. Reach out now to start bringing your vision
                to life!
              </p>
              <a
                href="mailto:support@shradertechnologies.com"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 
                    transition duration-200 flex items-center gap-2 
                    text-xs md:text-sm lg:text-base break-all md:break-normal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="truncate">
                  support@shradertechnologies.com
                </span>
              </a>
            </motion.div>

            <motion.form
              ref={form}
              onSubmit={sendEmail}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="space-y-6">
                {/* Name Input */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="relative"
                >
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Name"
                    className="peer w-full px-4 py-3 
                        border rounded-md outline-none
                        bg-white dark:bg-gray-700 
                        text-gray-700 dark:text-white
                        border-gray-300 dark:border-gray-600
                        focus:border-blue-500 dark:focus:border-blue-400
                        placeholder-transparent"
                  />
                  <label
                    className="absolute left-4 -top-2.5 px-1
                      bg-white dark:bg-gray-700
                      text-sm text-gray-600 dark:text-gray-300
                      transition-all duration-300
                      peer-placeholder-shown:text-base
                      peer-placeholder-shown:text-gray-500
                      peer-placeholder-shown:top-3.5
                      peer-focus:-top-2.5 
                      peer-focus:text-sm
                      peer-focus:text-blue-500"
                  >
                    Name
                  </label>
                </motion.div>

                {/* Email Input */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="relative"
                >
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Email"
                    className="peer w-full px-4 py-3 
                        border rounded-md outline-none
                        bg-white dark:bg-gray-700 
                        text-gray-700 dark:text-white
                        border-gray-300 dark:border-gray-600
                        focus:border-blue-500 dark:focus:border-blue-400
                        placeholder-transparent"
                  />
                  <label
                    className="absolute left-4 -top-2.5 px-1
                      bg-white dark:bg-gray-700
                      text-sm text-gray-600 dark:text-gray-300
                      transition-all duration-300
                      peer-placeholder-shown:text-base
                      peer-placeholder-shown:text-gray-500
                      peer-placeholder-shown:top-3.5
                      peer-focus:-top-2.5 
                      peer-focus:text-sm
                      peer-focus:text-blue-500"
                  >
                    Email
                  </label>
                </motion.div>

                {/* Message Input */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="relative"
                >
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Message"
                    className="peer w-full px-4 py-3 
                        border rounded-md outline-none
                        bg-white dark:bg-gray-700 
                        text-gray-700 dark:text-white
                        border-gray-300 dark:border-gray-600
                        focus:border-blue-500 dark:focus:border-blue-400
                        placeholder-transparent
                        resize-none"
                  />
                  <label
                    className="absolute left-4 -top-2.5 px-1
                      bg-white dark:bg-gray-700
                      text-sm text-gray-600 dark:text-gray-300
                      transition-all duration-300
                      peer-placeholder-shown:text-base
                      peer-placeholder-shown:text-gray-500
                      peer-placeholder-shown:top-3.5
                      peer-focus:-top-2.5 
                      peer-focus:text-sm
                      peer-focus:text-blue-500"
                  >
                    Message
                  </label>
                </motion.div>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 bg-blue-600 
                    hover:bg-blue-700 text-white rounded-lg 
                    transition-all duration-300
                    disabled:opacity-70 disabled:cursor-not-allowed
                    flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <div className="animate-spin h-5 w-5 border-2 border-white rounded-full border-t-transparent" />
                ) : (
                  <span>Send Message</span>
                )}
              </motion.button>

              {status && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center ${
                    status.includes("success")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {status}
                </motion.p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}
