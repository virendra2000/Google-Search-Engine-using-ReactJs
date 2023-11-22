import mic from '../assets/microphone.png';
import lens from '../assets/lens.png';
import googleimg from '../assets/googlelogo.png';
const Home = () => {
    return (
        <>
            <div className="h-[100vh] mt-16 flex flex-col items-center">
                <img src={googleimg} alt="" className='p-3 h-[130px]' />
                <div className="p-1 text-gray-700 flex flex-row items-center bg-white w-[45%] rounded-full">
                    <i class='px-4 py-1 bx bx-search text-xl'></i>
                    <input type="search" className="px-3 py-1 text-gray-700 text-lg outline-none text-md w-[90%]" placeholder="Search Google or type a URL"/>
                    <img src={mic} alt="" className='px-3 h-[32px]' />
                    <img src={lens} alt="" className='px-3 h-[32px]' />
                </div>
            </div>
        </>
    )
}
export default Home