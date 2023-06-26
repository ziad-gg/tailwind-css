import '../../index.css';

import { useLottie, useLottieInteractivity } from "lottie-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import AnimationData from '../../../public/cubes.json';

function SecoundSection() {

    const options = {
        animationData: AnimationData,
    };

    const lottieObj = useLottie(options, { height: '30rem' });
    const Animation = useLottieInteractivity({
        lottieObj,
        mode: "scroll",
        actions: [
            {
                
                visibility: [0, 1],
                type: "seek",
                frames: [0, 180],
            },
        ],
    });

    
        return (
            <>
                <section className='min-w-full bg-blue-600 h-[40rem] flex text-white flex-row-reverse'>
                <div className='w-1/2'> {Animation}</div>
                <div className='w-1/2 ps-10 pt-16'>
                    <p className='text-3xl font-bold select-none block'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nesciunt aliquam minus error aperiam velit cumque eaque non, animi veniam dolor fugiat accusantium architecto quasi molestias recusandae distinctio mollitia numquam.</p>
                    <button className='bg-blue-400 rounded-full w-40 h-11 mt-10'>Login Now <FontAwesomeIcon icon={faLongArrowRight} className='ps-1' /> </button>
                </div>
                </section>
            </>
        )
    }

    export default SecoundSection
