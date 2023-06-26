import '../index.css'
import img from '/home.png';

function Home() {
    return (
        <>
            <main className='min-w-full bg-blue-800 h-[35rem] flex'>
                
                <div className='min-h-full w-fit'>
                    <p className='text-white font-bold text-3xl pt-36 ps-10 w-96 select-none'>Hello This is A web site to test in this website <span className='text-red-300'>Tailwind</span> css and</p>
                    <p className='text-2xl text-gray-400 pt-5 ps-10 select-none'>Lorem ipsum dolor sit amet.</p>
                    <div className='pt-5 ps-10 flex gap-2'>
                        <button className='bg-blue-400 rounded-full w-20 h-11 font-bold text-white select-none'>Login</button>
                        <button className='bg-blue-400 rounded-full w-20 h-11 font-bold text-white select-none'>Support</button>
                    </div>
                </div>
                <div className='min-h-full min-w-full flex justify-center items-center'>
                    <img src={img} className=' max-h-96 pe-28 animate-[wiggle_2s_ease-in-out_infinite]' />
                </div>

            </main>
        </>
    )
}

export default Home
