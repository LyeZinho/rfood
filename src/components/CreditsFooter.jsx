import Link from "next/link";
import Image from "next/image";

export default function CreditsFooter() {

    return (
        <div className="flex justify-center items-center flex-col space-y-4 bg-white rounded-2xl shadow-2xl my-10 p-4">
            <div className="flex justify-center items-center flex-col space-y-10">
            </div>
            <div className="flex justify-center items-center flex-col space-y-4">
                <h1 className="text-2xl font-bold text-black">
                    Made by <Link href="https://github.com/LyeZinho" target="_blank" className="text-blue-500 hover:text-blue-700 
                    transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
                    cursor-pointer
                    ">LyeZinho</Link>
                </h1>
            </div>
            {/* Scroll to top */}
            <div className="flex justify-center items-center flex-col space-y-4">
                <h1 className="text-2xl font-bold text-black animate-bounce
                hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
                cursor-pointer"
                    onClick={
                        () => window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        })
                    }
                >
                    Scroll to top
                </h1>
            </div>
        </div>
    )
}