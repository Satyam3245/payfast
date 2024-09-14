import { Button } from "./button"

export const About2 = ()=>{
    return <div className="text-white px-[120px] py-12 flex flex-col gap-y-6">
        <div className="text-6xl font-medium">
            Pay Friend !
        </div>
        <div className="w-[550px]">
             Venmo helps settling up feel more like catching up. Send and receive money with Venmo friends to split everyday necessities, bills, and shared activities like takeout or travel.
        </div>
        <Button children={"Learn More"} className="rounded-xl bg-blue-700 w-[110px] py-1 px-2 "/>
    </div>
}