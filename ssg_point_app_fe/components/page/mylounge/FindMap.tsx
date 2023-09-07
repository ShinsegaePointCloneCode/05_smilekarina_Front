'use client'

import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function FindMap() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [center, setCenter] = useState({
        lat: 37.5665, // 초기 기본 위치: 서울의 위도
        lng: 126.9780  // 초기 기본 위치: 서울의 경도
    });
    const [markerIcons, setMarkerIcons] = useState<any[]>([]);

    useEffect(() => {
        // 위치 정보가 캐싱되어 있다면 불러오기
        if (typeof window !== 'undefined') {
            const cachedLocation = localStorage.getItem('userLocation');
            if (cachedLocation) {
                setCenter(JSON.parse(cachedLocation));
            } else {
                // 캐싱된 위치 정보가 없다면 사용자에게 위치 정보 요청
                if (navigator && navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(position => {
                        const newPos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        setCenter(newPos);
                        localStorage.setItem('userLocation', JSON.stringify(newPos));
                    });
                } else {
                    alert("이 브라우저는 Geolocation을 지원하지 않습니다.");
                }
            }

            if (window.google && window.google.maps) {
                const icons = malls.map(mall => ({
                    url: mall.imageUrl,
                    scaledSize: new window.google.maps.Size(30, 30)
                }));
                setMarkerIcons(icons);
                setIsLoaded(true);
            }
        }
    }, []);

    const containerStyle = {
        width: '100vw',
        height: '100vh'
    };
    const malls = [
        { label: "C", name: "코엑스몰", lat: 37.5115557, lng: 127.0595261, imageUrl: '/images/point-icon.png' },
        // { label: "G", name: "고투몰", lat: 37.5062379, lng: 127.0050378 },
        // { label: "D", name: "동대문시장", lat: 37.566596, lng: 127.007702 },
        // { label: "I", name: "IFC몰", lat: 37.5251644, lng: 126.9255491 },
        // { label: "L", name: "롯데월드타워몰", lat: 37.5125585, lng: 127.1025353 },
        // { label: "M", name: "명동지하상가", lat: 37.563692, lng: 126.9822107 },
        // { label: "T", name: "타임스퀘어", lat: 37.5173108, lng: 126.9033793 },
    ];

    const mapStyles = [
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        }
    ];

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <LoadScript
                googleMapsApiKey="AIzaSyDQSqTNNjT3emVboEA_MautXqAoBaCZEQw"
                onLoad={() => setIsLoaded(true)}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                    options={{
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                        styles: mapStyles
                    }}
                >
                    {malls.map((mall, index) => {
                        // Here we define the default markerIcon
                        let markerIcon: any = { url: "" };  // Use "any" type for flexibility

                        if (typeof window !== 'undefined' && window.google && window.google.maps) {
                            markerIcon = {
                                url: mall.imageUrl,
                                scaledSize: new window.google.maps.Size(30, 30)
                            };
                        }

                        return (
                            <Marker
                                key={index}
                                position={{ lat: mall.lat, lng: mall.lng }}
                                label={mall.label}
                                title={mall.name}
                                icon={markerIcon}
                            />
                        );
                    })}
                </GoogleMap>
            </LoadScript>
        </div>
    )
}
