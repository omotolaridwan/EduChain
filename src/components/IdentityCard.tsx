import React from 'react'
import { Identity, Avatar, Badge, Name, Address } from "@coinbase/onchainkit/identity";

const IdentityCard = () => {
  return (
    <div>
      <Identity
       address="0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9"
       schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
       className="rounded-xl"
      >
         <Avatar className=''>
           <Badge className="badge"/>
         </Avatar>
         <Name />
         <Address />
      </Identity>
    </div>
  )
}

export default IdentityCard