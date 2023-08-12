import { PhRecommendation, certificateOfLWS, lwsRecommendation } from '@/public';
import Image from 'next/image';
import React from 'react';

const Achieve = () => {
    return (
        <section>
            <div className='w-full'>
                {/* card  */}
                <div className='grid grid-cols-1 lgl:grid-cols-2 gap-5'>
                    <Image src={lwsRecommendation} alt='LWS-Recomandation'/>
                    <Image src={PhRecommendation}  alt='LWS-Recomandation'/>
                    <Image src={certificateOfLWS} alt='LWS-Recomandation'/>
                </div>
            </div>
        </section>
    );
};

export default Achieve;