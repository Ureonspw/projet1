import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import'@/style/Guest.css'

export default function Guest({ children }: PropsWithChildren) {
    return (
    
    <>
        <div className="">
            <div>

            </div>

            <div className="">
                {children}
            </div>
        </div>

    </>

    );
}
