import React from 'react'
import styles from './JoinServiceList.module.css'
import Image from 'next/image'

export default function JoinServiceList() {
    return (
        <div>
            <div className={`${styles.withdraw_wrap_box01}`}>
                <div className={`${styles.withdraw} ${styles.tit}`}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAaISURBVHgB7Z3djxNVFMDPvXdm2t1t2XXBxRZKEILGNeFliUYSExOeiLzCv2CMvKAh+CavxAQSojHiX+DyCDyS+KJGZaNBWUUFkYWuu7hYtks/Zjr3es8s7W4/ZttOZ9rbdn5hs0OnEPbXc+8592MuBHqIOH6cwd2ZGPBRoyDsMSK4QXRu4D3CSaT6zaQkf5nC1mxBqBllUIS8kYVXv8qTy5dt6BEEukhFmEbipk0n6iR5/XtLomgwkgVaysC+ubVuCu2KQDH9aaxI7Z1Ut2JAhAYBowv4F2WSuQ+fQMAEJhCjLffL4Sk9yqe6Ia3hvwEjs8TSAKtrZP6sCQHgu0AVxNWCIkuWtjL266lF8BlfBYo3zk+alp30q2/zm3JEkvn3H4NP+CJQTJ81inp8L2UiDn0AN3kmwnMLfjTrjgVmD342FWG5hCrNtWU4t3VTu99pNHoWiH1d/vabCU0zd0Ifo5fsJXLzzAPwiCeB2GTN6Mh+AmwUBgABds4o5O94adJtC3TkjY69pGqi8Mp6gnn6e7sS2xI4qPLKeJHYssBBl1emXYktCRwWeWXakUihBZyEMSTyEKKRCP7MzuRHE5oKzB28uHtQsm07OD/z7UOJZu/bUiAOzfq9zusES2M7s/s/ntrqPa4Csd+zCiIFQ04kLpLowu2+q8AinUz13fAsCChlOM53vd3oRWy61DAnIMQBJ0nE9PnJhvcavYhTUhBShanZyUZZuU7g01cuJIapZGkVLG3g7uG6hFJVSPtRMBMgxwgVH8hLteYGBaSFIJcEiKvgFZwCO/DDz5sXraojcHxbrNPoI0S8A6rJQwgkn32w3pEJpTYKqwT60vcRaFp89pCOP1jLtqrq4opAMfP5eNj3tYCMQlymrfy2coNn1Stbjk0DvD0NqlGkTytR6AgUx2eZRWAHqISUxz46CuzsUeUkUg3i5ZJmPQLv/hcDxSCJ8Y3r5DgoBSaTPw47/em6QBWbr+pETCfoHIFmn6znKoVNnaDTnP7vzv3eZ1/Z51U125lUw2tEpJ8AXJuHXmLJigX7QQ1uPRqBKPSWZwnDDRRYK9EZCvRYIvaDFEbMnjdf4mF5mkBgG8tah5cMrWBDhLW0MhIc4uot4HiR2FZ5bXPUibkF56tCehXEtVvQawpUG9VwWy0oAEqspUrgF9+CakQNblDCaNOVpxAXOArkEI5/O4ACtdWMwMXVjev0KqgIljLKLhpVEosAJRKGG0qvujVKLKrR4wKm/6E6FUUI8YZcIwkjsAN0qhe1okVNOUntWynDTh8BleHnroNvaDIC8cE9CPFEwZTBF+XRHIR4Ap8YpbIhh0nEK1FzjcK+59bATwRkQVVsngY/Sd7IUXL5hO1nKcP/fnxelLjvD/V1jPxg+cPMJfAJIZMvbvFYH4mwSAa4PztR7S9/vCK/XQGP6GeO3NjqvnXu+iFQAI4PeEN5JFKKqNvsFEWugmTw+7pA7Ac569m5A33JgW82IhD7Qc5YGIUtImWtlLe4VYZykTxbgpCWKDdfpCKQzL8XNuMWcLLvT6cqAqvmA3UGS5aAruyPbpZt2/1z3crOhmVU1ZLVszH7di2HUegORh/QqapcUbc6LWYuJCwR7tJvhE5YmsxVn/xRPx8oozCcoanH6fvm6o9NqROIJY3BDH/HjANAbd9XpuGMNPn+5Aq3SVgXPkMnPEN+O7nS6J7rlH7ESt0LEwqA4yC/d8HttqtAMn/C1Hl06JuyXtAX0IXb/S0XlcjNd5d13RjaEYqu20tuTbdM81W5PS8sCmBDN+0vBOTJd80P5Gkq0MnKhV13hqm0wZLFKO75s5X3tnHsyaxhjjx4WZX9hEHhyLN3396q39tMmwfvDLbEduUhHo5+GkyJXuQhHg8fkxKjD/cTsAfj8DGZMLDPa1ce0tFWd/H6xd2W1efH38lSBfa8uIjJEjzQ8bMC4rVPtlumlVJ2p6sbcoSh81Ka3Dy9DB3g0xGgs0Zx5J8UFf1x0oeuyXH+WuqelyZbi7+H0MpoNG0zqWqCcRKFnFVpNrpoh0Ae98FJWRPEDmVEYnOVyxU41+m1r3MjuIO4ZbOG2HK8pxEZoLgy3TkK/q0LE4UMTDBqb4egcaRZWYiKZfL1mcDnNLv8nxHMMnj0MI4y8TglvyITN0flCX0yMkaz8PyubFDR1oiePvLoCE3/NQoFIwY2RMCQQillVkFe15RFlR1kVE5qmPILN4ZOFsxuC6vlf3kV4H2nkHefAAAAAElFTkSuQmCC" alt="온라인 가입 사이트 아이콘" />
                    <p className={`${styles.sp_txt1} ${styles.fw500}`}> 가입한 온라인 사이트</p>
                </div>
                <div className={`${styles.signup_online_lists}`}>
                    <table>
                        <caption>사이트</caption>
                        <colgroup>
                            <col className={`${styles.col1}`} style={{ "width": "101px" }} />
                            <col className={`${styles.col2}`} style={{ "width": "100%" }} />
                            <col className={`${styles.col3}`} style={{ "width": "51px" }} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>
                                    <img
                                        className={styles.logoImage}
                                        src="/images/emart_m_20.png"
                                        alt="이마트 로고"
                                    />
                                </th>
                                <td className={`${styles.site_title} ${styles.ff_lato}`}>이마트</td>
                                <td className={`${styles.shortcuts}`}>
                                    <a href="">
                                        <span>바로가기</span>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <img
                                        className={styles.logoImage}
                                        src="/images/shinsegae_m_20.png"
                                        alt="신세계백화점 로고"
                                    />
                                </th>
                                <td className={`${styles.site_title} ${styles.ff_lato}`}>신세계백화점</td>
                                <td className={`${styles.shortcuts}`}>
                                    <a href="">
                                        <span>바로가기</span>
                                    </a>
                                </td>
                            </tr>
                        </thead>
                    </table>
                </div>

                
            </div>
            
            <div className={`${styles.withdraw_wrap_box01}`}>
                <div className={`${styles.withdraw} ${styles.tit}`}>
                    <img src="data:image/png;base64,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" alt="이용중인 제휴 통합멤버십​ 아이콘" />
                    <p className={`${styles.sp_txt1} ${styles.fw500}`}> 이용중인 통합 멤버십​ </p>
                </div>

                <div className={`${styles.signup_online_lists} ${styles.table_box0}`}>
                    <div className={`${styles.no_result_box} ${styles.bd_type2}`}>
                        <p className={`${styles.no_txt}`}>확인된 온라인 가입 사이트 정보가 없습니다.</p>
                    </div>
                </div>
                <ul className={`${styles.list_cnt} ${styles.pd_t15}`}>
                    <li>통합 멤버십을 가입하신 경우, 가입처에서 해당 멤버십을 먼저 탈퇴해 주셔야 신세계포인트 탈퇴가 가능합니다. 탈퇴는 가입처에 문의해주세요.</li>
                    <li>멤버십 가입일자와 혜택이 적용되는 시작일자는 상이할 수 있습니다.</li>
                    <li>신세계 유니버스 클럽을 탈회 하셔도, 해당 포인트 카드로 신세계포인트 서비스는 계속 이용하실 수 있습니다.</li>
                    <li>G마켓/옥션의 스마일 클럽에서 신세계 유니버스 클럽으로 전환한 회원의 경우, 스마일 클럽의 첫 가입일자가 표기됩니다.</li>
                </ul>
            </div>

            

            <div className={`${styles.withdraw_wrap_box03} ${styles.secession_wrap}`}>
                <div className={`${styles.online_secession_wrap}`}>
                    <div className={`${styles.online_secession}`}>
                        <img src="data:image/png;base64,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" alt="온라인 통합ID 탈퇴 아이콘" />
                        <div className={`${styles.desc}`}>
                            <p className={`${styles.sp_txt1}`}>
                                <a href="/withdrawal/leaveOnline"> 온라인 통합ID 탈퇴 </a>
                            </p>
                            <p className={`${styles.sp_txt4}`}> 신세계포인트 통합ID로 이용중인 위의 온라인 서비스들을 더 이상 이용할 수 없게 됩니다. </p>
                        </div>
                    </div>
                    <ul className={`${styles.list_cnt}`}>
                        <li>일부 사이트만 탈퇴를 원하시는 경우 해당 사이트에서 개별적으로 탈퇴하실 수 있습니다. </li>
                    </ul>
                </div>
                <div className={`${styles.go_resign_btn}`}>
                    <a href="" className={`${styles.btn_arrow}`}>신세계포인트 온/오프라인 완전 탈퇴하러 가기</a>
                </div>
            </div>
        </div>
    )
}
