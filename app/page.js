import Link from 'next/link'
import Image from "next/image"

export default function Page() {
  return <div>
        <p>Hello,World!.....Welcome to the home page.</p> 
        <p>Check out the <Link href="/dashboard"><em>Dashboard</em></Link> and <Link href="/about"><em>About</em></Link> pages </p>

        
        <br />
        
        <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />

        <br />

        <Image
              src="/next.svg"
              alt="Next Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
      </div>
}