'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Breadcrumbs from './BreadCrumb';

export default function BreadcrumbsFromQuery() {
    const pathname = usePathname(); // e.g., "/products/electronics"
    const searchParams = useSearchParams(); // e.g., ?category=phones&brand=apple

    // Split path segments
    const pathSegments = pathname
        .split('/')
        .filter(Boolean); // remove empty strings

    // Extract only query values
    const queryValues = [];
    for (const [d, value] of searchParams.entries()) {
        console.log(d)
        queryValues.push(value);
    }

    // Build breadcrumb items
    const paths = [
        { label: 'Home', href: '/' },
        ...pathSegments.map((segment, index) => ({
            label: segment,
            href: '/' + pathSegments.slice(0, index + 1).join('/'),
        })),
        ...queryValues.map((value, index) => ({
            label: value,
            href: pathname + '?' + Array.from(searchParams.entries()).slice(0, index + 1).map(([k, v]) => `${k}=${v}`).join('&'),
        })),
    ];

    return <Breadcrumbs paths={paths} />;
}
