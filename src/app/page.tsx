import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5 bg-black">
      <h1 className='font-bold size text-4xl text-slate-50'>
        Home
      </h1>
      <img
      src="images.jpg" 
      alt="Khalid nawaz"
      className='rounded-full h-40 w-40 object-cover mb-4'/>
      <Link href="/posts" className='text-slate-50'>
        Post
      </Link>
    </main>
  )
}
