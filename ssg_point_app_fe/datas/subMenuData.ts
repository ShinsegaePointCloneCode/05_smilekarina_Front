import { MenuType } from "@/types/MenuType";

export const eventMenuData: MenuType[] = [
    {
        id: 1,
        name: "진행 이벤트",
        url: "/event/ingevent"
    },
    {
        id: 2,
        name: "종료 이벤트",
        url: "/event/endevent"
    },
    {
        id: 3,
        name: "당첨 확인",
        url: "/event/winevent"
    }
];
export const myPointMenuData: MenuType[] = [
    {
        id: 1,
        name: "포인트내역",
        url: "/mypoint/pntHistory"
    },
    {
        id: 2,
        name: "포인트 카드 관리",
        url: "/mypoint/cardManage"
    },
    {
        id: 3,
        name: "제휴포인트 카드 관리",
        url: "/mypoint/regAffiliatePntCard"
    },
    {
        id: 4,
        name: "포인트 선물",
        url: "/mypoint/pntGiftMain"
    },
    {
        id: 5,
        name: "포인트 전환",
        url: "/mypoint/convertPntList"
    },
    {
        id: 6,
        name: "영수증으로 적립",
        url: "/mypoint/savePoint"
    },
]
export const memberMenuData: MenuType[] = [
    {
        id: 1,
        name: "광고정보 수신관리",
        url: "/myinfo/infoRcvAgree"
    },
    {
        id: 2,
        name: "서비스 동의 관리",
        url: ["/myinfo/serviceAgree", "/myinfo/clubAgree"]
    },
    {
        id: 3,
        name: "회원정보 수정",
        url: "/myinfo/cert"
    },
    {
        id: 4,
        name: "비밀번호 변경",
        url: "/myinfo/changePwd"
    },
    {
        id: 5,
        name: "회원 탈퇴",
        url: ["/withdrawal/leavePassword", "/withdrawal/leaveUsingService", "/withdrawal/leaveOnline"]
    }

];
export const mypageMenuData: MenuType[] = [
    {
        id: 1,
        name: "마이 포인트",
        url: "/mypoint/pntHistory"
    },
    {
        id: 2,
        name: "마이 라운지",
        url: "/mylounge/history"
    },
    {
        id: 3,
        name: "마이 혜택",
        url: "/cert"
    },
    {
        id: 4,
        name: "마이 회원정보",
        url: "/myinfo/infoRcvAgree"
    },

];
export const myloungeMenuData: MenuType[] = [
    {
        id: 1,
        name: "쇼핑 히스토리",
        url: "/mypoint/pntHistory"
    },
    {
        id: 2,
        name: "추천 서비스",
        url: "/serviceAgree"
    },
    {
        id: 3,
        name: "스마트 영수증",
        url: "/serviceAgree"
    },
    {
        id: 4,
        name: "매장찾기",
        url: "/mylounge/findstore"
    },
    {
        id: 5,
        name: "자주 찾는 매장",
        url: "/serviceAgree"
    },
]
