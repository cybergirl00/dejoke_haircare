'use client'
import Image from "next/image"
import { Fragment, useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { useAuth, useUser } from "@clerk/nextjs"
import Link from "next/link"
import { collection, addDoc, getDocs } from 'firebase/firestore'
import {db} from '@/assets/firebase'
import Spinner from "./Spinner"


const Testimonials = () => {
    let [isOpen, setIsOpen] = useState(false)
    const [content, setContent] = useState("")
    const [service, setService] = useState("")
    const [isLoading, setisLoading] = useState(false)
    const [review, setReview] = useState([])
    const {isSignedIn} = useAuth();
    const [isRendering, setisRendering] = useState(false)
    const { user} = useUser();
    const [isEmpty, setisEmpty] = useState(false)
    

    const handleSubmit = async () => {
        if(content === '' || service === '') {
            setisEmpty(true)
        } else {
        setisLoading(true)
    const data = await addDoc(collection(db, 'reviews'), {
            name: user?.fullName,
            content,
            service
        }).then(() => 
        setisLoading(false) 
        ).then(() => setIsOpen(false))
    }
}

    useEffect(() => {
    const getReviews = async () => {
        setisRendering(true)
        const data = await getDocs(collection(db, 'reviews'))
          const  setData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            })) 
            setReview(setData)
            setisRendering(false)
        
    }
    getReviews();
    }, [])
    
    if (isRendering)
    return  <Spinner />

  return (
    <section className="p-10 mt-4" id="reviews">
        <h3 className="font-bold text-3xl  flex items-center justify-center gap-2">Our  <span className="bg-purple-700 p-2 rounded-md text-white">Reviews</span></h3>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 shadow-sm p-10 gap-10 ">
           {review.map((item) => (
            <div className="flex flex-col xl:flex-row items-center space-x-4 bg-white border-2 border-purple-500 rounded-lg p-5 cursor-pointer">
                <Image 
                src={'https://th.bing.com/th/id/OIP.w2McZSq-EYWxh02iSvC3xwHaHa?w=213&h=213&c=7&r=0&o=5&pid=1.7'}
                width={70}
                height={60}
                alt="reviews-img"
                className="rounded-lg"
                />
                <div className="">
                <h3 className="font-bold text-1xl text-purple-700 p-3 mr-3 flex item-center justify-center lg:text-1xl">{item?.name}</h3>
                <p className="font-bold text-lg xl:text-1xl text-gray-400 ">{item?.content}</p>
                <span className=" pt-5 text-purple-700 font-semibold">~{item?.service}~</span>
                </div>
            </div>
           ))}
           {!isSignedIn ?
             <button className="flex items-center justify-center bg-purple-700 p-2  text-white ml-10">
                <Link href={'/sign-up'}>Sign up to give a review</Link>
                </button>
            : 
            <button className="flex items-center justify-center bg-purple-700 p-2  text-white ml-10" onClick={() => setIsOpen(true)}>Add a Review</button>
            }
          
        </div>


        <Dialog open={isOpen} onClose={() => setIsOpen(false)}  className="relative z-50 p-10">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
      <Dialog.Panel className="w-full max-w-lg rounded bg-white p-10 shadow-lg">
        <Dialog.Title>
            <h3 className="font-bold text-2xl xl:text-4xl p-3 flex items-center justify-center gap-2">Give us a <span className="text-purple-600"> Review</span></h3>
        </Dialog.Title>
        <Dialog.Description >
            <span className="text-gray-600 font-bold "> We would love to hear your thought please leave us a review</span>
          
        </Dialog.Description>

        {isEmpty && (
            <span className="text-2xl text-red-500">please fill all the fields</span>
        )}
        <form action="" className="flex flex-col pt-10 pb-2">
            <div className="w-full flex flex-col gap-2 ">
                <div className="flex flex-col ">
                <label htmlFor="" className="text-1xl font-bold text-purple-500 p-2 ">Service</label>
            <input placeholder="what service did we offer you" className="p-5 border-2 border-purple-500 rounded-lg"
            onChange={(e) => setService(e.target.value)}
            />
                </div>
                <div className="flex flex-col ">
                <label htmlFor="" className="text-1xl p-2 text-purple-500 font-bold "></label>
            <textarea name="" id="" className="p-5 border-2 border-purple-500 rounded-lg" cols="30" rows="10"
            onChange={(e) => setContent(e.target.value)}
            >Message</textarea>
                </div>
           </div>
           
        </form>
        {isLoading ? 
         <button className="bg-purple-500 p-2 text-white text-2xl w-full"
         disabled={true}
         >Submiting...</button>
         : 
         <button className="bg-purple-500 p-2 text-white text-2xl w-full"
         onClick={handleSubmit}
         >Submit</button>
        }
      </Dialog.Panel>
      </div>
    </Dialog>
    </section>
  )
}

export default Testimonials