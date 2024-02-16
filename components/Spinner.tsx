import { Oval, ThreeDots } from 'react-loader-spinner'


function Spinner() {
    return (
        <div className="flex flex-col justify-center items-center p-5">
    <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#8B5CF6"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        <p className='font-bold text-black p-2'>Please wait...</p>
        </div>
    )
}

export default Spinner