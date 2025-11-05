type SectionProps = {
  title: string
  description: string
  bgImage: string
  orderBtnColor?: string
}

const Section = ({ title, description, bgImage, orderBtnColor = "bg-green-950" }: SectionProps) => {
  return (
    <section
      className="relative h-screen bg-black bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="pt-32 text-center text-white">
        <h1 className="text-40px">{title}</h1>
        <p className="text-xl">{description}</p>
      </div>

      <div className="absolute bottom-20 flex flex-col items-center w-full lg:flex-row lg:justify-center lg:space-x-4">
        <button className={`mt-2 uppercase ${orderBtnColor} w-80 text-white rounded-full h-10`}>
          Objednat
        </button>
        <button className="mt-2 uppercase bg-blue-950 w-80 text-white rounded-full h-10">
          Více informací
        </button>
      </div>

      <div className="text-white absolute bottom-5 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 w-10 h-10 animate-bounce mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
      </div>
    </section>
  )
}

export default Section