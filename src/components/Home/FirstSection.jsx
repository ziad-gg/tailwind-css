import '../../index.css';

import { useEffect } from 'react';
import { useLottie } from "lottie-react";
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AnimationData from '../../../public/animation.json';

function FirstSection() {
    
    const options = {
        animationData: AnimationData,
        loop: true
    };
    
    const { View, pause, play } = useLottie(options);

    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView) play()
        else pause()
    }, [inView]);

    return (
        <>
            <section ref={ ref } className='min-w-full bg-blue-700 h-[40rem] flex text-white items-center'>
                <div className='w-1/2'> {View}</div>
                <div className='w-1/2 ps-10 pt-16'>
                    <p className='text-3xl font-bold select-none block'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nesciunt aliquam minus error aperiam velit cumque eaque non, animi veniam dolor fugiat accusantium architecto quasi molestias recusandae distinctio mollitia numquam.</p>
                    <button className='bg-blue-400 rounded-full w-40 h-11 mt-10'>Join Now <FontAwesomeIcon icon={faArrowRight} className='ps-1' /> </button>
                </div>
            </section>
        </>
    )
}

export default FirstSection
