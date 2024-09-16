import Image from "next/image"
import semmas from "../../../assets/images/semmas.svg"
import aistars from "../../../assets/images/aistars.svg"
import debts from "../../../assets/images/debts.svg"
import { FcGoogle } from "react-icons/fc";
import rectangle from "../../../assets/images/rectangle.svg"
import metric from "../../../assets/images/metric.svg"
import button from "../../../assets/images/button.svg"
export default function SignUp(){
    return(
        <div className="flex bg-white text-black">
            <div className="w-[480px] h-[804px]  m-5 flex flex-col justify-between">
                <div className=" w-full">
                    <Image
                    src={semmas}
                    alt="company logo"
                    className="h-[56px] w-[112px] "/>
                </div>

                <div className="flex flex-col h-[280px] w-full gap-y-[32px]">
                    <div className="w-full h-[70px]">
                    <div className="text-[32px] leading-relaxed text-[#27272A] font-medium">Create account</div>
                    <div className="text-[#52525B] text-[16px] leading-relaxed">Sign up to get started</div>
                    </div>
                    <div className="w-full h-[88px] flex-flex-col gap-y-[16px]">
                    <div className="flex h-[48px] border border-radius-[100px] border-[1px] px-[12px] justify-center items-center space-x-5 rounded-full mb-3">
                        <div className=""><FcGoogle className="h-[24px] w-[24px]"/></div>
                        <div className=" h-[22px] font-bold text-[16px]">Sign Up with Google</div>
                    </div>
                    <div className="text-[16px] h-[22px] leading-5 text-base flex items-center justify-center">
                        <div> Already have an account? {""} <span className="text-[#52525B] text-[16px] leading-relaxed">Sign in </span></div>
                       </div>
                    </div>

                </div>

                <div className=" w-full h-[20px]">
                    <div className="w-[242px] flex  space-x-[12px]">
                    <div className="w-[91px] text-[14px]">Privacy Policy</div>
                    <div className="w-[127px] text-[14px]">Terms & Conditions</div>
                    </div>

                </div>
            </div>
            <div className="bg-[#F7F8F6] min-h-screen w-[792px] border border-[1px] border rounded-lg border-[#E4E4E7] relative">
              <div className="bg-[#F7F8F6] mt-3 w-[691px] h-[112px] ">
              <div className="grid grid-cols-3 ml-20">
                <div className="cols-span-1 border border-[2px] border-[#27272A] rounded-full flex items-center justify-center">
                    <div className="text-[20px] leading-9 font-semibold font-mullish">Industry Standard</div>
                    </div>
                <div className="cols-span-1 flex items-center justify-center
                            border border-[#37623A] border-t-[3px] border-l-[0px] border-b-[0px] border-r-[1px]
                            border-opacity-80 rounded-full">
                  
                    <Image
                    src={aistars}
                    alt="ai stars"
                    className=""/>
                    <div className=" ml-1 flex items-center justify-center text-[#37623A]">AI</div>
                    

                </div>
              </div>

              <div className="grid grid-cols-3 mt-0">
                <div className="cols-span-1"></div>
                <div className="cols-span-1 border border-t-[0px] border-l-[1px] border-b-[3px] border-r-[0px]
                      border-opacity-80 rounded-full border-[#37623A] ">
                    <div className="text-[#37623A] font-mullish text-[22px] px-[2px] py-[1px]
                    flex items-center justify-center">Transfer Pricing</div>
                </div>
                <div className="cols-span-1 border border-[2px] border-[#27272A] rounded-full flex items-center justify-center">
                    <div className="text-[20px] leading-9 font-bold font-mullish font-semibold">Comparables</div>
                    </div>
              </div>
              </div>
             <div className="absolute bg-white h-[174px] w-[202px] transform rotate-[6.72deg] left-[-30px] top-2/3 flex flex-col justify-between
                 overflow-hidden border rounded-lg shadow-lg">
             <div className="w-[162px] h-[40px] flex space-x-[8px]  items-center justify-center">
                <Image
                src={debts}
                alt="debts icon"
                className="h-[24px] w-[24px]"/>
                <div className="text-[16px] text-[#27272A] font-semibold">Debts/Assets</div>
             </div>
             <div className="text-[#27272A] text-[28px] ml-[-8px] flex items-start font-bold">4.42%</div>
            
             </div>

             <div>
                <Image
                src={rectangle}
                alt="rectangle"
                className=""/>
             </div>

             <div className="absolute bg-white h-[174px] w-[409px] border border-[1px] border-[#F4F4F5] transform rotate-[-5.74deg] shadow-lg p-[20px]
                             flex flex-col gap-y-[24px] top-3/4 left-[60px]">
                <div className="flex justify-between w-[369px] h-[40px]">
                    <div className="w-[303px] h-[40px] flex space-x-[4px]">
                        <Image
                        src={metric}
                        alt="graph icon"
                        className="w-40px h-[40px]"/>
                    <div className="flex items-center space-x-4">
                    <div className="  text-[16px] text-[#27272A] font-semibold">Average Beta</div>
                    <Image
                    src={button}
                    alt="button"
                    className="h-[16px] w-[16px]"/>
                    </div>
                        
                    </div>  
                    <div className="text-[#27272A] text-[28px] ml-[-8px] flex items-start font-bold">0.92</div>   
                </div>

                <div className=" grid grid-cols-2 gap-x-[8px]">
                    <div className="bg-[#F4F6F3] w-[180.5px] h-[70px] border rounded-lg shadow-md cols-span-1 mb-5">
                        <div className="ml-8 flex flex-col gap-y-5">
                        <div className="text-[#52525B]">Industry Beta</div>
                        <div className="text-[#27272A]">0.76</div>

                        </div>
                    </div>
                    <div className="bg-[#F4F6F3] w-[180.5px] h-[70px] border rounded-lg shadow-md cols-span-1 mb-5">
                        <div className="ml-8 flex flex-col gap-y-5">
                        <div className="text-[#52525B]">Subsidiary Beta</div>
                        <div className="text-[#27272A]">1.07</div>

                        </div>
                    </div>
                </div>
             </div>
            </div>
        </div>
       
    )
}