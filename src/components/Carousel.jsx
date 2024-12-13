import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6';

const albumData = [
    { id: 1, title: "Album 1", image: "https://via.placeholder.com/300x200.png?text=Album+1" },
    { id: 2, title: "Album 2", image: "https://via.placeholder.com/300x200.png?text=Album+2" },
    { id: 3, title: "Album 3", image: "https://via.placeholder.com/300x200.png?text=Album+3" },
    { id: 4, title: "Album 4", image: "https://via.placeholder.com/300x200.png?text=Album+4" },
    { id: 5, title: "Album 5", image: "https://via.placeholder.com/300x200.png?text=Album+5" },
];

const Carousel = () => {
    return (
        <div style={{ width: '80%', margin: '0 auto', position: 'relative' }}>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                    hide: true, // Hides the default arrows
                }}
                slidesPerView={3}
                spaceBetween={15}
                loop={true}
                style={{ padding: '20px 0' }}
            >
                {albumData.map((album) => (
                    <SwiperSlide key={album.id}>
                        <div className="album-card">
                            <img src={album.image} alt={album.title} className="album-image" />
                            <div className="album-title">{album.title}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Arrows */}
            <div className="swiper-button-prev" style={{ position: 'absolute', left: '-40px', top: '50%', zIndex: 10 }}>
                <FaChevronLeft size={30} />
            </div>
            <div className="swiper-button-next" style={{ position: 'absolute', right: '-40px', top: '50%', zIndex: 10 }}>
                <FaChevronRight size={30} />
            </div>
        </div>
    );
};

export default Carousel;
