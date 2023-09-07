import Layouts from '@/components/layout'
import CommonFilter from '@/components/views/common/common-filter'
import React from 'react'

const SingleProperty = () => {
  return (
    <Layouts isFromOtherPage={true}>
        <div className=' min-h-[500px] pt-24'>
            <CommonFilter/>
        </div>
    </Layouts>
  )
}

export default SingleProperty 