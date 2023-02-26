import profile from '../assets/profile.png'

const Landing = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center text-slate-100 bg-slate-700">
            <img src={profile} className=" w-1/2 md:w-[200px]" alt="Thats me" />
            <h2 className='text-xl font-semibold'>Hello, I am Urwah!</h2>
            <h1 className="text-3xl block w-[400px] font-bold mt-5">
                Frontend Developer Specialised in React
            </h1>
        </section>
    )
}

export default Landing