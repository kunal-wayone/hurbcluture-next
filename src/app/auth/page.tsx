import React from 'react'
import AuthGuard from '../components/common/AuthGuard'
import Loader from '../components/common/Loader'

function page() {
    return (
        <AuthGuard >
            <Loader />
        </AuthGuard>
    )
}

export default page