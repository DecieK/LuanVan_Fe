/* eslint-disable @next/next/no-img-element */

type Props = {
    imgg: any;
}

const Card = ({imgg}:Props)=>{



   return (
    <div>
        <div className="w-[100%] bg-[#fab1a0] shadow-xl">
            <img className="h-[250px] w-[100%] object-cover" src={imgg} alt="hahaha"></img>
        </div>
    </div>
   ) 
}
export default Card;