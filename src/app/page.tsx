import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className="w-full h-full py-32 px-4 flex flex-col gap-8">
        <div className="flex items-center">
          <div>
            <h1 className="text-6xl">Escolha</h1>
            <h6 className="text-3xl text-zinc-600">Seu template</h6>
          </div>
          <Image
            src={'./ballon.svg'}
            alt="ballon"
            width={120}
            height={30}
            className="mb-12"
          />
        </div>
        <section className="w-full flex flex-col gap-4">
          <Link href="/reide">
            <div className="w-full h-36 bg-[#F9E19F] rounded-lg flex">
              <div className="w-1/2 flex items-center justify-center">
                <span className="text-3xl">Reide</span>
              </div>
              <div className="w-1/2 flex items-center justify-center">
                <Image
                  src="./backpack.svg"
                  alt="backpack"
                  width={90}
                  height={140}
                />
              </div>
            </div>
          </Link>
          <Link href="/sighted">
            <div className="w-full h-36 bg-[#CCDCB7] rounded-lg flex flex-row-reverse">
              <div className="w-1/2 flex items-center justify-center">
                <span className="text-3xl">Avistado</span>
              </div>
              <div className="w-1/2 flex items-center justify-center">
                <Image
                  src="./bush.svg"
                  alt="backpack"
                  width={174}
                  height={140}
                />
              </div>
            </div>
          </Link>
          <Link href="/soon">
            <div className="w-full h-36 bg-[#A0E7FF] rounded-lg flex">
              <div className="w-1/2 flex items-center justify-center">
                <span className="text-3xl">Em breve</span>
              </div>
              <div className="w-1/2 flex items-center justify-center">
                <Image src="./time.svg" alt="backpack" width={57} height={87} />
              </div>
            </div>
          </Link>
        </section>
      </main>
    </>
  )
}
