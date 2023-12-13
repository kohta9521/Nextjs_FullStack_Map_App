import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <div>
                <Image src='/uberbanner.jpeg' width={700} height={700}
                    className="object-cover h-full w-full"
                />
                <div className="absolute top-20 right-20">
                    <SignIn />
                </div>
            </div>
        </>


    );
}