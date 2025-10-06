import Image from "next/image";
import Logo from '../../public/next.svg'

export default function Page() {
    return <Image
        src={Logo}
        alt="Picture of the author"
    />
}