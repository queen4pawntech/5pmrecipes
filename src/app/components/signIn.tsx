import { signIn } from "@/auth"
import { useEffect } from "react"

export default function SignIn() {

    return (
        <form
            action={async () => {
                "use server"
                await signIn("google")
            }}
        >
            <button className="bg-white text-black font-bold px-4 py-2 rounded-md" type="submit">Signin with Google</button>
        </form>
    )
} 