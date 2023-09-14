'use client'

import React, { useState } from 'react';
import styles from './FindLounge.module.css';
import FindMap from './FindMap';
import FindRegion from './FindRegion';


export default function FindLounge() {
    const [activeTab, setActiveTab] = useState('map');

    return (
        <div>
            <section className={`${styles.content} ${styles.depth2}`}>
                <div className={`${styles.find_store_wrap01}`}>
                    <ul role="tablist">
                        <li
                            role="presentation"
                            className={`${styles.tab} ${activeTab === 'map' ? styles.on : ''}`}
                        >
                            <button
                                role="tab"
                                aria-selected={activeTab === 'map'}
                                onClick={() => setActiveTab('map')}
                                className={`${styles.search_map}`}
                            >
                                지도로 찾기
                            </button>
                        </li>
                        <li
                            role="presentation"
                            className={`${styles.tab} ${activeTab === 'region' ? styles.on : ''}`}
                        >
                            <button
                                role="tab"
                                aria-selected={activeTab === 'region'}
                                onClick={() => setActiveTab('region')}
                                className={`${styles.search_map}`}
                            >
                                지역으로 찾기
                            </button>
                        </li>
                    </ul>
                </div>

                {/* 현재 활성화된 탭에 따라 다른 컴포넌트를 보여줍니다. */}
                {activeTab === 'map' && <FindMap />}
                {activeTab === 'region' && <FindRegion />}
            </section>
        </div>
    );
}



