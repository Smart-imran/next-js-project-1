import Link from "next/link";


const mission = () => {
    return (
        <div className="p-10 text-center">

            <h1 className="text-4xl font-bold text-blue-500">mission</h1>
            <p className="mt-4 text-gray-600">
                This is the Service page of the Next.js application.
            </p>

            <Link href={'/about'}>
                <button className="mt-6 px-6 py-4 bg-red-500 text-white rounded-lg hover:bg-red-700">Back to about</button>
            </Link>


        </div>
    );
};

export default mission;