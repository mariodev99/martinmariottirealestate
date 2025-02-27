import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrimaryButton({ text }: { text: string }) {
  return (
    <div className="flex justify-center">
      <Link href="/contacto" className="w-full md:max-w-lg">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="flex items-center justify-between p-1 gap-3 bg-greenprimary text-black rounded-full text-lg font-semibold shadow-md transition-all duration-300"
        >
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="pl-6"
          >
            {text}
          </motion.span>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ x: 5 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-black h-14 w-14 rounded-full flex justify-center items-center shrink-0"
          >
            <ArrowRight color="white" size={24} />
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
}
