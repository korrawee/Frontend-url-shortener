import React from 'react';
import backgroundImage from '../assets/images/background.jpg';
import { InputUrl } from './InputUrl';
import { BigText, Description } from './Text';


const HeroSection: React.FC<any> = (props) => {
    
    return (
        <section className="bg-center bg-cover  h-screen w-full items-top" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="container flex flex-col items-center mx-auto py-10 px-4">
                <BigText>Short URL</BigText>
                <Description>
                    Say goodbye to cluttered links and hello to easy-to-share, custom shortened URLs. Perfect for social media, messaging, and email. Try it out now and experience the convenience for yourself!
                </Description>
                <InputUrl/>                
            </div> 
        </section>
)
}

export default HeroSection;

// import React from 'react';
// import backgroundImage from '../assets/images/background.jpg';

// const HeroSection: React.FC = () => {
//     return (
//         <section className="bg-center bg-cover h-screen flex " style={{backgroundImage: `url(${backgroundImage})`}}>
//             <div className="container mx-auto px-4">
//                 <div className="mt-16">
//                     <h1 className=" text-6xl font-extrabold text-center text-indigo-600">SHORT URL</h1>
//                     <p className="text-xl mt-4 max-w-xl mx-auto text-center text-indigo-500">
//                         Say goodbye to cluttered links and hello to easy-to-share, custom shortened URLs. Perfect for social media, messaging, and email. Try it out now and experience the convenience for yourself!
//                     </p>
//                 </div>
//                 <div className="flex justify-center mt-10 w-2/6  mx-auto">
//                     <input type="text" placeholder="http://" className="bg-indigo-500 text-lg text-white font-bold w-full py-4 px-6 rounded-full hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"  />
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default HeroSection;
