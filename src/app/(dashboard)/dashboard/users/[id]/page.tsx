export default function User({ params }: { params: { id: string } }) {
    const id = params
    return (
        <div>
            <div className="text-2xl font-bold">User ID: {id.id}</div>
        </div>
    );
}