import React from 'react'

const Fixed = () => {
  return (
    <div className='fixed inset-0 bg-bgColorDim z-50 grid place-items-center'>
        <div className='bg-bgColor p-3'>
            <div>
                <button>Create</button>
                <button>discard</button>
            </div>
        </div>
    </div>
  )
}

export default Fixed