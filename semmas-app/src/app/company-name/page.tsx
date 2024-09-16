"use client"
import semmas_icon from "../../../assets/images/semmas.svg"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function company_name () {
    const [companyName, setCompanyName] = useState("");

    return (
        <div className="bg-[#F4F6F3] h-screen grid gap-4 place-content-center place-items-center">
            <Image src={semmas_icon}
                alt=""
                className="-mt-3"/>
            <div className="h-[500px] w-[560px] bg-[#FFFFFF] rounded-3xl">
                <div className="m-8 h-full">
                    <div className="">
                        <div className="flex w-full gap-2">
                            <div className="bg-[#37623A] w-1/2 h-[8px] rounded-full"></div>
                            <div className="bg-[#F1F4F0] w-1/2 h-[8px] rounded-full"></div>
                        </div>
                        <div className="text-[#27272A] font-bold my-10 text-4xl">Create your first report</div>
                        <div className="font-bold text-[#27272A] text-xl">What is the Company name?</div>
                        <div className="relative mb-6 mt-4 h-[200px]">
                            <input type="text" onChange={(e) => setCompanyName(e.target.value)} name= "company_Name" value={companyName} placeholder="Enter your company name" className="w-full p-2 border rounded-full focus:outline-none focus:ring-[#E4E4E7]" />
                            {companyName.length > 0 && <label className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500">Company name</label>}
                        </div>
                        
                        
                        { companyName.length<1 ? <div className="my-4 flex justify-end py-4">
                            <div className="bg-[#F4F4F5] rounded-full flex px-7 py-2 items-center"><span className="inline-block align-middle font-semibold text-[#A1A1AA]">Continue</span></div>
                        </div> : 
                        <Link href={"/"}>
                            <div className="my-4 flex justify-end py-4">
                            <div className="bg-[#37623A] rounded-full flex px-7 py-2 items-center"><span className="inline-block align-middle font-semibold text-[#FAFAFA]">Continue</span></div>
                        </div>
                        </Link>}
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}