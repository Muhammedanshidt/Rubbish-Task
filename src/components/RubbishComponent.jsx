import React from 'react'
import SubRubbish from './SubRubbish'

function RubbishComponent() {
    return (
        <>
            <div className="rounded-md bg-[#ffffe3] flex flex-col p-2">

                <p className='text-3xl text-[#161717]'>
                RubbishComponent
                </p>
               
                <div >
                    <SubRubbish />
                </div>
            </div>

        </>

    )
}

export default RubbishComponent