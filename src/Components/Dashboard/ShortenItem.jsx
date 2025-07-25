import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react'
import { FaExternalLinkAlt, FaRegCalendarAlt, FaSadCry, } from 'react-icons/fa';
import { MdAnalytics, MdOutlineAdsClick } from 'react-icons/md';
import { IoMdCopy } from 'react-icons/io';
import { LiaCheckSolid } from 'react-icons/lia';
import toast from 'react-hot-toast';
import api from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { useStoreContext } from '../../contextApi/ContextApi';
export const ShortenItem = ({ originalUrl, shortUrl, clickCount, localDateTime: createdDate }) => {

    const subDomain = import.meta.env.VITE_REACT_SUBDOMAIN.replace(
        /^https?:\/\//,
        ""
    )
    const { token } = useStoreContext();

    const [isCopied, setIsCopied] = useState(false)
    const [analyticsToggle, setAnalyticsToggle] = useState(false)
    const [selectedUrl, setSelectedUrl] = useState()
    const [loader, setLoader] = useState(false)
    const [analyticsData, setAnaylicsData] = useState([]);
    const navigate = useNavigate();
    const handleCopy = async () => {
        navigator.clipboard.writeText(subDomain + "/" + shortUrl)
        try {
            await navigator.clipboard.writeText(`${subDomain}/${shortUrl}`);
            console.log("Clipboard write succeeded");
            setIsCopied(true);
            toast.success("Short URL Copied To Clipboard", { position: "bottom-center", className: "mb-5", duration: 1000 });
            setTimeout(() => setIsCopied(false), 1000);
        } catch (error) {
            console.error("Clipboard write failed:", error);
            toast.error("Failed to copy to clipboard", { position: "bottom-center", className: "mb-5", duration: 1000 });
        }
    }

    const analyticsHandler = (shortUrl) => {
        if (!analyticsToggle) {
            setSelectedUrl(shortUrl);
        }
        setAnalyticsToggle(!analyticsToggle);
    }

    const fetchMyShortUrlAnalytics = async () => {
        setLoader(true);
        try {
            const today = new Date().toISOString().split("T")[0];
            const { data: res } = await api.get("/api/urls/analytics/" + selectedUrl + "?startDate=2025-05-01&endDate=" + today, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + token
                }
            });
            console.log(res);
            setAnaylicsData(res);
            setSelectedUrl("");
        } catch (error) {
            navigate('/error');
            console.log(error)
        } finally {
            setLoader(false);
        }
    }
    useEffect(() => {
        if (selectedUrl) {
            fetchMyShortUrlAnalytics()
        }
    }, [selectedUrl])
    return (
        <div className={`bg-slate-100 shadow-lg border border-dotted  border-slate-500 px-6 sm:py-1 py-3 rounded-md  transition-all duration-100 `}>
            <div className={`flex sm:flex-row flex-col  sm:justify-between w-full sm:gap-0 gap-5 py-5 `}>
                <div className="flex-1 sm:space-y-1 max-w-full overflow-x-auto overflow-y-hidden ">
                    <div className="text-slate-900 pb-1 sm:pb-0   flex items-center gap-1 ">
                        <a href={`${import.meta.env.VITE_REACT_SUBDOMAIN}/${shortUrl}`}
                            target='_blank'
                            className="text-[17px] font-montserrat font-[600] text-linkColor flex items-center gap-2">
                            {subDomain + "/" + shortUrl}
                            <FaExternalLinkAlt className='text-linkColor'></FaExternalLinkAlt>
                        </a>
                    </div>
                    <div className='flex items-center gap-1'>
                        <h3 className='text-slate-700 font-[400] text-[17px]'>
                            {originalUrl}
                        </h3>
                    </div>
                    <div className='flex items-center gap-8 pt-6'>
                        <div className='flex gap-1 items-center font-semibold text-green-800'>
                            <span className='text-[22px] me-1'>
                                <MdOutlineAdsClick />
                            </span>
                            <span className="text-[16px] ">{clickCount}</span>
                            <span className='text-[15px]'>
                                {clickCount === 0 || clickCount === 1 ? "Click" : "Clicks"}
                            </span>
                        </div>
                        <div className='flex gap-2 items-center font-semibold text-lg text-slate-800'>
                            <span className='text-[22px] me-1'>
                                <FaRegCalendarAlt />
                            </span>
                            <span className="text-[17px] ">{
                                dayjs(createdDate).format("DD-MMM, YYYY")
                            }</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 sm:justify-end items-center gap-4">
                    <button
                        onClick={handleCopy}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors 
                ${isCopied ? "bg-green-600" : "bg-btnColor hover:bg-btnColor/90"} 
                text-white font-medium shadow-md`}
                    >
                        {isCopied ? "Copied" : "Copy"}
                        {isCopied ? (
                            <LiaCheckSolid className="text-lg" />
                        ) : (
                            <IoMdCopy className="text-lg" />
                        )}
                    </button>
                    <div className='flex cursor-pointer gap-1 items-center bg-rose-700 py-2 font-semibold shadow-md shadow-slate-500 px-6 rounded-md text-white '>
                        <button onClick={() => analyticsHandler(shortUrl)}>Analytics</button>
                        <MdAnalytics className='text-md'></MdAnalytics>
                    </div>
                </div>

            </div>
            <React.Fragment>
                <div className={
                    `${analyticsToggle ? "flex" : "hidden"
                    } max-h-96 sm:mt-5 min-h-96 relative border-t-2 w-[100%] overflow-hidden `
                }>
                    {loader ? (<div>

                    </div>) : (<div>

                    </div>)}
                </div>
            </React.Fragment>
        </div>
    )
}
