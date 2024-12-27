"use client";

import Image from 'next/image'
const WhastsApp = () => {
    return (
        <a href="https://whatsapp.com/channel/0029Vavpfw24yltWH5h3hc0J" target='_blank' className='btnWhatsApp'>

            <Image
                src="/images/whatsapp.png"
                width={50}
                height={50}
                alt="Iphone 15 Pro Max 256gb"
            />
        </a>

    )
}

export default WhastsApp
