import AllCourses from '@/components/AllCourses/allCourses'
import Navbar from '@/components/navbar/page'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="max-w-[1440px] m-auto">
      <AllCourses/>
    </main>
  )
}
