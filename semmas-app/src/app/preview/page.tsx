import preview_icon from "../../../assets/images/report_preview.svg";
import Image from "next/image";
import { TbTableDown } from "react-icons/tb";
import { TbFileDownload } from "react-icons/tb";
import { TbCoins } from "react-icons/tb";
import { TbInfoSquareRoundedFilled } from "react-icons/tb";
import { TbSelector } from "react-icons/tb";


export default function preview () {
    const loading = true;
    const data = [
        {
            companyName: "Communication & System Solution",
            businessDescription: "Afcon Holdings Ltd develops and executes construction projects in...",
            country: "Israel",
            debtAssets: "0,28%",
            beta: "0,93"
        },
        {
            companyName: "Harn Engineering Solutions Public",
            businessDescription: "BELIMO Holding AG, together with its subsidiaries, develops, prod...",
            country: "Switzerland",
            debtAssets: "4,42%",
            beta: "0,40"
        },
        {
            companyName: "Intraco Limited",
            businessDescription: "Communication & System Solution Public Company Limited, togeth...",
            country: "Thailand",
            debtAssets: "3,61%",
            beta: "0,33"
        },
        {
            companyName: "Solar A/S",
            businessDescription: "Exail Technologies provides robotics, maritime, navigation, aerosp...",
            country: "France",
            debtAssets: "27,58%",
            beta: "1,15"
        },
        {
            companyName: "Teikoku Sen-i Co., Ltd.",
            businessDescription: "FITTERS Diversified Berhad, an investment holding company, trade...",
            country: "Singapore",
            debtAssets: "0,13%",
            beta: "0,42"
        },
        {
            companyName: "BELIMO Holding AG",
            businessDescription: "Harn Engineering Solutions Public Company Limited design, install,...",
            country: "Denmark",
            debtAssets: "129,88%",
            beta: "0,29"
        },
        {
            companyName: "Solar A/S",
            businessDescription: "FITTERS Diversified Berhad, an investment holding company, trade...",
            country: "Switzerland",
            debtAssets: "27,58%",
            beta: "0,40"
        }
    ];
    return (
        <div className="h-screen">
            <div className="bg-[#FFFFFF] mx-36 h-full">
                <div className="flex justify-between py-3">
                    <div className="flex gap-2">
                        <Image src={preview_icon}
                            alt=""
                            className="-mt-2"/>
                        {loading ? 
                        <div className="font-bold text-2xl">Generating report... {`64%`} </div> :
                        <div className="font-bold text-2xl">Report preview</div>}
                    </div>
                    <div className="flex gap-2">
                        <div className={`p-2 font-semibold  rounded-full border  ${loading ? `text-[#A1A1AA] border-[#E4E4E7]` : `border-[#37623A] text-[#37623A]`}`}>Back and edit</div>
                        <div className={`p-2 font-semibold rounded-full  ${loading ? `text-[#A1A1AA] bg-[#F5F5F4]` : `bg-[#37623A] text-[#FAFAFA] `}`}>Save and Continue</div>
                    </div>
                </div>
                <hr className="h-2"/>
                <div className="flex justify-between pt-5">
                    <div>
                        <div>Company Valuation Report - FR1012</div>
                        <div className="flex gap-x-2 text-sm font-medium text-[#52525B] mt-1">
                            <div className="">2024-08-17</div>
                            <div className=""> | </div>
                            <div className="">France</div>
                        </div>
                    </div>
                    {loading ? 
                    <div className="flex gap-4 w-72 h-10 justify-between">
                        <div className="p-1 px-2 bg-[#F5F5F4] w-1/2 rounded-xl"></div>
                        <div className="p-1 px-2 rounded-xl w-1/2 bg-[#F5F5F4]"></div>                        
                    </div>
                    :
                    <div className="flex gap-2 items-start">
                        <div className="p-1 px-2 flex gap-1 items-center bg-[#F4F6F3] rounded-full">
                            <TbTableDown />
                            <div>Export Analysis (Excel)</div>
                        </div>
                        <div className="p-1 px-2 flex gap-1 items-center rounded-full bg-[#F4F6F3]">
                            <TbFileDownload />
                            <div>Export PDF</div>
                        </div>                        
                    </div>
                    }
                    
                </div>
                { loading ? 
                <div className="flex justify-between h-40 gap-5 my-5">
                <div className="w-3/5 border rounded-2xl border-[#E4E4E7]">
                    <div className="px-4">
                        <div className="flex justify-between py-4">
                            <div className="flex gap-x-1 items-center">
                                <div className="bg-[#F6F9F6] rounded-full p-1">
                                    <TbCoins className="text-[#37623A] size-6"/>
                                </div>
                                <div className="font-bold">Company Value</div>
                                <TbInfoSquareRoundedFilled className="text-[#E8EEE7]"/>
                            </div>
                            <div className="font-bold text-4xl">$80,000,000</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="bg-[#F6F9F6] rounded-lg p-2">
                                <div className="text-[#52525B] font-semibold text-xs">Adjusted EV</div>
                                <div className="text-[#27272A] font-bold">$50,087,000</div>
                            </div>
                            <div className="bg-[#F6F9F6] rounded-lg p-2">
                                <div className="text-[#52525B] font-semibold text-xs">Debt</div>
                                <div className="text-[#27272A] font-bold">$0</div>
                            </div>
                            <div className="bg-[#F6F9F6] rounded-lg p-2">
                                <div className="text-[#52525B] font-semibold text-xs">Cash</div>
                                <div className="text-[#27272A] font-bold">$30,087,000</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/5 border rounded-2xl border-[#E4E4E7]">
                    <div className="px-4">
                        <div className="flex justify-between py-4">
                            <div className="flex gap-x-1 items-center">
                                <div className="bg-[#F6F9F6] rounded-full p-1">
                                    <TbCoins className="text-[#37623A] size-6"/>
                                </div>
                                <div className="font-bold">Average Beta</div>
                                <TbInfoSquareRoundedFilled className="text-[#E8EEE7]"/>
                            </div>
                            <div className="font-bold text-4xl">0.92</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-[#F6F9F6] rounded-lg p-2">
                                <div className="text-[#52525B] font-semibold text-xs">Industry Beta</div>
                                <div className="text-[#27272A] font-bold">0.76</div>
                            </div>
                            <div className="bg-[#F6F9F6] rounded-lg p-2">
                                <div className="text-[#52525B] font-semibold text-xs">Subsidiary Beta</div>
                                <div className="text-[#27272A] font-bold">1.07</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            : 
            <div className="flex justify-between h-40 gap-5 my-5">
                    <div className="w-3/5 border rounded-2xl border-[#E4E4E7]">
                        <div className="px-4">
                            <div className="flex justify-between py-4">
                                <div className="flex gap-x-1 items-center">
                                    <div className="bg-[#F6F9F6] rounded-full p-1">
                                        <TbCoins className="text-[#37623A] size-6"/>
                                    </div>
                                    <div className="font-bold">Company Value</div>
                                    <TbInfoSquareRoundedFilled className="text-[#E8EEE7]"/>
                                </div>
                                <div className="font-bold text-4xl">$80,000,000</div>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="bg-[#F6F9F6] rounded-lg p-2">
                                    <div className="text-[#52525B] font-semibold text-xs">Adjusted EV</div>
                                    <div className="text-[#27272A] font-bold">$50,087,000</div>
                                </div>
                                <div className="bg-[#F6F9F6] rounded-lg p-2">
                                    <div className="text-[#52525B] font-semibold text-xs">Debt</div>
                                    <div className="text-[#27272A] font-bold">$0</div>
                                </div>
                                <div className="bg-[#F6F9F6] rounded-lg p-2">
                                    <div className="text-[#52525B] font-semibold text-xs">Cash</div>
                                    <div className="text-[#27272A] font-bold">$30,087,000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/5 border rounded-2xl border-[#E4E4E7]">
                        <div className="px-4">
                            <div className="flex justify-between py-4">
                                <div className="flex gap-x-1 items-center">
                                    <div className="bg-[#F6F9F6] rounded-full p-1">
                                        <TbCoins className="text-[#37623A] size-6"/>
                                    </div>
                                    <div className="font-bold">Average Beta</div>
                                    <TbInfoSquareRoundedFilled className="text-[#E8EEE7]"/>
                                </div>
                                <div className="font-bold text-4xl">0.92</div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="bg-[#F6F9F6] rounded-lg p-2">
                                    <div className="text-[#52525B] font-semibold text-xs">Industry Beta</div>
                                    <div className="text-[#27272A] font-bold">0.76</div>
                                </div>
                                <div className="bg-[#F6F9F6] rounded-lg p-2">
                                    <div className="text-[#52525B] font-semibold text-xs">Subsidiary Beta</div>
                                    <div className="text-[#27272A] font-bold">1.07</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
                <div className="font-bold text-[#27272A] text-lg">
                    Comparables Companies
                </div>
                <div className="overflow-y-auto mt-4 border border-[#E4E4E7] rounded rounded-t-2xl">
                        <table className="min-w-full bg-white rounded rounded-t-2xl">
                            <thead className="rounded-t-2xl font-light">
                                <tr className="border-[#E4E4E7] border-b font-light">
                                    <th className="text-left px-4 py-2 font-medium text-xs text-[#52525B]">Company Name</th>
                                    <th className="text-left px-4 py-2 font-medium text-xs text-[#52525B]">Business Description</th>
                                    <th className="text-left px-4 py-2 font-medium text-xs text-[#52525B]">Country</th>
                                    <th className="text-left px-4 py-2 font-medium text-xs text-[#52525B]">
                                        <div className="flex items-center">
                                            <div>Debt/Assets</div>
                                            <TbSelector />
                                         </div>
                                    </th>
                                    <th className="text-left px-4 py-2 font-medium text-xs text-[#52525B]">
                                        <div className="flex items-center">
                                            <div>Beta</div>
                                            <TbSelector />
                                        </div>
                                    </th>
                                    <th className="text-left px-4 py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index} className={index % 2 === 1 ? "bg-gray-50" : ""}>
                                        <td className="py-2 px-4 border-b border-gray-200 font-bold text-sm text-[#27272A]">{item.companyName}</td>
                                        <td className="py-2 px-4 border-b border-gray-200 font-medium text-sm text-[#52525B]">{item.businessDescription}</td>
                                        <td className="py-2 px-4 border-b border-gray-200 font-medium text-sm text-[#27272A]">{item.country}</td>
                                        <td className="py-2 px-4 border-b border-gray-200 font-medium text-sm text-[#18181B]">{item.debtAssets}</td>
                                        <td className="py-2 px-4 border-b border-gray-200 font-medium text-sm text-[#18181B]">{item.beta}</td>
                                        <td className="py-2 px-4 border-b border-gray-200 text-right">
                                            <i className="fas fa-chevron-right"></i>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    )
}