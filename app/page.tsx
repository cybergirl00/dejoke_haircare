import Home from '@/components/Home'
import Product from '@/components/Product'
import Testimonials from '@/components/Testimonials'
import Service from '../components/Service'
import About from '@/components/About'


const page = () => {
  return (
    <div className='p-2 scroll-smooth'>
        <Home />
        <About />
        <Service />
        <Product />
        <Testimonials />
    </div>
  )
}

export default page