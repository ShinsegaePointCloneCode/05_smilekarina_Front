'use client'

import React, { useEffect, useState } from 'react'
import styles from './FindRegion.module.css';
import { StoreRegionData } from '@/datas/StoreRegionData';
import { useSession } from 'next-auth/react';

export interface StoreRegionData {
    storeName: string;
    regionName: string;
    subRegion: string;
}

export default function FindRegion() {
    const session = useSession()
    const [selectedRegion, setSelectedRegion] = useState<string>('');
    const [subRegions, setSubRegions] = useState<string[]>([]);
    const [selectedData, setSelectedData] = useState<StoreRegionData>({
        storeName: '',
        regionName: '',
        subRegion: ''
    });

    const handleStoreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedData(prevData => ({
            ...prevData,
            storeName: e.target.value
        }));
    };

    const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRegion(e.target.value);
        setSelectedData(prevData => ({
            ...prevData,
            regionName: e.target.value
        }));
    };

    const handleSubRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedData(prevData => ({
            ...prevData,
            subRegion: e.target.value
        }));
    };

    const checkStore = async () => {
        try {
            if (!session.data?.user.token) {
                console.error("Token is not provided.");
                return;
            }
            
            // Create a new instance of URLSearchParams
            const params = new URLSearchParams();
    
            // Add parameters only if they are not empty strings
            if (selectedData.storeName) {
                params.append('franchiseName', selectedData.storeName);
            }
    
            if (selectedData.regionName) {
                params.append('sidoNm', selectedData.regionName);
            }
    
            if (selectedData.subRegion) {
                params.append('gugunName', selectedData.subRegion);
            }
            
            const response = await fetch(`https://smilekarina.duckdns.org/api/v1/mylounge/findStore/region?${params.toString()}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.data.user.token}`
                }
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
    
            if (data.success) {
                // console.log(data.result.content);
            } else {
                // Handle unsuccessful responses if needed
            }
        } catch (error) {
            console.error("Error sending request:", error);
        }
    }
    
    


    useEffect(() => {
        const regionData = StoreRegionData.find(data => data.regionName === selectedRegion);
        if (regionData) {
            setSubRegions(regionData.subRegion);
        } else {
            setSubRegions([]);  // 일치하는 데이터가 없으면 군/구 목록을 빈 배열로 초기화
        }
    }, [selectedRegion]);


    return (
        <div>
            <div className={`${styles.find_store_wrap04}`}>
                <div className={`${styles.store_select_box}`}>
                    <div className={`${styles.select_box}`}>
                        <select
                            id=""
                            title="제휴사 선택"
                            onChange={handleStoreChange}
                        >
                            <option value=""> 제휴사 </option>
                            <option value="쓱고우"> 쓱고우 </option>
                            <option value="오슬로"> 오슬로 </option>
                            <option value="이마트"> 이마트 </option>
                            <option value="까사미아"> 까사미아 </option>
                            <option value="노브랜드"> 노브랜드 </option>
                            <option value="보노보노"> 보노보노 </option>
                            <option value="센터필드"> 센터필드 </option>
                            <option value="스무디킹"> 스무디킹 </option>
                            <option value="스타벅스"> 스타벅스 </option>
                            <option value="자니로켓"> 자니로켓 </option>
                            <option value="데블스도어"> 데블스도어 </option>
                            <option value="에브리데이"> 에브리데이 </option>
                            <option value="와인앤모어"> 와인앤모어 </option>
                            <option value="트레이더스"> 트레이더스 </option>
                            <option value="베키아에누보"> 베키아에누보 </option>
                            <option value="스타필드고양"> 스타필드고양 </option>
                            <option value="스타필드시티"> 스타필드시티 </option>
                            <option value="스타필드안성"> 스타필드안성 </option>
                            <option value="스타필드하남"> 스타필드하남 </option>
                            <option value="신세계면세점"> 신세계면세점 </option>
                            <option value="신세계백화점"> 신세계백화점 </option>
                            <option value="신세계시코르"> 신세계시코르 </option>
                            <option value="영랑호리조트"> 영랑호리조트 </option>
                            <option value="일렉트로마트"> 일렉트로마트 </option>
                            <option value="신세계디에프 글로벌"> 신세계디에프 글로벌 </option>
                            <option value="신세계사이먼 프리미엄아울렛"> 신세계사이먼 프리미엄아울렛 </option>
                            <option value="신세계팩토리스토어"> 신세계팩토리스토어 </option>
                            <option value="이마트24"> 이마트24 </option>
                            <option value="JAJU"> JAJU </option>
                        </select>
                    </div>
                    <div className={`${styles.select_box}`}>
                        <select
                            id=""
                            title="도시"
                            onChange={handleRegionChange}
                        >
                            <option value=""> 시 </option>
                            {StoreRegionData.map(data => (
                                <option key={data.id} value={data.regionName}>{data.regionName}</option>
                            ))}
                        </select>
                    </div>
                    <div className={`${styles.select_box}`}>
                        <select
                            id=""
                            title="군/구"
                            onChange={handleSubRegionChange}
                        >
                            <option value=""> 군/구 </option>
                            {subRegions.map(subRegion => (
                                <option key={subRegion} value={subRegion}>{subRegion}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={`${styles.btn_box}`}>
                    <button onClick={() => checkStore()} className={`${styles.btn0}`}>검색</button>
                </div>
            </div>
        </div>
    )
}
