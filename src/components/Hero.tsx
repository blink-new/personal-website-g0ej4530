import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative pt-20 lg:pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 -z-10" />
      <Container className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
        <div className="max-w-3xl mx-auto text-center py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl md:text-6xl">
              Hi, I'm <span className="text-primary-600">Your Name</span>
            </h1>
            <p className="mt-6 text-xl text-secondary-700">
              A passionate developer creating beautiful and functional web experiences
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                View My Work
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center pb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="animate-bounce"
          >
            <Button
              variant="ghost"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Scroll down"
            >
              <ArrowDown size={24} />
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}