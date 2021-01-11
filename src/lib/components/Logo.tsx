// ;<div style={{ textAlign: 'center' }}>
//   <h3 style={{ margin: '0px', marginBottom: '10px' }}>Connect with a device</h3>
// </div>

import React from 'react'
import speakerLogo from '../../public/speaker.svg'

const Logo: React.FC = () => {
  return (
    <>
      <div style={{ height: '33%', textAlign: 'center' }}>
        <img src={speakerLogo} alt="speaker" height={'100px'} width={'100'} />
      </div>
    </>
  )
}
export default Logo
