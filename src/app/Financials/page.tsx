import Image from "next/image"
import semmas from "../../../assets/images/semmas.svg"
import iconreport from "../../../assets/images/iconreport.svg"
import button2 from "../../../assets/images/button2.svg"




export default function Financials(){
    return(
        <div className="bg-[#F4F6F3] min-h-screen rounded-[24px]">
            <div className="flex flex-col items-center justify-center gap-y-[48px]">
             <div className="">
             <Image
                    src={semmas}
                    alt=" semmas logo"
                    className="h-[56px] w-[112px] mt-[48px]"/>
             </div>   

             <div className="w-[560px] h-[500px] p-[32px] rounded-[24px] bg-[#FFFFFF]
                         ">
                <div className="w-[496px] h-[470px] flex flex-col gap-y-[40px]">
                    <div className="w-full h-[8px] flex space-x-[8px]">
                        <div className="w-[243px] h-[8px] bg-[#F1F4F0] rounded-full"></div>
                        <div className="w-[243px] h-[8px] bg-[#37623A] rounded-full"></div>
                    </div>
                <div className="w-[350px] h-[40px] text-[#27272A] text-xl font-bold leading-relaxed
                                 flex items-start ">Create your first Report</div>    

                <div className="w-full h-[342px] flex flex-col gap-y-[24px]">
                    <div className="w-full h-[80px] gap-y-[8px]">
                    <div className="h-[28px] text-[#27272A] font-bold leading-relaxed flex items-start">Upload Company Financials</div>
                    <div className="h-[22px] text-[#3F3F46] mb-7">The financials should include a balance sheet, income statement, and ownership structure. </div>
                    <div className="h-[238px] bg-white rounded-[12px]">
                        <div className="h-[100px] w-full border-[1px] rounded-[12px] flex flex-col gap-y-[8px]">
                            <div className="grid grid-cols-12">
                                <div className="col-span-2 mr-2">
                                    <Image 
                                    alt="iconreport"
                                    className="h-[40px] w-[40px] bg-[#F4F4F5] "
                                    src={iconreport}/>
                                </div>
                                <div className="flex items-center justify-between col-span-10 ">

                                <div className="flex flex-col  gap-y-[2px]">
                                    <div className="text-[#27272A]">File_name_example.cvs</div>
                                    <div className="text-[#A1A1AA] text-[12px]">10 MB</div>

                                </div>
                                <div className="flex self-start">
                                    <Image
                                    alt="button"
                                    className="h-4 w-4 cursor-pointer text-black"
                                    src={button2}/>

                                </div>
                                </div>
                               
                            </div>
                            <div className="grid grid-cols-12 items-center">
                                <div className="h-[8px] col-span-11 bg-[#37623A]"></div>
                                <div className="col-span-1 h-[8px] flex justify-center items-center text-[#27272A] text-[14px]">100%</div>
                            </div>

                        </div>
                    </div>
                    </div>
                </div>
                <div className="flex justify-between text-black mb-10 w-full h-[48px]">
                <div className="py-0 px-[24px] border border-[1px] border-grey-100 rounded-full flex items-center">Back</div>
                <div className="py-0 px-[16px] border border-[1px] bg-[#37623A] text-white rounded-full flex items-center">Generate Report</div>
                
                </div>  

                </div>

               
             </div> 

            
                    
                
                
                
            </div>
        </div>
    )
}