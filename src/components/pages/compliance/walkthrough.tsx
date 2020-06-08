import React from 'react'

import Wave from '../../common/wave'

const Walkthrough: React.FC = () => {
  return (
    <Wave
      background="blue"
      wave="gray"
      direction="rtl"
      className="flex justify-center flex-grow text-3xl text-center"
    >
      How Travel Rule Works with PayID
    </Wave>
  )
}

export default Walkthrough