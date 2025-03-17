export default function Academic() {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[#FFC1B4] inline-block text-[#034C53]">
          Academic Credentials
        </h1>
  
        <section className="mb-8 bg-black rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-[#007074]">Certificates/Degrees and Academic Awards</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-[#F38C79] pl-4">
              <h3 className="font-medium">Certificate of Computer Science</h3>
              <p className="text-gray-600">George Brown College, Graduating Spring 2025</p>
              <p className="mt-1">GPA: 3.6/4.0</p>
            </div>
            <div className="border-l-4 border-[#F38C79] pl-4">
              <h3 className="font-medium">Dean's List</h3>
              <p className="text-gray-600">Fall 2022 - Spring 2025</p>
            </div>
          </div>
        </section>
  
        <section className="mb-8 bg-black rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-[#007074]">Academic Record/Transcript (Optional)</h2>
          <p className="text-gray-600 mb-4">
            (Transcript to go here when available post graduation)
          </p>
          <button className="px-4 py-2 rounded-md font-medium bg-[#007074] text-white hover:bg-[#034C53] transition-colors">
            View Transcript
          </button>
        </section>
  
        <section className="mb-8 bg-black rounded-lg shadow-md p-6 border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-[#007074]">Academic Work Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-lg">No Experience</h3>
            <p className="text-gray-600">Will Update When I have Experience</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Will place details on experience here.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-[#007074]">Academic Work Samples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="bg-gray rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Chatroom</span>
            </div>
            <div className="p-4">
              <h3 className="font-medium">Chat App</h3>
              <p className="text-gray-600 text-sm mt-1">Web Development | Winter 2025</p>
              <p className="mt-2 text-sm">
                A basic chatroom application that allows verified users to enter public or private rooms 
                and converse with one another.
              </p>
              <a
                href="https://github.com/AndrewDStewart/COMP3133_101418564_Assignment1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-3 py-1 text-sm rounded bg-[#333] text-white hover:bg-[#0d1117] transition-colors inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 
                  6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 
                  16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 
                  5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View on GitHub
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Daycare Buddy</span>
            </div>
            <div className="p-4">
              <h3 className="font-medium">Attendance System</h3>
              <p className="text-gray-600 text-sm mt-1">Web Development | Winter 2025</p>
              <p className="mt-2 text-sm">
                A full-stack web application built with React, Node.js, and MongoDB that allows users to manage and 
                navigate digital attendance systems of their respective daycares securely.
              </p>
              <a
                href="https://github.com/jamdazai/Daycare-Buddy"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-3 py-1 text-sm rounded bg-[#333] text-white hover:bg-[#0d1117] transition-colors inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 
                  5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 
                  1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View on GitHub
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Fullstack Development Labwork</span>
            </div>
            <div className="p-4">
              <h3 className="font-medium">JavaScript and more...</h3>
              <p className="text-gray-600 text-sm mt-1">Fullstack Development | Winter 2025</p>
              <p className="mt-2 text-sm">
                A series of small applications built around the concepts of fullstack development using JavaScript.
              </p>
              <a
                href="https://github.com/AndrewDStewart/COMP3133"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-3 py-1 text-sm rounded bg-[#333] text-white hover:bg-[#0d1117] transition-colors inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View on GitHub
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-gray rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Data Structures</span>
            </div>
            <div className="p-4">
              <h3 className="font-medium">Python Data Science</h3>
              <p className="text-gray-600 text-sm mt-1">Data Science | Spring 2022</p>
              <p className="mt-2 text-sm">
                A series of data science projects revolving around training and testing models for algorithmic data structures.
              </p>
              <a
                href="hhttps://github.com/AndrewDStewart/COMP3132"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-3 py-1 text-sm rounded bg-[#333] text-white hover:bg-[#0d1117] transition-colors inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View on GitHub
              </a>
            </div>
          </div>

          {/* Project 5 */}
          <div className="bg-gray rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">JustIn ToDo</span>
            </div>
            <div className="p-4">
              <h3 className="font-medium">Mobile Application</h3>
              <p className="text-gray-600 text-sm mt-1">Swift Mobile Development | Winter 2025</p>
              <p className="mt-2 text-sm">
                A stable task management application designed for easy use and readability, built in Swift. 
              </p>
              <a
                href="hhttps://github.com/AndrewDStewart/COMP3097-Group57-JustInToDoApp"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-3 py-1 text-sm rounded bg-[#333] text-white hover:bg-[#0d1117] transition-colors inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
  
  
  
  