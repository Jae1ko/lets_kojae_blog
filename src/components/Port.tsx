// import React, { useEffect, useRef } from 'react';
// import Image from 'next/image';

// import { portText } from '@/constants';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// const Port = () => {
//     const horizontalRef = useRef<any>(null);
//     const sectionRef = useRef<any>([]);

//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         const horizontal = horizontalRef.current;
//         const sections = sectionRef.current;

//         console.log(-120 * (sections.length - 1));

//         let scrollTween = gsap.to(sections, {
//             xPercent: -120 * (sections.length - 1),
//             ease: 'none',
//             scrollTrigger: {
//                 trigger: horizontal,
//                 start: 'top 56px',
//                 end: () => '+=' + horizontal.offsetWidth,
//                 pin: true,
//                 scrub: 1,
//                 invalidateOnRefresh: true,
//                 anticipatePin: 1,
//             },
//         });

//         return () => {
//             scrollTween.kill();
//         };
//     }, []);

//     return (
//         <section id="port" ref={horizontalRef}>
//             <div className="port_inner">
//                 <h2 className="port_title">
//                     portfolio <em>포폴 작업물</em>
//                 </h2>
//                 <div className="port_wrap">
//                     {portText.map((port, key) => (
//                         <article
//                             className={`port_item p${key + 1}`}
//                             key={key}
//                             ref={(el) => (sectionRef.current[key] = el)}
//                         >
//                             <span className="num">{port.num}.</span>
//                             <a href={port.code} target="_blank" className="img">
//                                 <Image src={port.img} alt={port.name} width={420} height={262} />
//                             </a>
//                             <h3 className="title">{port.title}</h3>
//                             <p className="desc">{port.desc}</p>
//                         </article>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Port;
