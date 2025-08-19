import React from 'react'
import BrandSection from '../components/common/BrandSection'
import AuthGuard from '../components/common/AuthGuard'
import Wrapper from '../components/common/Wrapper'
import { fetchBrandData } from '../../utils/server';

const page = async () => {
    const {  brandData }: any = await fetchBrandData();

    return (
        <AuthGuard>
            <Wrapper>
                <div className='bg-white dark:bg-white max-w-7xl m-auto px-4  lg:px-16'>
                    <BrandSection data={brandData} />
                </div>
            </Wrapper>
        </AuthGuard>
    )
}


export default page;
