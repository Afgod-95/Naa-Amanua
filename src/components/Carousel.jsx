import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6';
import { useMediaQuery } from 'react-responsive';
import { Typography } from '@mui/material';

const albumData = [
    { id: 1, title: "Album 1", image: "https://via.placeholder.com/300x200.png?text=Album+1" },
    { id: 2, title: "Album 2", image: "https://via.placeholder.com/300x200.png?text=Album+2" },
    { id: 3, title: "Album 3", image: "https://via.placeholder.com/300x200.png?text=Album+3" },
    { id: 4, title: "Album 4", image: "https://via.placeholder.com/300x200.png?text=Album+4" },
    { id: 5, title: "Album 5", image: "https://via.placeholder.com/300x200.png?text=Album+5" },
];

const Carousel = () => {
    // Responsive media queries
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });

    return (
        <div style={{ width: '70%', margin: '0 auto', position: 'relative' }}>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                    hide: true, // Hides the default arrows
                }}
                slidesPerView={isMobile ? 1 : isTablet ? 2 : 3} // Adjust slides per view based on screen size
                spaceBetween={isMobile ? 10 : 15} // Adjust space between slides
                loop={true} style={{ padding: '20px 0', }}

            >
                {albumData.map((album) => (
                    <SwiperSlide key={album.id}>
                        <div
                            className="album-card"
                            style={{
                                textAlign: 'center',
                                background: '#f8f8f8',
                                borderRadius: '8px',
                            }}
                        >
                            <img
                                src={album.image}
                                alt={album.title}
                                className="album-image"
                                style={{
                                    maxWidth: "100%",
                                    height: "100%",
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                            <div
                                className="album-name"
                                style={{
                                    marginTop: '10px',
                                    fontSize: isMobile ? '14px' : '16px',
                                    fontWeight: 'bold',
                                }}
                            >

                                <Typography>
                                    Naa Amanua Worlomei
                                </Typography>

                            </div>

                            <div
                                className="album-title"
                                style={{
                                    marginTop: '10px',
                                    fontSize: isMobile ? '14px' : '16px',
                                    fontWeight: 'bold',
                                }}
                            >

                                <Typography>
                                    {album.title}
                                </Typography>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Arrows */}
            <div className="swiper-button-prev" style={{ position: 'absolute', left: '-40px', top: '50%', zIndex: 10 }}>
                <FaChevronLeft size={isMobile ? 24 : 30} />
            </div>
            <div className="swiper-button-next" style={{ position: 'absolute', right: '-40px', top: '50%', zIndex: 10 }}>
                <FaChevronRight size={isMobile ? 24 : 30} />
            </div>
        </div>
    );
};

export default Carousel;
