import Image from "next/image"

const Home = () => {
  return (
   <section className="relative h-[700px] p-2 lg:h-[500px] xl:h-[1050px] items-center justify-center">
    <Image 
    src={'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
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