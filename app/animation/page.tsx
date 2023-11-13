'use client'
import { useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function Page() {
    const path: any = useRef(null);
    let progress = 0;
    let time = Math.PI / 2;
    let x = 0.5;
    let reqID: null | number = null;
    const REDUCE_ANIMATION = 0.025

    useEffect(() => {
        setPath(progress)
    }, []);

    function setPath(progress: number) {
        const {innerWidth} = window;
        const width = innerWidth * 0.7;
        path.current.setAttributeNS("", "d", `M0 50 Q${width * x} ${50 + progress}, ${width} 50`);
    }

    function handleMouseMove(e: MouseEvent) {
        const {movementY, clientX} = e;
        const { left, width } = path.current.getBoundingClientRect();
        x = (clientX - left) / width;
        progress += movementY;
        console.log(clientX);
        // x = movementX
        setPath(progress);
    }

    function handleMouseLeave() {
        animateOut()
    }

    function handleMouseEnter() {
        if (reqID) {
            window.cancelAnimationFrame(reqID);
            resetAnimation();
        }
    }

    function lerp(x: number, y: number, a: number) {
        return x * (1 - a) + y * a;
    } 

    function resetAnimation() {
        time = Math.PI / 2;
        progress = 0;
    }

    function animateOut() {
        const newProgress = progress * Math.sin(time);
        time += 0.2
        setPath(newProgress);
        progress = lerp(progress, 0, REDUCE_ANIMATION);
        if (Math.abs(progress) > 0.75) {
            reqID = window.requestAnimationFrame(animateOut);
        } else {
            resetAnimation()
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.body}>

                <div className={styles.line}>
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.box}></div>
                    <svg>
                        <path ref={path}></path>
                    </svg>
                </div>

                <div className={styles.description}>
                    <p>Smart Development</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat inventore dicta dignissimos maxime neque debitis nemo officiis laudantium officia hic ducimus, vel voluptatem dolor deserunt libero. Quo iste doloribus ipsum!</p>
                </div>
                <div className={styles.tagContainer}>
                    <p>Areas</p>
                    <div className={styles.tags}>
                        <p>E-commerce</p>
                        <p>Finance</p>
                        <p>Education</p>
                        <p>Social</p>
                        <p>Entertainment</p>
                        <p>Medicine</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
