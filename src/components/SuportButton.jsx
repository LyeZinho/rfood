import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function SuportButton() {
  return (
    <div className="fixed bottom-0 left-0 z-50 flex justify-center items-center flex-col space-y-4 p-4">
      <button
        className="
                bg-blue-500 hover:bg-blue-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-white font-bold py-2 px-4 rounded-full
                cursor-pointer hover:border-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
                animate-bounce
            "
        onClick={() => window.open("/suport", "_blank")}
      >
        Suport Me :D
      </button>
    </div>
  );
}
