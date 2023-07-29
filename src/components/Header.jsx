import Link from 'next/link';
import Image from 'next/image';


export default function Header() {
    return (
        <div
            className="flex justify-center items-center pb-36 flex-col space-y-20"
        >
            <div className="flex justify-center items-center flex-col space-y-10">
                <h1 className="text-4xl font-bold text-white">Random Food</h1>
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={300}
                    height={300}
                    className='rounded-2xl'
                />
            </div>

            {/* Refresh button */}

            <div className="flex justify-center items-center flex-col space-y-4">
                <h1 className="text-2xl font-bold text-white animate-bounce 
                hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
                cursor-pointer"
                    onClick={
                        // Scroll to id: "foodCard"
                        () => document.getElementById('foodCard').scrollIntoView({
                            behavior: 'smooth'
                        })
                    }
                >
                    Scroll Down
                </h1>
            </div>
        </div>
    );
}