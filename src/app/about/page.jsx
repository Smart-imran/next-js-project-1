import Link from "next/link";


const aboutPage = () => {
    return (
        <div className="p-10 text-center">

            <h1 className="text-4xl font-bold text-blue-500">About Page</h1>
            <p className="mt-4 text-gray-600">
                This is the about page of the Next.js application.
            </p>

          <Link href={'/about/mission'}>
                <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-700 mr-6">Mission</button>
            </Link> 
            
            <Link href={'/about/history'}>
                <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-700 mr-6">History</button>
                </Link>

            <Link href={'/'}>
                <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-700">Back To Home</button>
            </Link>


        </div>


    );
};

export default aboutPage;