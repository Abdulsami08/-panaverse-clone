import { FC } from "react"

interface Iprops{
    header: string,
    discription: string,
    number: number
    haveborder?: boolean 
}

const QuaterBox: FC<Iprops> = ({header, discription, number, haveborder = true}) => {
    return (
        <div className="flex flex-1 gap-3">
            <div className={` rounded-md   flex-1  relative flex flex-col justify-center w-4/12  px-8 py-16 ${haveborder && "border" }`}>
                <h4 className='font-bold text-lg'> {header}</h4>
                <p className='mt-2 text-s Prolate-600 '>{discription}</p>
                <span className='absolute text-gray-200 -top-10 right-10 text-[170px] font-bold -z-10'>{number}</span>
            </div>
        </div>

    )
}

export default QuaterBox