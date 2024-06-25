import "../styles/style.css"
import React, { useEffect, useRef } from 'react';
function Trabajos() {
    const scrollContainerRef = useRef(null);
    const lastMouseX = useRef(0);
    const lastTouchX = useRef(0);
    const isTouchDevice = useRef(false);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        const handleMouseMove = (event) => {
            if (isTouchDevice.current) return;

            if (lastMouseX.current === 0) {
                lastMouseX.current = event.clientX;
            }

            const deltaX = event.clientX - lastMouseX.current;
            lastMouseX.current = event.clientX;

            scrollContainer.scrollLeft -= deltaX;
        };

        const handleTouchMove = (event) => {
            if (!isTouchDevice.current) return;
            if (event.touches.length !== 1) return;

            const touch = event.touches[0];

            if (lastTouchX.current === 0) {
                lastTouchX.current = touch.clientX;
            }

            const deltaX = touch.clientX - lastTouchX.current;
            lastTouchX.current = touch.clientX;

            scrollContainer.scrollLeft -= deltaX;
        };

        const handleMouseLeave = () => {
            lastMouseX.current = 0;
        };

        const handleTouchEnd = () => {
            lastTouchX.current = 0;
        };

        const handleTouchStart = () => {
            isTouchDevice.current = true;
        };

        scrollContainer.addEventListener('mousemove', handleMouseMove);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);
        scrollContainer.addEventListener('touchmove', handleTouchMove);
        scrollContainer.addEventListener('touchend', handleTouchEnd);
        scrollContainer.addEventListener('touchstart', handleTouchStart);

        return () => {
            scrollContainer.removeEventListener('mousemove', handleMouseMove);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
            scrollContainer.removeEventListener('touchmove', handleTouchMove);
            scrollContainer.removeEventListener('touchend', handleTouchEnd);
            scrollContainer.removeEventListener('touchstart', handleTouchStart);
        };
    }, []);
  return ( 
   
    <div  >
         <div className="cp">
             <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
                <h2 className="txt-c">Nuestros Trabajos</h2>
            </div>
             </div>
       
            <div className="container-fluid scroll" ref={scrollContainerRef}>
            <div className="item">
                <img className="img-fluid" src="https://decortextilginos.wordpress.com/wp-content/uploads/2022/08/whatsapp-image-2022-08-17-at-2.49.42-pm-2.jpeg" alt="imagen"/>
            </div>

            <div className="item">
                <img className="img-fluid" src="https://decortextilginos.wordpress.com/wp-content/uploads/2022/08/whatsapp-image-2022-08-17-at-2.49.42-pm-2.jpeg" alt="imagen"/>
            </div>

            <div className="item">
                <img className="img-fluid" src="https://decortextilginos.wordpress.com/wp-content/uploads/2022/08/whatsapp-image-2022-08-17-at-2.49.42-pm-2.jpeg" alt="imagen"/>
            </div>

            <div className="item">
                <img className="img-fluid" src="https://decortextilginos.wordpress.com/wp-content/uploads/2022/08/whatsapp-image-2022-08-17-at-2.49.42-pm-2.jpeg" alt="imagen"/>
            </div>

            <div className="item">
                <img className="img-fluid" src="https://decortextilginos.wordpress.com/wp-content/uploads/2022/08/whatsapp-image-2022-08-17-at-2.49.42-pm-2.jpeg" alt="imagen"/>
            </div>

            <div className="item">
                <img className="img-fluid" src="https://decortextilginos.wordpress.com/wp-content/uploads/2022/08/whatsapp-image-2022-08-17-at-2.49.42-pm-2.jpeg" alt="imagen"/>
            </div>

            <div className="item last">
                <img className="img-fluid" src="https://decortextilginos.wordpress.com/wp-content/uploads/2022/08/whatsapp-image-2022-08-17-at-2.49.42-pm-2.jpeg" alt="imagen"/>
            </div>
            </div>
        </div>
    </div>
  );
  
}

export default Trabajos;