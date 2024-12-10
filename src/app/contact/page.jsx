import Link from "next/link";

const contact = () => {
    return (
        <div className="p-10 text-center">

            <h1 className="text-4xl font-bold text-blue-500">Contact Page</h1>
            <p className="mt-4 text-gray-600">
                This is the Service page of the Next.js application.
            </p>

            <Link href={'/'}>
                <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-700">Back To Home</button>
            </Link>


        </div>
    );
};

export default contact;