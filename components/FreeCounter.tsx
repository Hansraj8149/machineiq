'use client'
import React, { useEffect, useState } from 'react'

import { Button } from './ui/button';
import { Zap } from 'lucide-react';
import {useProModal} from '@/hooks/useProModal';


const FreeCounter = () => {
    const proModal = useProModal();
    const [mounted, setMounted]= useState(false);
    useEffect(()=> {
        setMounted(true)
    },[])
    if(!mounted) return null;
  return (
    <div className='px-3'>
    <Button onClick={proModal.onOpen} className='w-full' variant='premium'>
                    Upgrade
                    <Zap className='w-4 h-4 ml-2 fill-white'/>
                </Button>
     
    </div>
  )
}

export default FreeCounter
