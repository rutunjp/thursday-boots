export default function card() {
  return (
    <div className="flex flex-col w-64 p-1   gap-1 ">
      <img src="/images/captain.webp" className="w-64" alt="captain" />
      <div className=" flex flex-row justify-between">
        <div>
          <h3>Captain</h3>
          <p className="text-gray-500">Black Matte</p>
        </div>
        <p>$199</p>
      </div>
    </div>
  )
}
