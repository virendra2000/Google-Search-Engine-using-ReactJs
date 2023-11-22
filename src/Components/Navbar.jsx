const Navbar = () => {
    return (
        <>
            <div className="p-2 w-[100%] navbar text-white text-sm flex flex-row items-center justify-end">
                <a href="https://mail.google.com/" className="p-1 hover:underline">Gmail</a>
                <a href="https://www.google.com/imghp?hl=en-GB&tab=ri&ogbl" className="p-1 hover:underline">Images</a>
                <i class='bx bxs-grid text-2xl p-1 cursor-pointer'></i>
                <h1 className="mx-1 p-4 py-2  text-xl font-bold bg-orange-400 cursor-pointer rounded-full">V</h1>
            </div>
        </>
    )
}
export default Navbar