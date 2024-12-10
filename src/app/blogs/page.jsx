import Link from "next/link";

const blogPage = () => {

    return (

        <div className="p-10">

            {
                blogs.map((blog) => (

                    <div key={blog.id} className="border-2 p-12 m-4 rounded-lg border-red-500 bg-slate-200">
                        <h3>
                            Title: {blog.title}
                        </h3>

                        <h3>
                            Description: {blog.description}
                        </h3>

                        <button className="p-2 my-2 bg-blue-600 text-white rounded-lg">
                             
                            <Link href={`/blogs/${blog.id}`}> View Details</Link>

                        </button>
                    </div>
                ))
            }

        </div>
    );
};

const blogs = [
    {
        "id": 1,
        "title": "Understanding JavaScript Closures",
        "description": "Learn how closures work in JavaScript with simple examples and practical use cases."
    },
    {
        "id": 2,
        "title": "Mastering React useState Hook",
        "description": "A beginner-friendly guide to using the useState hook for state management in React applications."
    },
    {
        "id": 3,
        "title": "Exploring Next.js Routing System",
        "description": "Discover how to implement dynamic routing in Next.js for building scalable web applications."
    },
    {
        "id": 4,
        "title": "CSS Grid vs Flexbox: When to Use Which?",
        "description": "Understand the differences between CSS Grid and Flexbox and when to use each for layout design."
    },
    {
        "id": 5,
        "title": "Building REST APIs with Express.js",
        "description": "Step-by-step guide to creating RESTful APIs using Node.js and Express.js framework."
    },
    {
        "id": 6,
        "title": "Getting Started with Tailwind CSS",
        "description": "A comprehensive introduction to Tailwind CSS and how to style modern web applications effortlessly."
    }
]

export default blogPage;