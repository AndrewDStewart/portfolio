import Link from "next/link"

export default function Professional() {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[#FFC1B4] inline-block text-[#034C53]">
          Professional Summary
        </h1>
  
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-[#007074]">Professional Work Samples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-black rounded-lg shadow-lg overflow-hidden">
                <div className="h-56 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Project {item} Screenshot
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">Project Title {item}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project, including its purpose, your role, and the technologies used.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Node.js</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">MongoDB</span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="px-3 py-1 bg-[#007074] text-white rounded text-sm hover:bg-[#034C53] transition-colors"
                    >
                      View Live
                    </a>
                    <a
                      href="#"
                      className="px-3 py-1 bg-gray-200 text-gray-800 rounded text-sm hover:bg-gray-300 transition-colors"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        <section className="mb-12 bg-gray rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-[#007074]">Letters of Recommendation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium">Recommendation from [Name]</h3>
              <p className="text-gray-600 text-sm">[Position], [Company]</p>
              <p className="mt-2 italic">
                "Brief excerpt from the recommendation letter highlighting your skills and qualities..."
              </p>
              <button className="mt-3 px-3 py-1 text-sm rounded bg-[#F38C79] text-white hover:bg-[#F38C79]/90 transition-colors">
                View Full Letter
              </button>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium">Recommendation from [Name]</h3>
              <p className="text-gray-600 text-sm">[Position], [Company]</p>
              <p className="mt-2 italic">
                "Brief excerpt from the recommendation letter highlighting your skills and qualities..."
              </p>
              <button className="mt-3 px-3 py-1 text-sm rounded bg-[#F38C79] text-white hover:bg-[#F38C79]/90 transition-colors">
                View Full Letter
              </button>
            </div>
          </div>
        </section>
  
        <section className="mb-12 bg-grey rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-[#007074]">Awards and Recognition</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-[#F38C79] pl-4">
              <h3 className="font-medium">Award Name</h3>
              <p className="text-gray-600">Awarding Organization | Year</p>
              <p className="mt-1">Brief description of the award and why you received it.</p>
            </div>
            <div className="border-l-4 border-[#F38C79] pl-4">
              <h3 className="font-medium">Award Name</h3>
              <p className="text-gray-600">Awarding Organization | Year</p>
              <p className="mt-1">Brief description of the award and why you received it.</p>
            </div>
          </div>
        </section>
  
        <section>
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[#FFC1B4] inline-block text-[#034C53]">
            Capstone Project
          </h2>
  
          <div className="space-y-8">
            <div className="bg-gray rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-[#007074]">Project Summary</h3>
              <p>The project titled "Daycare Toddlers Attendance System" is a proposed solution 
                aimed at improving attendance management and communication in daycare centers. 
                Developed by the team "Daycare Buddy," this system aims to 
                automate attendance tracking, replacing manual processes prone to errors and 
                inefficiency. Each child is tagged with an encrypted JWT key, enabling their attendance to be 
                logged with timestamps when submitted, while real-time SMS notifications are sent to 
                parents upon their child's entry or exit. This enhances security, communication, 
                and accountability, addressing current challenges like inadequate tracking measures
                 and communication delays. The desired outcomes include operational efficiency, 
                 improved parental satisfaction, increased safety, and differentiation in the daycare
                  market. The project involves students using the MERN stack for development and 
                  integrating RFID functionality and SMS notifications. The internal team supports 
                  SMS subscription management. Completion is targeted by
                   March 30, 2025. </p>
            </div><div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          href="/projectsum.pdf"
          target="_blank"
          download
          className="inline-flex items-center px-4 py-2 rounded-md font-medium bg-[#007074] text-white hover:bg-[#034C53] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Project Summary
        </Link>
      </div>

      <div className="w-full h-[800px] border border-gray-300 rounded-lg overflow-hidden shadow-lg mb-12">
        <iframe src="/projectsum.pdf" className="w-full h-full" title="projectsum"></iframe>
      </div>
    </div>
  
            <div className="bg-gray rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-[#007074]">Project Vision</h3>
              <p>The "Daycare Attendance System with SMS Technology" project focuses on automating 
                attendance management for daycare centers. It records children's attendance and sends
                 real-time SMS notifications to parents, enhancing communication and ensuring peace 
                 of mind. By streamlining operations and eliminating manual tracking methods, the 
                 system reduces administrative workload, improves security, and fosters trust between 
                 daycare centers and parents. Developed using the MERN stack, the project aims to 
                 deliver a user-friendly, efficient solution for daycare management.</p>
            </div>
            <div className="mb-6">
        <Link
          href="/projectsum.pdf"
          target="_blank"
          download
          className="inline-flex items-center px-4 py-2 rounded-md font-medium bg-[#007074] text-white hover:bg-[#034C53] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Project Vision
        </Link>
      </div>

      <div className="w-full h-[800px] border border-gray-300 rounded-lg overflow-hidden shadow-lg mb-12">
        <iframe src="/projectvis.pdf" className="w-full h-full" title="Resume"></iframe>
      </div>
  
            <div className="bg-gray rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-[#007074]">Project/Business Requirements</h3>
              <div className="mb-6">
        <Link
          href="/highlevlreq.pdf"
          target="_blank"
          download
          className="inline-flex items-center px-4 py-2 rounded-md font-medium bg-[#007074] text-white hover:bg-[#034C53] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download High Level Requirements
        </Link>
      </div>

      <div className="w-full h-[800px] border border-gray-300 rounded-lg overflow-hidden shadow-lg mb-12">
        <iframe src="/highlevreq.pdf" className="w-full h-full" title="highlevelrequirements"></iframe>
      </div>
            </div>
  
            <div className="bg-black rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-[#007074]">Project Plan</h3>
              <p className="mb-4">
                After a semester of planning the project, the group that I was a part of got to the implementation phase, and 
                we set out for our goals as follows. 
              </p>
              <div className="mb-6">
        <Link
          href="/projectplan.pdf"
          target="_blank"
          download
          className="inline-flex items-center px-4 py-2 rounded-md font-medium bg-[#007074] text-white hover:bg-[#034C53] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Project Plan
        </Link>
      </div>

      <div className="w-full h-[800px] border border-gray-300 rounded-lg overflow-hidden shadow-lg mb-12">
        <iframe src="/projectplan.pdf" className="w-full h-full" title="projectplan"></iframe>
      </div>
            </div>
  
            <div className="bg-gray rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-[#007074]">Requirements Analysis and Design</h3>
              <div className="mb-6">
        <Link
          href="/reqdesign.pdf"
          target="_blank"
          download
          className="inline-flex items-center px-4 py-2 rounded-md font-medium bg-[#007074] text-white hover:bg-[#034C53] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Requirements Analysis and Design
        </Link>
      </div>

      <div className="w-full h-[800px] border border-gray-300 rounded-lg overflow-hidden shadow-lg mb-12">
        <iframe src="/reqdesign.pdf" className="w-full h-full" title="requirementsdesign"></iframe>
      </div>
            </div>
  
            <div className="bg-black-200 rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-[#007074]">Wireframes/Mockups</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="h-40 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Wireframe 1</span>
                  </div>
                  <div className="p-3 bg-gray-50">
                    <p className="text-sm">Homepage Wireframe</p>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="h-40 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Wireframe 2</span>
                  </div>
                  <div className="p-3 bg-gray-50">
                    <p className="text-sm">Dashboard Wireframe</p>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="h-40 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Wireframe 3</span>
                  </div>
                  <div className="p-3 bg-gray-50">
                    <p className="text-sm">Profile Page Wireframe</p>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="h-40 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Wireframe 4</span>
                  </div>
                  <div className="p-3 bg-gray-50">
                    <p className="text-sm">Features Page Wireframe</p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="bg-gray rounded-lg shadow-md p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-[#007074]">Status Report</h3>
            <div className="mb-6">
        <Link
          href="/statusreport.pdf"
          target="_blank"
          download
          className="inline-flex items-center px-4 py-2 rounded-md font-medium bg-[#007074] text-white hover:bg-[#034C53] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Status Report
        </Link>
      </div>

      <div className="w-full h-[800px] border border-gray-300 rounded-lg overflow-hidden shadow-lg mb-12">
        <iframe src="/statusreport.pdf" className="w-full h-full" title="projectplan"></iframe>
      </div>
            </div>
  
            <div className="bg-gray rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-[#007074]">System Implementation</h3>
              <p className="mb-4">
                Details about how you implemented the system, including technologies used, architecture, and key features.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">Node.js</span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">Express</span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">MongoDB</span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">AWS</span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">Docker</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  