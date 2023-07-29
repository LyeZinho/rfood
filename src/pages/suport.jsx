import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Suport() {

    return (
        <div className="flex justify-center items-center flex-col space-y-4 bg-white rounded-2xl shadow-2xl my-10 p-4">
            {/* 
            <iframe id='kofiframe' src='https://ko-fi.com/lyepedro/?hidefeed=true&widget=true&embed=true&preview=true' style='border:none;width:100%;padding:4px;background:#f9f9f9;' height='712' title='lyepedro'></iframe>
            */}

            <div className="flex justify-center items-center flex-col space-y-10">
                <iframe id='kofiframe' src='https://ko-fi.com/lyepedro/?hidefeed=true&widget=true&embed=true&preview=true' style={{ border: 'none', width: '100%', padding: '4px', background: '#f9f9f9' }} height='712' title='lyepedro'></iframe>
            </div>

            <div className="flex justify-center items-center flex-col space-y-4">
                <Link href="/">
                    <h1 className="text-2xl font-bold text-black
                    hover:text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
                    ">
                        Go back
                    </h1>
                </Link>
            </div>
        </div>
    )
}