import Link from "next/link";

const getPostsData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return { posts: data }; // সরাসরি posts রিটার্ন করা
};

const page = async () => {
    const { posts } = await getPostsData(); // posts ডেটা ডিকন্সট্রাক্ট করা

    return (
        <div className="p-8">
            <h3 className="text-3xl font-bold mb-6">Posts Data</h3>

            <div className="grid grid-cols-3 gap-8">
                {posts.map(({ title, body, id }) => (
                    <div key={id} className="border p-4 rounded shadow-md">
                        <h4 className="text-xl font-semibold">{title}</h4>
                        <p className="mt-2 text-gray-600">{body}</p>

                        <button className="p-2 bg-orange-500 text-white rounded-md mt-2 font-semibold"><Link href={`/posts/${id}`}>See Details</Link></button>
                    </div>
                   
                ))}
            </div>
        </div>
    );
};

export default page;
