import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FaCircleCheck } from 'react-icons/fa6';
import { PricingProps } from '../utils/types';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

const PricingCard: React.FC<PricingProps> = ({ plan }) => {

  const { data: session } = useSession();
  const { toast } = useToast();
  const router = useRouter();

  const existingPlan = () => {
    toast({
      title: "Info",
      description: "You are already using Premium plan"
    });
  }

  const upgradePremium = () => {
    toast({
      title: "Info",
      description: "You are already using Pro plan. Upgrade to premium"
    });
    router.push('https://buy.stripe.com/test_cN29Ch2fU4jRekM6oB');
  }

  return (
    <Card className='text-secondaryColor flex flex-col hover:shadow-[gray] hover:shadow-lg cursor-pointer transition-all ease-out justify-around items-start py-2 px-4 w-[260px] h-[484px]'>
      <CardHeader className='flex flex-col items-start'>
        <CardTitle>{plan.name}</CardTitle>
        <CardDescription className='text-left'>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-1 -p-6 items-start w-full'>
        <h2 className='font-bold text-2xl'>
            INR {plan.price}
        </h2>
        <p>
            {plan.billed}
        </p>
        {
          session?.user.subscription === "free" && (
            <Link href={plan.link} className="relative w-full inline-flex items-center justify-center px-8 py-1 overflow-hidden font-medium text-primaryColor transition duration-300 ease-out border-2 border-primaryColor rounded-md shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primaryColor group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center text-xl font-bold w-full h-full text-primaryColor transition-all duration-300 transform group-hover:translate-x-full ease">Try Now</span>
              <span className="relative invisible text-xl font-bold">Try Now</span>
            </Link>
          ) 
        }
        {
          session?.user.subscription === "pro" && (
            <button onClick={upgradePremium} className="relative w-full inline-flex items-center justify-center px-8 py-1 overflow-hidden font-medium text-primaryColor transition duration-300 ease-out border-2 border-primaryColor rounded-md shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primaryColor group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center text-xl font-bold w-full h-full text-primaryColor transition-all duration-300 transform group-hover:translate-x-full ease">Try Now</span>
              <span className="relative invisible text-xl font-bold">Try Now</span>
            </button>
          )
        }
        {
          session?.user.subscription === "premium" && (
            <button onClick={existingPlan} className="relative w-full inline-flex items-center justify-center px-8 py-1 overflow-hidden font-medium text-primaryColor transition duration-300 ease-out border-2 border-primaryColor rounded-md shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primaryColor group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute flex items-center justify-center text-xl font-bold w-full h-full text-primaryColor transition-all duration-300 transform group-hover:translate-x-full ease">Try Now</span>
                <span className="relative invisible text-xl font-bold">Try Now</span>
            </button>
          )
        }
      </CardContent>
      <CardFooter className='flex flex-col gap-2 -p-3 w-full'>
        <h4 className='text-left font-bold'>{plan.heading}</h4>
        {
            plan.features.map((feature, i) => (
                <p key={i} className='flex gap-2 items-center text-left w-full'>
                    <FaCircleCheck />
                    <p className='text-sm'>
                        {feature}
                    </p>
                </p>
            ))
        }
      </CardFooter>
    </Card>
  )
}

export default PricingCard;
