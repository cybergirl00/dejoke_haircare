import Image from "next/image"

const About = () => {
  return (
    <section className="p-10" id="about">
         <h3 className="text-4xl font-bold p-7 flex sm:flex-row items-center justify-center gap-3"><span className="bg-purple-500 text-white p-2 rounded-lg">About</span> Us</h3>
        <div className="flex flex-col xl:flex-row items-center justify-center">
        <div className="" >
            <p className="text-black font-semibold text-1xl   xl:text-2xl xl:w-[50%] ">
                 Dejoke Haircare at Al-Hikmah is a unique and innovative hair and wellness experience, run by a dedicated student at Al Hikmah University's hostel. With a focus on washing, relaxing, and undoing hair, the salon provides a personalized and nurturing experience for each client, using natural and organic products to ensure the utmost care for your hair and scalp.
        </p>
        </div>
        <div className="flex items-center justify-center p-6 space-x-3">
        <Image
            src={'/about-img.jpg'}
           width={600}
           height={600}
            alt="about-img"
            className="rounded-lg "
             />
        </div>
        </div>
    </section>
  )
}

export default About