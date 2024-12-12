// একক পোস্ট ডেটা আনার ফাংশন
const getPostsData2 = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data; // সরাসরি ডেটা রিটার্ন করুন
};


export async function generateMetadata({ params }) {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then((res) => res.json());

    return {
        title: `post details: ${post.title}`,
        description: post.body.substring(0, 150) + "...",
    };
}

// পেজ কম্পোনেন্ট
const postDetails = async ({ params }) => {
    const { title, body } = await getPostsData2(params.id);

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">Post Details</h1>
            <h2 className="text-2xl text-blue-600 mb-2">Title: {title}</h2>
            <p className="text-gray-700">Body: {body}</p>
        </div>
    );
};

export default postDetails;
