import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Database,
  Server,
  Smartphone,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import {
  FaJava,
  FaPython,
  FaDatabase,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaLeaf,
  FaServer,
  FaCubes,
  FaGitAlt,
  FaDocker,
  FaFlask,
  FaSyncAlt,
  FaVial,
  FaLink,
  FaBrain,
  FaRobot,
  FaLightbulb,
  FaPaintBrush,
  FaStream,
  FaReact,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import profileImage from "../assets/profile.jpeg";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "experience",
        "certifications",
        "skills",
        // "projects",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  function downloadCV() {
    // // Use the imported PDF file
    // const link = document.createElement('a');
    // link.href = cvPDF;
    // link.download = "Shelomi_De_Alwis_CV.pdf";

    // // Append to the document
    // document.body.appendChild(link);

    // // Trigger click event
    // link.click();

    // // Clean up
    // document.body.removeChild(link);
    window.open(
      "https://drive.google.com/file/d/1mDHcjkRcJ_mWs2if9rVxV2Czx6GvHHAt/view?usp=sharing",
      "_blank"
    );
  }

  const skills = [
    // frontend: ['Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    // backend: ['SpringBoot', 'Python', 'Java', 'RESTful APIs', 'GraphQL'],
    // database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    // tools: ['Git', 'Docker', 'AWS', 'Kubernetes', 'Jenkins', 'Postman']
    { name: "Java", icon: <FaJava className="text-red-500" size={24} /> },
    { name: "Python", icon: <FaPython className="text-blue-500" size={24} /> },
    { name: "SQL", icon: <FaDatabase className="text-orange-400" size={24} /> },
    { name: "Angular", icon: <FaAngular className="text-red-600" size={24} /> },
    {
      name: "React",
      icon: <FaReact className="text-cyan-500" size={24} />,
    },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={24} /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400" size={24} /> },
    {
      name: "Spring Boot",
      icon: <FaLeaf className="text-green-500" size={24} />,
    },
    {
      name: "REST APIs",
      icon: <FaServer className="text-purple-400" size={24} />,
    },
    {
      name: "Microservices",
      icon: <FaCubes className="text-blue-300" size={24} />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-400" size={24} />,
    },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" size={24} /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" size={24} /> },
    {
      name: "Postman",
      icon: <FaFlask className="text-orange-500" size={24} />,
    },
    { name: "Agile", icon: <FaSyncAlt className="text-blue-400" size={24} /> },
    {
      name: "Unit Testing",
      icon: <FaVial className="text-green-500" size={24} />,
    },
    {
      name: "Blockchain",
      icon: <FaLink className="text-blue-500" size={24} />,
    },
    {
      name: "Artificial Intelligence (AI)",
      icon: <FaBrain className="text-purple-500" size={24} />,
    },
    {
      name: "Machine Learning (ML)",
      icon: <FaRobot className="text-indigo-500" size={24} />,
    },
    {
      name: "RAG",
      icon: <FaLightbulb className="text-yellow-400" size={24} />,
    },
    {
      name: "UI/UX",
      icon: <FaPaintBrush className="text-pink-500" size={24} />,
    },
    {
      name: "Apache Kafka",
      icon: <FaStream className="text-cyan-400" size={24} />,
    },
  ];

  // const projects = [
  //   {
  //     title: "E-Commerce Platform",
  //     description:
  //       "Full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment integration, and admin dashboard.",
  //     tech: ["React", "Node.js", "MongoDB", "Stripe API"],
  //     github: "#",
  //     live: "#",
  //     image:
  //       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
  //   },
  //   {
  //     title: "Task Management App",
  //     description:
  //       "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
  //     tech: ["React", "Socket.io", "Express.js", "PostgreSQL"],
  //     github: "#",
  //     live: "#",
  //     image:
  //       "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
  //   },
  //   {
  //     title: "Weather Dashboard",
  //     description:
  //       "Interactive weather dashboard with location-based forecasts, charts, and historical data visualization using external APIs.",
  //     tech: ["React", "Chart.js", "Weather API", "Geolocation"],
  //     github: "#",
  //     live: "#",
  //     image:
  //       "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Experience",
                "Certifications",
                "Skills",
                // "Projects",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800 rounded-lg mt-2 p-4">
              {[
                "Home",
                "About",
                "Experience",
                "Certifications",
                "Skills",
                // "Projects",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-700/20"></div>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Shelomi De Alwis
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Associate Software Engineer | Full Stack Software Developer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about creating innovative web solutions with modern
            technologies. Experienced in both frontend and backend development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("experience")}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              View My Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border border-gray-600 rounded-full hover:bg-gray-800 transition-all"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => {
            const nextSection = document.getElementById("about");
            nextSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={profileImage}
                alt="Profile"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm an enthusiastic Associate Software Engineer with hands-on
                experience across the full software development lifecycle. I’ve
                contributed to production-grade applications using Angular,
                Spring Boot, Python, and Kafka, and thrive in agile development
                environments.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I enjoy solving real-world problems and building scalable,
                maintainable systems. With a strong foundation in both academics
                and practical development, I'm passionate about continuous
                learning and delivering clean, high-quality code.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin size={20} className="text-blue-400" />
                  <span>230/33/1, Alpitiya Colony, Polgahanga, Weligalla.</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail size={20} className="text-blue-400" />
                  <span>shelomi20nipunika@gmail.com</span>
                </div>
              </div>
              <button
                onClick={downloadCV}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all"
              >
                <Download size={20} />
                Download CV
              </button>
              {/* <a
                href={cvPDF}
                download="Shelomi_De_Alwis_CV.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all"
              >
                Download Resume
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>

          <div className="space-y-12">
            {/* Experience Item 1 */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/70 transition-all">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-1/4">
                  <span className="text-blue-400 font-semibold">
                    DEC 2024 - PRESENT
                  </span>
                  <h3 className="text-xl font-bold mt-1">
                    Associate Software Engineer
                  </h3>
                  <p className="text-gray-300 mt-1">
                    Zafer AI | Nugegoda, Sri Lanka
                  </p>
                </div>
                <div className="md:w-3/4">
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      Contributed to AI-powered applications as part of a
                      cross-functional team delivering production-grade
                      solutions.
                    </li>
                    <li>
                      Designed and implemented frontend features like AI Search,
                      PDF Viewer, and Doc Maker using Angular.
                    </li>
                    <li>
                      Led research and integration of Angular-compatible
                      libraries for enhanced functionality.
                    </li>
                    <li>
                      Developed backend features for tools like Document Chat
                      and Summary using Spring Boot and Python.
                    </li>
                    <li>
                      Collaborated closely with the CTO on architecture and
                      technical decisions.
                    </li>
                    <li>
                      Managed deployments in development environments and
                      improved system stability by resolving bugs.
                    </li>
                    <li>
                      Worked alongside Design, UI, QA, and DevOps teams for
                      smooth delivery and agile workflows.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-gray-700 text-xs rounded-full text-blue-300">
                      Angular
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-xs rounded-full text-blue-300">
                      AI Applications
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-xs rounded-full text-blue-300">
                      Frontend Development
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-xs rounded-full text-blue-300">
                      Backend Development
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/70 transition-all">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-1/4">
                  <span className="text-blue-400 font-semibold">
                    MAY 2024 - NOV 2024
                  </span>
                  <h3 className="text-xl font-bold mt-1">
                    Software Engineer Intern
                  </h3>
                  <p className="text-gray-300 mt-1">
                    Zorrosign | Nugegoda, Sri Lanka
                  </p>
                </div>
                <div className="md:w-3/4">
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      Developed and enhanced an IoT device management system
                      using Spring Boot and MongoDB.
                    </li>
                    <li>
                      Improved email template maintainability in .NET
                      notification systems; completed 100+ unit tests for
                      quality assurance.
                    </li>
                    <li>
                      Contributed to the Document Autofill feature successfully
                      deployed to production.
                    </li>
                    <li>
                      Built a POC for large file handling (up to 1GB) using
                      frontend-based chunking techniques.
                    </li>
                    <li>
                      Documented system architecture and technical decisions
                      using ADRs.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-gray-700 text-xs rounded-full text-blue-300">
                      Spring Boot
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-xs rounded-full text-blue-300">
                      MongoDB
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-xs rounded-full text-blue-300">
                      .NET
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-xs rounded-full text-blue-300">
                      Unit Testing
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-xs rounded-full text-blue-300">
                      IOT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="certifications" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Education & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education Column */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14v7"
                  />
                </svg>
                Education
              </h3>

              <div className="space-y-8">
                {/* Degree 1 */}
                <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/70 transition-all">
                  <span className="text-blue-400 font-semibold">
                    2021 - 2025
                  </span>
                  <h4 className="text-xl font-bold mt-1">
                    Bachelor of Information and Communication Technology (Hons)
                  </h4>
                  <p className="text-gray-300">Software Technology</p>
                  <p className="text-gray-300 mt-1">
                    University of Sri Jayewardenepura (Reading)
                  </p>
                  <div className="mt-2 px-3 py-1 bg-blue-500/20 rounded-lg inline-block">
                    <span className="text-blue-300 font-semibold">
                      GPA 3.76
                    </span>
                  </div>
                </div>

                {/* Degree 2 */}
                <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/70 transition-all">
                  <span className="text-blue-400 font-semibold">2021</span>
                  <h4 className="text-xl font-bold mt-1">
                    Diploma in Web Engineering
                  </h4>
                  <p className="text-gray-300 mt-1">Esoft Metro Campus</p>
                </div>

                {/* Degree 3 */}
                <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/70 transition-all">
                  <span className="text-blue-400 font-semibold">2021</span>
                  <h4 className="text-xl font-bold mt-1">
                    Diploma in Software Engineering
                  </h4>
                  <p className="text-gray-300 mt-1">Esoft Metro Campus</p>
                </div>

                {/* Degree 4 */}
                <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/70 transition-all">
                  <span className="text-blue-400 font-semibold">2019</span>
                  <h4 className="text-xl font-bold mt-1">GCE A/L</h4>
                  <p className="text-gray-300 mt-1">
                    Pushpadana Girls' College, Kandy
                  </p>
                  <p className="text-gray-300">Technology Stream</p>
                  <div className="mt-2 px-3 py-1 bg-blue-500/20 rounded-lg inline-block">
                    <span className="text-blue-300 font-semibold">
                      10th in Kandy District
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Column */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Certifications
              </h3>

              <div className="space-y-4">
                <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/70 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold">RAG with MongoDB</h4>
                      <p className="text-gray-300">MongoDB</p>
                    </div>
                    <span className="text-blue-400 text-sm">May 2025</span>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/70 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold">React Basics</h4>
                      <p className="text-gray-300">Meta</p>
                    </div>
                    <span className="text-blue-400 text-sm">May 2024</span>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/70 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold">
                        Foundations of User Experience (UX) Design
                      </h4>
                      <p className="text-gray-300">Google</p>
                    </div>
                    <span className="text-blue-400 text-sm">March 2024</span>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/70 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold">
                        AI/ML Engineer Stage 1 & 2
                      </h4>
                      <p className="text-gray-300">SLIIT</p>
                    </div>
                    <span className="text-blue-400 text-sm">January 2024</span>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/70 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold">Python Programming</h4>
                      <p className="text-gray-300">University of Moratuwa</p>
                    </div>
                    <span className="text-blue-400 text-sm">December 2023</span>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/70 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold">
                        Program Essentials in Python
                      </h4>
                      <p className="text-gray-300">Cisco</p>
                    </div>
                    <span className="text-blue-400 text-sm">June 2021</span>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/70 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold">
                        Introduction to Cybersecurity
                      </h4>
                      <p className="text-gray-300">Cisco</p>
                    </div>
                    <span className="text-blue-400 text-sm">March 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center"
              >
                <div className="mb-3">{skill.icon}</div>
                <span className="text-sm text-gray-300 text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-xs rounded-full text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new opportunities and interesting
            projects.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl">
              <Mail className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a
                href="mailto:shelomi20nipunika@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                shelomi20nipunika@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl">
              <Phone className="text-green-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a
                href="tel:+94-712711445"
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                +94-712711445
              </a>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl">
              <Linkedin className="text-blue-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/shelomi-nipunika/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                Connect with me
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/dashboard"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shelomi-nipunika/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:shelomi20nipunika@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Shelomi De Alwis. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
