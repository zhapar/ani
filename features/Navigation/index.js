import Link from 'next/link'
import Image from 'next/image'

export default function Navbar({ className, ...props }) {
  return (
    <div className="flex justify-between items-center w-full sticky top-0 z-30 bg-gray-900 bg-opacity-75 backdrop-filter backdrop-blur-lg">
      <nav className="flex items-center justify-between h-20 px-4 container w-full py-2">
        <Link href="/">
          <a className="flex justify-start items-end h-full p-2">
            <div className="aspect-1-1 h-full relative">
              <Image
                src="/images/aniapi_icon.png"
                layout="fill"
                className="object-contain"
              />
            </div>
            <h3 className="ml-1">ni</h3>
          </a>
        </Link>
      </nav>
    </div>
  )
}
