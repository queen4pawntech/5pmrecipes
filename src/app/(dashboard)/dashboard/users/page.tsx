import Link from "next/link";

export default function Users() {
    return (
        <div>
            <h1>Dashboard Users</h1>
            <ul>
                <li>
                    <Link href="/dashboard/users/1">User 1</Link>
                </li>
                <li>
                    <Link href="/dashboard/users/1">User 2</Link>
                </li>
                <li>
                    <Link href="/dashboard/users/1">User 3</Link>
                </li>
                <li>
                    <Link href="/dashboard/users/1">User 4</Link>
                </li>
            </ul>
        </div>
    );
}