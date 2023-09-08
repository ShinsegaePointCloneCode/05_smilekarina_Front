import React from 'react'
import styles from './FindRegion.module.css';

export default function FindRegion() {
    return (
        <div>
            <div className={`${styles.find_store_wrap04}`}>
                <div className={`${styles.store_select_box}`}>
                    <div className={`${styles.select_box}`}>
                        <select id="" title="제휴사 선택">
                            <option value=""> 제휴사 </option>
                            <option value="E200039186"> 쓱고우 </option>
                            <option value="B200005331"> 오슬로 </option>
                            <option value="E200006892"> 이마트 </option>
                            <option value="B200035264"> 까사미아 </option>
                            <option value="E200006871"> 노브랜드 </option>
                            <option value="B100000125"> 보노보노 </option>
                            <option value="B200038138"> 센터필드 </option>
                            <option value="B200006352"> 스무디킹 </option>
                            <option value="B100000018"> 스타벅스 </option>
                            <option value="B100001733"> 자니로켓 </option>
                            <option value="B200004329"> 데블스도어 </option>
                            <option value="E000000004"> 에브리데이 </option>
                            <option value="B200007152"> 와인앤모어 </option>
                            <option value="E200006846"> 트레이더스 </option>
                            <option value="B200004529"> 베키아에누보 </option>
                            <option value="B200028242"> 스타필드고양 </option>
                            <option value="B200032426"> 스타필드시티 </option>
                            <option value="B200036986"> 스타필드안성 </option>
                            <option value="B200006691"> 스타필드하남 </option>
                            <option value="B200006472"> 신세계면세점 </option>
                            <option value="D000110089"> 신세계백화점 </option>
                            <option value="D200028836"> 신세계시코르 </option>
                            <option value="B200003468"> 영랑호리조트 </option>
                            <option value="E200006844"> 일렉트로마트 </option>
                            <option value="B100000128"> 신세계디에프 글로벌 </option>
                            <option value="B100000289"> 신세계사이먼 프리미엄아울렛 </option>
                            <option value="D200028834"> 신세계팩토리스토어 </option>
                            <option value="B200003370"> 이마트24 </option>
                            <option value="B200002966"> JAJU </option>
                        </select>
                    </div>
                    <div className={`${styles.select_box}`}>
                        <select id="" title="도시">
                            <option value=""> 시 </option>
                            <option value="강원"> 강원 </option>
                            <option value="경기"> 경기 </option>
                            <option value="경남"> 경남 </option>
                            <option value="경북"> 경북 </option>
                            <option value="광주"> 광주 </option>
                            <option value="대구"> 대구 </option>
                            <option value="대전"> 대전 </option>
                            <option value="부산"> 부산 </option>
                            <option value="서울"> 서울 </option>
                            <option value="세종"> 세종 </option>
                            <option value="울산"> 울산 </option>
                            <option value="인천"> 인천 </option>
                            <option value="전남"> 전남 </option>
                            <option value="전북"> 전북 </option>
                            <option value="제주"> 제주 </option>
                            <option value="충남"> 충남 </option>
                            <option value="충북"> 충북 </option>
                        </select>
                    </div>
                    <div className={`${styles.select_box}`}>
                        <select id="" title="군/구">
                            <option value=""> 군/구 </option>
                        </select>
                    </div>
                </div>
                <div className={`${styles.btn_box}`}>
                    <a href="" className={`${styles.btn0}`}>검색</a>
                </div>
            </div>
        </div>
    )
}
