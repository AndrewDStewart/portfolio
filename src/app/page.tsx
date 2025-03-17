import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center mb-16 gap-8">
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#FFC1B4] shadow-lg">
            <Image src="/profile.png" alt="Your Name" fill className="object-cover" />
          </div>
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#034C53]">Andrew Stewart</h1>
          <h2 className="text-xl text-[#007074] mb-4">Web Developer & Designer</h2>
          <p className="text-gray-600 mb-6">
            Passionate web developer with expertise in creating responsive, user-friendly applications. Dedicated to
            crafting clean code and innovative solutions.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Link
              href="/resume"
              className="px-4 py-2 rounded-md font-medium bg-[#007074] text-white hover:bg-[#034C53] transition-colors"
            >
              View Resume
            </Link>
            <Link
              href="/professional"
              className="px-4 py-2 rounded-md font-medium bg-[#F38C79] text-white hover:bg-[#F38C79]/90 transition-colors"
            >
              See My Work
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[#FFC1B4] inline-block text-[#034C53]">
          About Me
        </h2>
        <div className="bg-black rounded-lg shadow-md p-6 border border-gray-100 from-white to-[#FFC1B4]/10">
          <p className="mb-4">
            As a tattooer with a decade of industry experience, being able to solve solutions with skill and efficiency has 
            always been a priority. During COVID, I turned my attention to programming in light of the lockdowns, and decided
            to embark on a new journey, return to college, and find a new industry to stretch my problem solving skills in. 
          </p>
          <p>
            I excel in data structures and algorithms, as well as a notable proficiency in UI/UX design and product management. 
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[#FFC1B4] inline-block text-[#034C53]">
          Philosophy & Career Goals
        </h2>
        <div className="bg-black rounded-lg shadow-md p-6 border border-gray-100">
          <blockquote className="italic border-l-4 border-[#F38C79] pl-4 mb-4">
          &#39;The object in life is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane.&#39;
          - Marcus Aurelius
          </blockquote>
          <p className="mb-4">
            I think that success is marked by the insurmountable. To hit the mark is to never have needed it, and to aim beyond ones reach is to 
            seek a suitable goal. I look to make a genuine difference in the world one day. 
          </p>
          <p>I have succeeded in an industry, faced pandemic, and forced myself to adapt and grow in it&#39;s wake.</p>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[#FFC1B4] inline-block text-[#034C53]">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#034C53] text-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3 text-[#FFC1B4]">Frontend</h3>
            <ul className="space-y-2">
              <li>HTML5 & CSS3</li>
              <li>JavaScript/TypeScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="bg-[#007074] text-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3 text-[#FFC1B4]">Backend</h3>
            <ul className="space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>SQL Databases</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
          <div className="bg-[#F38C79] text-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3 text-white">Tools & Others</h3>
            <ul className="space-y-2">
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>AWS/Azure</li>
              <li>UI/UX Design</li>
              <li>Agile Methodology</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}


