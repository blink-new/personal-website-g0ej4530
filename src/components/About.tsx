import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { motion } from "framer-motion";

export function About() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", 
    "HTML/CSS", "Tailwind CSS", "Git", "UI/UX Design"
  ];

  return (
    <Section id="about" className="bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-secondary-900">About Me</h2>
            <div className="mt-6 space-y-4 text-secondary-700">
              <p>
                Hello! I'm a passionate developer with a strong focus on creating beautiful and functional web applications. 
                With several years of experience in the field, I've developed a keen eye for detail and a commitment to writing clean, efficient code.
              </p>
              <p>
                My journey in tech began when I built my first website as a teenager. Since then, I've been constantly learning and improving my skills, 
                staying up-to-date with the latest technologies and best practices in the industry.
              </p>
              <p>
                When I'm not coding, you can find me hiking in nature, reading science fiction, or experimenting with new recipes in the kitchen.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-secondary-50 p-8 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white rounded-full text-sm font-medium text-secondary-800 border border-secondary-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-secondary-900">Bachelor of Science in Computer Science</h4>
                  <p className="text-secondary-700">University Name, 2015-2019</p>
                </div>
                <div>
                  <h4 className="font-medium text-secondary-900">Web Development Bootcamp</h4>
                  <p className="text-secondary-700">Coding Academy, 2020</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}