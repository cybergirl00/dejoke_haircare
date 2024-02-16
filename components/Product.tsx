import Image from "next/image"

const Product = () => {
  const products =[
    {
      key: 1,
      title: 'Dark and Lovely shampoo',
      des: 'Dark and lovely 3 in 1 shampoo',
      img: '/dark-lovely.jpg'
    },
    {
      key: 2,
      title: 'Ribbon',
      des: 'Cute Ribbons for your hair',
      img: '/ribbons.jpg'
    },
    {
      key: 3,
      title: 'Shampoo',
      des: 'Minted shampoo',
      img: '/shampoo.jpg'
    },
    {
      key: 4,
      title: 'Dark and lovely conditioner',
      des: 'Dark and lovely conditioner',
      img: '/dark.jpg'
    },

  ]
  return (
    <div id="products" className="p-10">
      <h3 className="text-3xl font-bold gap-2 p-10 mr-10 space-x-3 flex justify-center items-center "><span className="bg-purple-700 text-white p-2 rounded-sm">Haircare</span> Products</h3>
      <div className="grid grid-cols-1 justify-center items-center p-4 gap-6 xl:grid-cols-2 lg:grid-cols-2">
        {products.map((item) => (
          <div className="border-2 flex flex-col border-purple-500 shadow-lg rounded-lg p-2 cursor-pointer hover:space-x-2  items-center justify-center">
            <Image src={item.img} width={250} height={250} alt="products"
            className="flex justify-center items-center"
            />
            <h3 className="flex justify-center items-center text-2xl text-purple-400 font-bold p-2">{item.title}</h3>
            <span className="text-purple-300 font-semibold text-1xl">{item.des}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product