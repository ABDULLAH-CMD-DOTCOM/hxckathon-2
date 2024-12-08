import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'
import Image from 'next/image'
import { Input } from 'postcss'
import Link from 'next/link'

const page = () => {
  return (
    <div className='bg-[#F6F7F9]'>
        <Navbar/>
        <div className="container mx-auto p-4">
            <div className=" flex w-[950px]  mx-[380px]">
            <div className='bg-white py-28 mx-8 w-[582px] h-[136px]'>
      <Image
        className='-my-12 mx-10'
        src={"/mark-1.png"}
        width={16}
        height={16}
        alt='mark'
      />
      <p className='text-black mx-20 my-7 font-bold'>Pick-up</p>
      <span className='flex mx-14'>
        <p className='text-black font-normal mx-8'>Locations</p>
        <p className='text-black font-normal mx-8'>Date</p>
        <p className='text-black font-normal mx-14'>Time</p>
      </span>

      <span className='flex mx-14 inline-block'>
      <select className='text-[#90A3BF] font-normal mx-8 py-5 text-[12px]'>
            <option value="">Select city ↓</option>
            <option value="Karchi">Karchi</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
        </select>
     
        <input type='date'  className='text-[#90A3BF] h-10 font-normal mx- py-10 text-[12px]' placeholder='Select your date ↓'/>
        <p className='text-[#90A3BF] font-normal mx-4 py-5 text-[12px]'>Select your time ↓</p>
      </span>
    </div>

    <div className='bg-white py-28 mx-8 w-[582px] h-[136px] -my-46'>
      <Image
        className='-my-12 mx-10'
        src={"/mark-1.png"}
        width={16}
        height={16}
        alt='mark'
      />
      <p className='text-black mx-20 my-7 font-bold'>Pick-up</p>
      <span className='flex mx-14'>
        <p className='text-black font-normal mx-8'>Locations</p>
        <p className='text-black font-normal mx-8'>Date</p>
        <p className='text-black font-normal mx-14'>Time</p>
      </span>

      <span className='flex mx-14 inline-block'>
      <select className='text-[#90A3BF] font-normal mx-8 py-5 text-[12px]'>
            <option value="">Select city ↓</option>
            <option value="Karchi">Karchi</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
        </select>
     
        <input type='date'  className='text-[#90A3BF] h-10 font-normal mx- py-10 text-[12px]' placeholder='Select your date ↓'/>
        <p className='text-[#90A3BF] font-normal mx-4 py-5 text-[12px]'>Select your time ↓</p>
      </span>
    </div>
            </div>
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="w-full h-[1600px] lg:w-1/4 p-4 -py-[80px] bg-white text-black rounded-lg shadow-md -my-44">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Type</h2>
            <ul>
              <li className="mb-2">
                <input checked type="checkbox" />
                Sport (10)
              </li>
              <li className="mb-2">
                <input checked type="checkbox" />
                SUV (12)
              </li>
              <li className="mb-2">
                <input type="checkbox" />
                MPV (16)
              </li>
              <li className="mb-2">
                <input type="checkbox" />
                Sedan (20)
              </li>
              <li className="mb-2">
                <input type="checkbox" />
                Coupe (14)
              </li>
              <li className="mb-2">
                <input type="checkbox" />
                Hatchback (14)
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Capacity</h2>
            <ul>
              <li className="mb-2">
                <input checked type="checkbox" />
                2 Person (10)
              </li>
              <li className="mb-2">
                <input type="checkbox" />
                4 Person (14)
              </li>
              <li className="mb-2">
                <input type="checkbox" />
                6 Person (12)
              </li>
              <li className="mb-2">
                <input type="checkbox" />
                8 or More (16)
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Price</h2>
            <input className="w-full" max="100" min="0" type="range" value="50" />
            <div className="text-right">Max. $100.00</div>
          </div>
        </div>
        {/* Main Content */}

    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-7 mx-auto">

            
       <div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/eheart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-5.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$96.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
        <a href="3"/>
        <Link href="/details">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>
    </div>

    <div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/heart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-7.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$96.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
        <a href="3"/>
        <Link href="/details">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>
    </div>

    <div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/eheart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-8.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$96.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
        <a href="3"/>
        <Link href="/details">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>
    </div>

    <div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/eheart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-1.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$96.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
        <a href="3"/>
        <Link href="/details">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>
    </div>

    <div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/eheart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-3.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$96.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
        <a href="3"/>
        <Link href="/details">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>
    </div>

    <div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/heart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-6.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$96.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
        <a href="3"/>
        <Link href="/details">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>
    </div>
    <div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/eheart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-4.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$96.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
        <a href="3"/>
        <Link href="/details">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>
    </div>

    <div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/heart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-2.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$96.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
        <a href="3"/>
        <Link href="/details">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>
    </div>

    <div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/eheart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-4.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$96.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
        <a href="3"/>
        <Link href="/details">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>
    </div>


        </div>

    

    
      </div>
    </div>
        <Footer/>
    </div>
  )
}

export default page