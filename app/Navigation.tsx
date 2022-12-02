import Link from "next/link";
import Image from 'next/image'
import logo from '../public/images/SpaceFootball_Logo.png'

export default function Navigation() {
    return (
        <nav className="bg-primary flex w-full fixed z-50 [&>*]:flex [&>*]:w-full [&>*>*]:flex [&>*>*]:w-full [&>*>*]:justify-center
         [&>*>*>*]:flex [&>*>*>*]:justify-center h-14 border-b-4 border-b-secondary">
            <ul className="[&>*>*]:font-bold hover:[&>*>*]:text-white hover:[&>*>*]:opacity-80 flex [&>*]:flex [&>li]:w-auto [&>li]:mx-5 [&>*>*]:flex [&>*>*]:text-secondary justify-center items-center">
                <li>
                    <Link className="my-5" href="/">
                        <Image src={logo} alt={'brand logo in black and white'} className="-z-20 rounded-lg" height={35} width={35}></Image>
                    </Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/player">Players</Link>
                </li>
            </ul>
        </nav>
    )
}