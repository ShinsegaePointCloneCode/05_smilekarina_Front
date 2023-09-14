import { filterMenuDataType } from "@/types/filterMenuDataType";
// 포인트 내역 안의 menu 타입 
export const FilterMenuData : filterMenuDataType[] =[
    {
        id: 1,
        value : "all",
        name : "전체"
    },
    {
        id : 2,
        value : "used",
        name : "적립/사용"
    },
    {
        id : 3,
        value : "gift",
        name: "선물"
    },
    {
        id : 4,
        value : "convert",
        name: "전환"
    }
]