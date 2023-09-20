/* eslint-disable @next/next/no-img-element */

type Props = {
    imgg: any;
}

const Card = ({imgg}:Props)=>{



   return (
    <div>
        <div className="w-11/12 m-auto shadow-xl">
            <img className=" h-96 w-64 object-cover m-auto" src={imgg} alt="hahaha"></img>
        </div>
    </div>
   ) 
}
export default Card;