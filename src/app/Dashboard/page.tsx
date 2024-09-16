import Image from "next/image";
import semmashorizontal from "../../../assets/images/semmashorizontal.svg";
import { TbReport } from "react-icons/tb";
import { RiGroupLine } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";
import { AiOutlineQuestion } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import image from "../../../assets/images/image.svg"
import { CiFilter } from "react-icons/ci";
import { tableItems } from "../Constants";

export default function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-white rounded-[16px] flex">
      <div
        className="w-[280px] min-h-screen bg-[#F4F6F3] border border-t-[0px] border-l-[1px] 
            border-b-[0px] border-r-0 border-[#37623A] rounded-tl-[16px] rounded-bl-[16px] text-black
            flex flex-col justify-between"
      >
        <div className="w-full h-[484px] pt-[32px] flex flex-col gap-y-[32px]">
          <div className="flex items-center h-[20px] w-full">
            <Image src={semmashorizontal} alt=" semmas logo" className="" />
          </div>

          <div className="flex flex-col py-0 px-[16px] gap-y-[8px] w-full h-[104px]">
            <div className="w-full h-[48px] py-[12px] px-[16px] gap-x-[8px] bg-[#E8EEE7] rounded-full">
              <div className="w-[216px] h-[24px] flex gap-x-[12px]">
                <TbReport className="h-[24px] w-[24px]" />
                <div className="text-[#37623A] text-[16px] font-semibold">
                  Reports
                </div>
              </div>
            </div>
            <div className="w-full h-[48px] py-[12px] px-[16px] gap-x-[8px]">
              <div className="w-[216px] h-[24px] flex gap-x-[12px]">
                <RiGroupLine className="h-[24px] w-[24px]" />
                <div className="text-[#37623A] text-[16px] font-semibold">
                  Teams
                </div>
              </div>
            </div>
          </div>

          <div className="w-[248px] h-[40px] flex space-x-[8px] px-3 py-2 items-center justify-center bg-[#37623A] rounded-full ml-4">
            <div>
              <IoAdd />
            </div>
            <div className="text-white">New Report</div>
          </div>
        </div>

       
        <div className="w-[280px] mb-8">
          <div className="w-[248px] h-[40px] flex space-x-[8px] px-3 py-2 items-center justify-center rounded-full ml-4">
            <div>
              <AiOutlineQuestion />
            </div>
            <div className="">Support</div>
          </div>
        </div>
      </div>

      <div className=" bg-white flex flex-col">
        <div className="py-[16px] px-[32px] w-full  flex justify-between 
        border border-b-[1px] border-l-[0px] border-[#E4E4E7]">

            <div className="w-[256px] h-[40px] flex space-x-[4px] rounded-full bg-[#F4F6F3] items-center">
                <div className="ml-5 mr-1"><IoSearch className="h-[20px] w-[20px] text-[#A1A1AA] "/></div>
                <div className="w-[196px] h-[24px] text-[#A1A1AA] text-[18px] leading-relaxed flex items-center">Search</div>
            </div>

            <div className="w-[112px] h-[40px] flex items-center">
                <div className="items-start justify-center mr-2 "><IoMdNotificationsOutline className="h-[30px] w-[30px] text-black"/></div>
                <div className="w-[1px] h-[20px] bg-[#E4E4E7] justify-center"></div>
                <div className="items-end ml-4">
                    <Image
                    src={image}
                    alt="account information"
                    className="h-[40px] w-[40px] rounded-full"/>
                </div>
            </div>
        </div>
        <div className="w-full  py-0 px-[32px]">
            <div className="w-[1096px]  py-[24px] px-[0px] flex flex-col">
                <div className="w-[1096px]  flex gap-y-[0px]">
                    <div className="w-full  flex justify-between items-center">
                        <div className="text-[#27272A] font-bold">Reports</div>
                        <div className="grid grid-cols-10 gap-x-[4px]">
                            <div className="col-span-5">
                            <div className="w-[256px] h-[40px] flex space-x-[4px] rounded-full bg-gray-100 items-center">
                               <div className="ml-5 mr-1"><IoSearch className="h-[20px] w-[20px] text-[#A1A1AA] "/></div>
                                <div className="w-[196px] h-[24px] text-[#A1A1AA] text-[15px] leading-relaxed flex items-center">Search any company name</div>
                                   </div>
                            </div>
                            <div className="col-span-2 flex items-center justify-center">
                                <div><CiFilter className="h-[20px] w-[20px] text-[#6E6E76] "/></div>
                                <div className="text-[#52525B]">Filter</div>
                            </div>
                            <div className="col-span-3">
                            <div className=" flex space-x-[8px] px-1 py-1 items-center justify-center bg-[#37623A] rounded-full ml-4">
                                     <div>
                                        <IoAdd />
                                     </div>
                            <div className="text-white">New Report</div>
                                     </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
              
        </div>
        <div className="mt-0 min-h-screen border border-[1px] rounded-[16px] border-[#E4E4E7] overflow-auto">
  <table className="w-full border-collapse border border-[#E4E4E7]">
    <thead className="bg-gray-100 text-black">
      <tr>
        <th className="px-4 py-2 text-center border-b text-center">Company Name</th>
        <th className="px-4 py-2 text-center border-b text-center">Report Type</th>
        <th className="px-4 py-2 text-center border-b text-center">Country</th>
        <th className="px-4 py-2 text-center border-b text-center">Date Created</th>
        <th className="px-4 py-2 border-b"></th>
      </tr>
    </thead>
    <tbody className="text-black">
      {tableItems.map((tableitem, index) => (
        <tr key={index} className="py-10">
          <td className="px-4 py-2">{tableitem.CompanyName}</td>
          <td className="px-4 py-2">{tableitem.ReportType}</td>
          <td className="px-4 py-2">{tableitem.Country}</td>
          <td className="px-4 py-2">{tableitem.DateCreated}</td>
          <td className="px-4 py-2 text-center transform rotate-90">{"..."}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
}
