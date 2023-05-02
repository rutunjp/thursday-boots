import Image from 'next/image'

export default function Hero(params) {
  return (
    <div className="">
      <img src="/images/hero.jpg" className="w-1/1" alt="shoes" />
      <div className="absolute left-32 top-1/3 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-bold text-6xl  font-Mulis">
            Highest Quality. <br />
            Honest Prices.
          </h1>
          <h3 className="  text-white   text-xl  font-Mulis">
            Handcrafted with Integrity
          </h3>
        </div>
        <div className="flex row gap-3">
          <button className="bg-white px-8 py-2   mt-3 hover:bg-slate-300 duration-500">
            SHOP MEN
          </button>
          <button className="bg-white px-8 py-2   mt-3 hover:bg-slate-300 duration-500">
            SHOP WOMEN
          </button>
        </div>
      </div>
    </div>
  )
}
