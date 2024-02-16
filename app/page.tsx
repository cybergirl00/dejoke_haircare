import About from '@/components/About'
import Home from '@/components/Home'
import Product from '@/components/Product'
import Testimonials from '@/components/Testimonials'


const page = () => {
  return (
    <div className='p-2 scroll-smooth'>
        <Home />
        <About />
        <Product />
        <Testimonials />
    </div>
  )
}

export default page