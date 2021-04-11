import React, {useState, useEffect} from 'react'

import banner from '../static/img/header.jpg'

const Headers: React.FC = () => {
    return (
        <div>
            <img src={banner} style={{width: '100%'}} />
        </div>
    )
}

export default Headers
