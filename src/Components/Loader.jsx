import React from 'react'
import { ThreeDots } from "react-loader-spinner"
const Loader = () => {
    return (
        <div className="flex justify-center items-center w-full h-[450px]">
            <div className="flex flex-col items-center gap-1">
                <ThreeDots
                    visible={true}
                    height="80"
                    width="80"
                    color="#007bff" // Replace this with your website's primary color hash
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        </div>
    )
}

export default Loader