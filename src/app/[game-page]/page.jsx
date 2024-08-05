'use client';
import { usePathname } from 'next/navigation';
import getInfo from '../api/game-page';
import { Suspense } from 'react';


export default async function Page() {
    const guid = (usePathname().slice(1,));
    const data = await getInfo(guid);
    console.log(data);
    return <p>{guid}</p>
}