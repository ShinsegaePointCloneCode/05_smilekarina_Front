import { PointType } from '@/types/PointType'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { GiftSortType } from './PointGiftMainList'
import PntHistoryShow from '../PntHistoryShow'

// 날짜 변경 함수
export function dateFormat({ formatdate }: { formatdate: Date }) {
  let result = `${formatdate.getFullYear()}-${formatdate.getMonth() < 9 ? "0" + (formatdate.getMonth() + 1) : (formatdate.getMonth() + 1)}-${formatdate.getDate() < 9 ? "0" + (formatdate.getDate()) : (formatdate.getDate())}`
  return result
}

export default function PointGiftHistoryDetail({ data, token, giftquery }: { data: PointType, token: string, giftquery: GiftSortType }) {

  const [good, setGood] = useState<boolean>(false);
  const [loadedData, setLoadedData] = useState<PointType>({ ...data }); // State to hold the loaded data
  const pathname = usePathname();

  if (!token) return;


 if (pathname === "/mypoint/pntGiftMain") {
    useEffect(() => {
      const getPointDetail = async () => {
        try {
          const response = await fetch(`https://smilekarina.duckdns.org/api/v1/point/pointGiftListDetail?pointId=${data.pointId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            }
          });

          if (response.ok) {
            const result = await response.json();
            const loadedData = { ...data, ...result.result };
            setLoadedData(loadedData); // Set the loaded data
            setGood(true);
          } else {
            console.error("Failed to fetch data");
          }
        } catch (error) {
          console.error(error);
        }
      };
      getPointDetail();
    }, [giftquery])

  }

  return (
    <>
      {good ? (
        <PntHistoryShow data={loadedData} /> // Pass the loaded data to the component
      ) : null}
    </>
  );
}