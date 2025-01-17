import React from 'react'
import SubParcel from './SubParcel'

function ParcelComponent() {
    return (
        <>
            <div className='rounded-md bg-[#ffffe3] flex flex-col p-2'>
            <p className='text-3xl text-[#161717]'>
                    ParcelComponent
                </p>
                <div>
                    <SubParcel/>
                </div>
            </div>
        </>


    )
}

export default ParcelComponent