import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6';
import { useMediaQuery } from 'react-responsive';
import { Typography } from '@mui/material';

// Music files
import Wulomei_akrowa from '../assets/music/Wulomei - Akrowa (Ghanaian Folk Traditional Song).mp4';
import Wulomei_Meridian from '../assets/music/Wulomei - Meridian (Ghanaian Folk Traditional Song).mp4';
import Wulomei_Tswa from '../assets/music/Wulomei - Tswa Omanye Aba.mp4';

const albumData = [
    { id: 1, title: "Naa Amanua Wulemei - Akrowa", video: Wulomei_akrowa },
    { id: 2, title: "Wulomei - Tswa Omanye Aba", video: Wulomei_Tswa },
    { id: 3, title: "Wulomei - Meridian", video: Wulomei_Meridian },
];

const Carousel = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });

    const [hoveredVideo, setHoveredVideo] = useState(null);

    return (
        <div style={{ width: '70%', margin: '0 auto', position: 'relative' }}>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
                spaceBetween={isMobile ? 10 : 15}
                loop={true}
                style={{ padding: '20px 0' }}
            >
                {albumData.map((album) => (
                    <SwiperSlide key={album.id}>
                        <div
                            className="album-card"
                            style={{
                                textAlign: 'center',
                                background: '#f8f8f8',
                                borderRadius: '8px',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                            onMouseEnter={() => setHoveredVideo(album.id)}
                            onMouseLeave={() => setHoveredVideo(null)}
                        >
                            <video
                                src={album.video}
                                className="album-video"
                                controls
                                style={{
                                    maxWidth: "100%",
                                    height: "100%",
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            >
                                Your browser does not support the video element.
                            </video>
                            {/* 
                            
                                {hoveredVideo === album.id && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        background: 'rgba(0, 0, 0, 0.5)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '50%',
                                        padding: '10px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <a
                                        href={album.video}
                                        download
                                        style={{
                                            color: 'white',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Download
                                    </a>
                                </div>
                            )}
                            
                            
                            
                            */}
                            <div
                                className="album-name"
                                style={{
                                    marginTop: '10px',
                                    fontSize: isMobile ? '14px' : '16px',
                                    fontWeight: 'bold',
                                }}
                            >
                                <Typography>{album.title}</Typography>
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
