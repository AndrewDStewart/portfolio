import Link from "next/link"

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-[#FFC1B4] inline-block text-[#034C53]">Resume</h1>

      <div className="mb-6">
        <Link
          href="/resume.pdf"
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
          Download Resume
        </Link>
      </div>

      <div className="w-full h-[800px] border border-gray-300 rounded-lg overflow-hidden shadow-lg mb-12">
        <iframe src="/resume.pdf" className="w-full h-full" title="Resume"></iframe>
      </div>
    </div>
  )
}





  
  