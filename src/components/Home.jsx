import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';



export default function Home({randomMovie}) {

  return (
    <div className='w-full h-[1000px]'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[1000px] bg-gradient-to-r from-black'></div>
            <img src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`} alt={randomMovie?.title} className='w-full h-full object-cover ' />
            <div className='absolute top-[30%] w-full px-[2rem] lg:px-[6rem]'>
                <div className='w-[800px]'>
                    <p className='text-6xl font-bold'>{randomMovie?.title}</p>
                    <p className='text-xl font-bold mt-[1rem]'>Available Now</p>
                    <p className='text-lg mt-[1rem] w-full md:max-w-[70%] lg:max-w-[60%]'>{randomMovie?.overview}</p>
                </div>
                <div className='mt-[2rem]'>
                    <button className='bg-white text-black px-14 py-3 rounded border-black border-solid border text-lg font-bold hover:bg-gray-300'><FontAwesomeIcon size='md' className='px-2' icon={faPlay}/> Play</button>
                    <button className='bg-gray-700 px-14 py-3 ml-3 rounded text-lg font-bold hover:bg-gray-600'>More Info</button>
                </div>
            </div>
        </div>
    </div>
  )
}
