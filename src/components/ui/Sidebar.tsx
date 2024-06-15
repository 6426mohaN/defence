'use client'
import React from 'react'
import { sidebarLinks } from '../../../constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Sidebar = () => {
  const pathname = usePathname();
  return (
<section className=' sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-gray-100 p-6 pt-28 text-slate-800 max-sm:hidden lg:w-[264px] '>
  <div className=' flex flex-col gap-6'>
      {sidebarLinks.map((link)=>{
        const isActive = pathname === link.route ;
      return (
        <Link
          href={link.route}
          key={link.label}
          className={cn(' flex gap-4 items-center p-4 rounded-lg justify-start',{' bg-slate-400': isActive})}
        >
          <Image
            src={link.imgUrl}
            alt={link.label}
            width={24}
            height={24}
          />
          <p className=' text-lg font-semibold max-lg:hidden'>
            {link.label}
          </p>
        </Link>
      )
      })}
  </div>

</section>
  )
}

export default Sidebar

//ask what to display on the sidebar
//Home page
//Calander
// Notifications
// about
// 