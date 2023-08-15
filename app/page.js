import Menu from '@/components/Menu'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="z-10 pb-44 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       <Menu />
      </div>

       <div className="items-center font-bold">
        Welcome to My Blog
      </div>
    </main>
  )
}
