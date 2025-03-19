import { Container } from "./ui/Container";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Your Name</h3>
            <p className="mt-2 text-secondary-300">Building beautiful digital experiences</p>
          </div>

          <div className="mt-6 md:mt-0">
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-secondary-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-secondary-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-secondary-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-800 text-center text-secondary-400">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}