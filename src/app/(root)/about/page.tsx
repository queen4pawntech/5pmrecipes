import Image from "next/image";
import Hello from "../../components/hello";

export default function Home() {
    console.log("What am I? --SERVER/CLIENT?");
    return (
        <div>
            <h1 className="text-3xl font-bold">About</h1>
            <Hello />
        </div>
    );
}
