import React from 'react'
import styles from './UserInfoArea.module.css'

export default function UserInfoArea(props: { phone?: string, address?: string, email?: string, agreeEmail?: boolean, Letter?: boolean, Dm?: boolean, Tm?: boolean }) {
    
    const maskPhoneNumber = (phone: string | undefined) => {
        if (!phone) return "없음";
        const parts = phone.split("-");
        if (parts.length !== 3) return phone; // 예외 처리
        return `${parts[0]}-${parts[1].slice(0, -2)}**-${parts[2].slice(0, -2)}**`;
    }

    const maskAddress = (address: string | undefined) => {
        if (!address) return "없음";
        const [front, ...rest] = address.split(",");
        return `${front}, *****`;
    }

    const getAdAgreeString = () => {
        const mapping = {
            agreeEmail: "이메일",
            Letter: "문자",
            Dm: "DM",
            Tm: "TM"
        };
        const agrees: string[] = [];
        const disagrees: string[] = [];
        for (let key in mapping) {
            if (props[key as keyof typeof props]) {
                agrees.push(mapping[key as keyof typeof mapping]);
            } else {
                disagrees.push(mapping[key as keyof typeof mapping]);
            }
        }
        return {
            agrees: agrees.join(", "),
            disagrees: disagrees.join(", ")
        };
    }

    const { agrees, disagrees } = getAdAgreeString();

    return (
        <div>
            <div className={styles.user_info_cnt}>
                <p className={styles.tit}> 회원정보 </p>
                <div className={styles.user_info}>
                    <dl>
                        <dt>휴대폰 번호</dt>
                        <dd>{maskPhoneNumber(props.phone)}</dd>
                    </dl>
                    <dl>
                        <dt>주소</dt>
                        <dd>{maskAddress(props.address)}</dd>
                    </dl>
                    <dl>
                        <dt>이메일</dt>
                        <dd>{props.email || "없음"}</dd>
                    </dl>
                </div>
                <p className={styles.tit}> 광고정보 수신동의
                    <em className={`${styles.not_italic}`}>동의일자 2023.08.24</em>
                </p>
                <div className={`${styles.user_info} ${styles.item_col}`}>
                    <dl>
                        <dt>동의</dt>
                        <dd>{agrees || "없음"}</dd>
                    </dl>
                    <dl>
                        <dt>비동의</dt>
                        <dd>{disagrees || "없음"}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}
