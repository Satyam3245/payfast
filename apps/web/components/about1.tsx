export const About1 = ()=>{
    return <div>
        <div className="text-white px-12 py-4">
            <div className="bg-gray-500 p-6 rounded-xl flex justify-around">
                <div className="flex flex-col">
                    <h1 className="text-6xl font-semibold">Fast, Safe,</h1>
                    <h1 className="text-6xl font-semibold">social,</h1>
                    <h1 className="text-6xl font-semibold">payments,</h1>
                    <div className="w-[320px] mt-7 text-md">
                        Pay, get paid, grow a business, and more. Join the tens of millions of people on Payfast.
                    </div>
                    <button className="mt-10 rounded-xl bg-blue-500 px-4 py-2 shadow-xl shadow-gray-900 hover:shadow-none w-[115px]">
                        Get Payfast
                    </button>
                </div>
                <img 
                    src="https://images.ctfassets.net/gkyt4bl1j2fs/5up9qIIl3KjCbKRNTo4rA0/dc90bd5478ba48d4109c54965c61f95b/home-hero.png?w=1600&h=1230&q=50&fm=webp&bg=transparent" 
                    className="w-[460px] h-[400px]"
                />
            </div>
        </div>
        
    </div>
}