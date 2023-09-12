'use client'

import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useSession } from 'next-auth/react';

interface Branch {
    franchiseName: string;
    franchiseImage: string;
    branchName: string;
    branchAddress: string;
    branchLatitude: number;
    branchLontitude: number;
}

interface Pageable {
    sort: {
        empty: boolean;
        unsorted: boolean;
        sorted: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}

interface StoreApiResponse {
    success: boolean;
    code: number;
    result: {
        content: Branch[];
        pageable: Pageable;
        totalPages: number;
        totalElements: number;
        last: boolean;
        size: number;
        number: number;
        sort: {
            empty: boolean;
            unsorted: boolean;
            sorted: boolean;
        };
        numberOfElements: number;
        first: boolean;
        empty: boolean;
    };
}


export default function FindMap() {
    const session = useSession()
    const [isLoaded, setIsLoaded] = useState(false);
    const [center, setCenter] = useState({
        lat: 37.5665,
        lng: 126.9780
    });
    const [malls, setMalls] = useState<Branch[]>([]);
    const { data: sessionData, status } = useSession()
    const [selectedMall, setSelectedMall] = useState<Branch | null>(null);

    const onMarkerClick = (mall: Branch) => {
        setSelectedMall(mall);
    };

    const onInfoWindowClose = () => {
        setSelectedMall(null);  // InfoWindow가 닫힐 때 selectedMall을 null로 설정
    };


    useEffect(() => {
        if (status === 'loading') return;  // 세션 데이터가 로딩 중이면 아무 것도 실행하지 않음

        if (!sessionData?.user?.token) {
            console.error("Token is not provided.");
            return;
        }
        if (typeof window !== 'undefined') {
            const cachedLocation = localStorage.getItem('userLocation');
            if (cachedLocation) {
                setCenter(JSON.parse(cachedLocation));
            } else {
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
        

            fetch('https://smilekarina.duckdns.org/api/v1/mylounge/findStore/map', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.data?.user.token}`
                },
                cache: 'force-cache'  // 캐시를 강제로 사용하도록 설정
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.success) {
                        setMalls(data.result);
                        console.log("Store data fetched:", data);
                    } else {
                        console.error("Failed to fetch store data:", data);
                    }
                })
                .catch(error => {
                    console.error("Error fetching store data:", error);
                });

        }
    }, [status, sessionData]);

    const containerStyle = {
        width: '100vw',
        height: '100vh'
    };

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
        <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
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
                        const markerIcon = {
                            url: mall.franchiseImage,
                            scaledSize: new window.google.maps.Size(60, 60)
                        };
                        return (
                            <Marker
                                key={index}
                                position={{ lat: mall.branchLatitude, lng: mall.branchLontitude }}
                                title={mall.branchName}
                                icon={markerIcon}
                                onClick={() => onMarkerClick(mall)}
                            />
                        );
                    })}

                    {selectedMall && (
                        <InfoWindow
                            position={{
                                lat: selectedMall.branchLatitude,
                                lng: selectedMall.branchLontitude
                            }}
                            onCloseClick={onInfoWindowClose}
                            options={{
                                pixelOffset: new window.google.maps.Size(0, -60) // 마커 이미지의 높이만큼 올립니다. 
                            }}
                        >
                            <div>
                                <h3>{selectedMall.branchName}</h3>
                                <p>{selectedMall.branchAddress}</p>
                            </div>
                        </InfoWindow>
                    )}

                </GoogleMap>
            </LoadScript>
        </div>
    );
}

