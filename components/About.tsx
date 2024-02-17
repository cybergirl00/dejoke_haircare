import Image from "next/image"
import Link from "next/link"

const About = () => {
  const session = [
    {
      key: 1,
      image: '/washing.jpg',
      title: 'Hair Washing',
      price: '600',
      des: 'This consist of hair drying and conditioning'
    },
    {
      key: 3,
      image: '/hair-losing.jpg',
      title: 'Normal hair losing',
      price: '300',
      des: 'Normal hair'
    },
    {
      key: 5,
      image: '/hair-losing.jpg',
      title: 'Attachment hair losing',
      price: '400',
      des: 'hair with attachment'
    },
    {
      key: 4,
      image: '/hair-drying.jpg',
      title: 'Washing and drying',
      price: '500',
      des: 'The best you can get'
    },
  ]
  return (
    <section className="py-10 flex justify-center items-center flex-col" id="about">
      <h3 className="p-10 m-5 text-4xl flex items-center justify-center gap-2 font-bold"> <span className="bg-purple-700 text-white p-2 rounded-sm">About</span> us</h3>
      
     
      <div className="cursor-pointer grid grid-cols-1 space-y-3 xl:grid-cols-4 md:grid-cols-2 space-x-4 lg:grid-cols-3 sm:grid-cols-1 ">
        {session.map((item) => (
           <div className="bg-purple-200 p-10 shadow-lg rounded-md" key={item.key}>
           <Image src={item.image}
         width={250}
         height={250}
           alt="hair drying"
           className="rounded-sm"
           />
           <div className="flex flex-col p-4">
           <h3 className="text-2xl p-3 font-bold">{item.title}</h3>
           <span className="text-purple-700 text-2xl font-bold items-center justify-center pb-3 mr-10">N{item.price}</span>
           <button className="bg-purple-900  w-full p-2 text-white hover:shadow-lg transition transform ease-in">
             <Link href={'https://wa.me/qr/4GWHQIDBDOCQI1'}>Book now</Link>
           </button>
           </div>
         </div>
        ))}
       
      </div>
    </section>
  )
}

export default About