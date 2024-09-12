"use client"
import { CreditCard } from "lucide-react";
import { ArrowDown } from 'lucide-react';
import {Button} from './button'
export const Appbar = ()=>{
    return <header className="flex justify-between px-5 py-4 text-white items-center">
        <div className="text-2xl flex text-green-500 flex gap-x-1.5 items-center">
            <CreditCard className="w-8 h-8"/>
            Payfast

        </div>
        
        <div className="flex gap-x-1.5">   
            <Button children={"Login"} onClick={()=>{alert('Button is Clicked')}} className="py-1 px-3 hover:bg-gray-500 hover:rounded-xl"/>
            <Button children={"Sign In"} onClick={()=>{alert('Button is Clicked')}} className="py-1 px-3  hover:bg-gray-500 hover:rounded-xl"/>
            <Button children={"Merchant Login"} onClick={()=>{alert('Get Payfast')}} className="border rounded-xl py-1 px-3 hover:bg-gray-500 hover:rounded-xl"/>
        </div>
    </header>
}