import React from "react";
import { Button } from "./ui/button";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import { Separator } from "./ui/separator";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price?: number;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border">
      <img className="w-full" src={imageUrl} alt="Card image" />
      <div className="px-6 py-4 flex justify-between">
        <div>
          <div className="font-bold text-xl mb-2">{title}</div>
        </div>
        <div className="flex flex-col">
          <Button variant="ghost" className="">
            View <ArrowRight />
          </Button>
            <Button variant="ghost" className="underline  ">
                ${price}
            </Button>
        </div>

      </div>
      <Separator />
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{description}</p>
      </div>
        {/* <p className="text-gray-700 text-base">{description}</p> */}
    </div>
  );
};

export default Card;
