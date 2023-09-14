'use client'

import React, { useEffect, useState } from 'react'

interface UsablePointProps {
    token?: string;
}

export default function GetUsablePoint({ token }: UsablePointProps) {

    const [usablePoint, setUsablePoint] = useState<number>(0)

    useEffect(() => {
        const getUsablePoint = async () => {
            if (!token) {
                console.error("Token is not provided.");
                return;
            }
            try {
                const response = await fetch(`https://smilekarina.duckdns.org/api/v1/point/usablepoint`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error(`Fetch failed with status: ${response.status}`);
                }
                const data = await response.json();
                setUsablePoint(data.result.totalPoint);

            } catch (error) {
                console.error('Error fetching UsablePoint:', error);
            }
        };

        getUsablePoint();

    }, []);
    
  return (
    <div>
        <strong className="font-normal">{usablePoint}</strong>
    </div>
  )
}
