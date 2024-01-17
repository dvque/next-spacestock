import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-row gap-4">
      <div className="flex flex-col basis-1/5">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
      <div className="flex flex-col basis-1/2">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
    </main>
  )
}
