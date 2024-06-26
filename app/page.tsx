import Image from "next/image";
import cover from "../public/Cover.png";
import { BsSearch } from "react-icons/bs";
import CardDetails from "../components/CardDetails";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import SearchBar from "@components/SearchBar";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="relative w-screen">
      <div className="bg-blue-500 h-60 max-h-72 p-2 md:p-4 mx-0 md:mx-8 mt-4 mb-4 flex items-center justify-between relative rounded-lg">
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
          <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-4">Make Your Dream Food With Us</h1>
          <SearchBar/>
        </div>
        <div className="absolute rounded-lg inset-0">
          <Image src={cover} alt="Cover" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>

    <div className="w-auto h-auto py-2 bg-blue-900 text-center text-white text-3xl font-bold mx-0 md:mx-8 mb-4 rounded-md">
      Recipes
    </div>
    <div>
      <CardDetails />
    </div>
    <Footer />
    </>
  );
}