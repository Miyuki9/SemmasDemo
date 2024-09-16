import semmas_icon from "../../../assets/images/semmas.svg"
import Image from "next/image"
import { TbCoins } from "react-icons/tb";
import checkbox from "../../../assets/images/checkbox.svg"
import { TbReportMedical } from "react-icons/tb";
import { TbFileReport } from "react-icons/tb";
import { TbCube3dSphere } from "react-icons/tb";
import { TbPackage } from "react-icons/tb";
import { TbStack2 } from "react-icons/tb";
import { TbCategory2 } from "react-icons/tb";

export default function valuation() {
    return (
        <div className="bg-[#F4F6F3] h-screen grid gap-4 place-content-center place-items-center">
            <Image src={semmas_icon}
                alt=""
                className="-mt-3"/>
            <div className="h-[500px] w-[560px] bg-[#FFFFFF] rounded-3xl">
                <div className="m-8 h-full ">
                    <div className="">
                        <div className="flex w-full gap-2">
                            <div className="bg-[#37623A] w-1/2 h-[8px] rounded-full"></div>
                            <div className="bg-[#F1F4F0] w-1/2 h-[8px] rounded-full"></div>
                        </div>
                        <div className="text-[#27272A] font-bold my-6 text-3xl">Create your first report</div>
                        <div className="font-bold text-[#27272A] text-xl">What would you like to value?</div>
                        <div className="grid grid-cols-4 gap-2 h-[240px]">
                            <div className="bg-[#37623A] rounded-2xl h-28">
                                <div className="grid grid-cols-7">
                                <Image src={checkbox}
                                    alt=""
                                    className="col-start-6 mt-3 ml-1"/>
                                </div>
                                <div className="grid grid-cols-3 mb-1">
                                <TbCoins className="text-white size-8 col-start-2"/>
                                </div>
                                <div className="grid place-content-center place-items-center">
                                    <div className="text-white font-bold text-sm">Company</div>
                                </div>
                            </div>
                            <div className="h-28 bg-[#F4F6F3] rounded-2xl grid place-content-center place-items-center">
                                <TbReportMedical className="text-[#37623A] size-7 -mt-4"/>
                                <div className="font-bold text-sm text-[#52525B] mt-2 -mb-2">New loan</div>
                            </div>
                            <div className="h-28 bg-[#F4F6F3] rounded-2xl grid place-content-center place-items-center">
                                <TbFileReport className="text-[#37623A] size-7 -mt-4"/>
                                <div className="font-bold text-sm text-[#52525B] mt-2 -mb-2">Existing loan</div>
                            </div>
                            <div className="h-28 bg-[#F4F6F3] rounded-2xl grid place-content-center place-items-center">
                                <TbCube3dSphere className="text-[#37623A] size-7 -mt-4"/>
                                <div className="font-bold text-sm text-[#52525B] mt-2 -mb-2">IP licence</div>
                            </div>
                            <div className="h-28 bg-[#F4F6F3] rounded-2xl grid place-content-center place-items-center">
                                <TbPackage className="text-[#37623A] size-7 -mt-4"/>
                                <div className="text-wrap text-center mx-2 font-bold text-sm text-[#52525B] mt-2 -mb-2">Price transfer of a good</div>
                            </div>
                            <div className="h-28 bg-[#F4F6F3] rounded-2xl grid place-content-center place-items-center">
                                <TbStack2 className="text-[#37623A] size-7 -mt-4"/>
                                <div className="text-wrap text-center mx-2 font-bold text-sm text-[#52525B] mt-2 -mb-2">Price transfer of a service</div>
                            </div>
                            <div className="h-28 bg-[#F4F6F3] rounded-2xl grid place-content-center place-items-center">
                                <TbCoins className="text-[#37623A] size-7 -mt-4"/>
                                <div className="font-bold text-sm text-[#52525B] mt-2 -mb-2">Contract sale</div>
                            </div>
                            <div className="h-28 bg-[#F4F6F3] rounded-2xl grid place-content-center place-items-center">
                                <TbCategory2 className="text-[#37623A] size-7 -mt-4"/>
                                <div className="font-bold text-sm text-[#52525B] mt-2 -mb-2">Other</div>
                            </div>
                            
                        </div>
                        <div className="my-4 flex justify-end py-4">
                            <div className="bg-[#37623A] rounded-full flex px-7 py-2 items-center"><span className="inline-block align-middle font-semibold text-[#FAFAFA]">Next</span></div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}