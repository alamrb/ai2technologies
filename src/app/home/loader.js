import Image from 'next/image';
import loader from '../../../public/images/loader.svg'
export default function Loader() {
    return (
        <span style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src={loader} width={100} height={50} alt='loader' />
        </span>
    );
}