import BookmarkStore from '@/components/page/mylounge/BookmarkStore'
import React from 'react'

export default function page() {
    return (
        <div>
            <div className="regular_reg01">
                <p className="sp_tit1">
                    <strong>나의 단골 매장</strong>
                </p>
            </div>
            <BookmarkStore />
        </div>
    )
}
