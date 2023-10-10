import Link from "next/link";

export default function Post() {
    return (
      <main className="flex min-h-screen flex-col items-center p-5 bg-black">
        <h1 className='font-bold text-4xl text-slate-50'>
          Post
        </h1>
       <Link href="/" className="text-slate-50">
        Back to home 
       </Link>
      </main>
    )
  };