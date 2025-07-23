import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { SiStackoverflow } from 'react-icons/si';
import Navbar from "./components/navbar";
import Project from './components/Project';

export default function Home() {
  return (
    <div className="">
      <div className="h-[700px] w-full">
        <Navbar />

        <div className="h-full mx-[8rem] border-white border-x-[1px] dash-v">
          <div className="max-w-6xl mx-auto">
            {/* Main heading */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-2">
                Hey, I'm
              </h1>
              <h2 className="text-5xl md:text-7xl font-bold text-orange-400">
                Pankaj Kumar
              </h2>
            </div>

            {/* Role and description */}
            <div className="mb-16 max-w-3xl">
              <p className="text-xl text-gray-300 mb-4">Software Engineer @ <span className="text-yellow-400">Sprung Labs</span></p>
              <p className="text-xl text-gray-300 leading-relaxed">
                A software development agency dedicated to crafting exceptional digital products. We specialize in building modern SaaS platforms, websites, mobile apps, and
                <span className="relative inline-block mx-1">
                  <span className="relative z-10">internal tools</span>
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-yellow-400/30 -skew-x-6"></span>
                </span>
                tailored for performance, scalability, and
                <span className="relative inline-block mx-1">
                  <span className="relative z-10">great user experience</span>
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-yellow-400/30 -skew-x-6"></span>
                </span>.
              </p>
            </div>

            {/* Contact info and social links */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              {/* Email */}
              <div className="flex items-center group">
                <FiMail className="w-5 h-5 mr-3 text-orange-300" />
                <a href="mailto:hello@manaskhandelwal.com" className="text-lg text-orange-300 hover:text-orange-200 transition-colors">
                  hello@manaskhandelwal.com
                </a>
              </div>

              {/* Social links */}
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <FiGithub className="w-5 h-5" />, name: "GitHub" },
                  { icon: <FiLinkedin className="w-5 h-5" />, name: "LinkedIn" },
                  { icon: <FiTwitter className="w-5 h-5" />, name: "Twitter" },
                  { icon: <SiStackoverflow className="w-5 h-5" />, name: "Stack Overflow" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center group transition-colors"
                    aria-label={social.name}
                  >
                    <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-300 transition-colors">
                      {social.icon}
                    </div>
                    <span className="text-lg font-medium text-orange-400 group-hover:text-orange-300 transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Project />
    </div>
  );
}
