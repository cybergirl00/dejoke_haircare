import Image from "next/image"

const Home = () => {
  return (
   <section className="relative h-[700px] p-2 lg:h-[500px] xl:h-[1050px] items-center justify-center">
    <Image 
    src={'/hero-4.jpg'}
    layout="fill"
    objectFit="cover"
    objectPosition="center"
    alt="Dejoke hair care"
    />
    {/* <div className="absolute ml-40 flex flex-col justify-center top-10 bottom-4">
    <h3 className="font-bold text-2xl flex items-center justify-center  text-white w-[100%] xl:text-6xl">Welcome to Dejoke <span className="text-purple-700">Haircare</span></h3>
    <p className="text-white text-2xl p-2">Your <span className="text-purple-700">hair</span>'s bestfriend</p>
    </div> */}
   </section>
  )
}

export default Home