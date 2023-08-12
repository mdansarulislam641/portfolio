
import Image from 'next/image';
import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
const Achieve = () => {
    const images = [
        "https://i.ibb.co/rdDG67N/LWS-Recommendation-Letter.jpg",
        "https://i.ibb.co/2P4YWk5/recomendation-of-PH.jpg",
       " https://i.ibb.co/ScjPsyq/LWS-Certificate.jpg"
     

    ]
    return (
        <section>
            <div className='w-full'>
                {/* card  */}
                <div className='grid grid-cols-1 lgl:grid-cols-2 gap-5'>
                <PhotoProvider>
                   { images.map(( img , idx) => (
                      <PhotoView key={idx}  src={img}> 
                            <Image src={img} width={1000} height={500} alt='achieve-image'/>
                      </PhotoView>
                   ))}
                 
                    </PhotoProvider>
                </div>
            </div>
        </section>
    );
};

export default Achieve;