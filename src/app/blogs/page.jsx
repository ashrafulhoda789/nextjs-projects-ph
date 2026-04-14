import Link from "next/link";
import { Roboto, Poppins } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})


const BlogsPage = () => {

    const blogs = [
        {
            "id": 1,
            "title": "Getting Started with React",
            "author": "Ashraful Hoda",
            "date": "2026-04-10",
            "category": "Web Development",
            "image": "https://i.ibb.co/ReactImage.jpg",
            "content": "React is a popular JavaScript library for building user interfaces. It allows developers to create reusable components and build fast, interactive web apps using a virtual DOM."
        },
        {
            "id": 2,
            "title": "Understanding Data Structures",
            "author": "Ashraful Hoda",
            "date": "2026-04-08",
            "category": "Programming",
            "image": "https://i.ibb.co/DSAImage.jpg",
            "content": "Data structures like arrays, linked lists, stacks, and queues are fundamental concepts in computer science. Mastering them helps in writing efficient algorithms."
        },
        {
            "id": 3,
            "title": "Android App Development Basics",
            "author": "Ashraful Hoda",
            "date": "2026-04-05",
            "category": "Mobile Development",
            "image": "https://i.ibb.co/AndroidImage.jpg",
            "content": "Android development involves building mobile applications using Java or Kotlin. Tools like Android Studio and Jetpack Compose make development easier and more efficient."
        },
        {
            "id": 4,
            "title": "Introduction to Git and GitHub",
            "author": "Ashraful Hoda",
            "date": "2026-04-01",
            "category": "Version Control",
            "image": "https://i.ibb.co/GitImage.jpg",
            "content": "Git is a version control system that helps developers track changes in their code. GitHub is a platform that allows collaboration and sharing of projects with others."
        }
    ]

    return (
        <div className={`w-11/12 mx-auto ${poppins.className}`}>

            <h2 className="text-3xl font-bold-mb-4">Blogs</h2>

            <div className="grid grid-cols-3 gap-10">
                {
                    blogs.map(blog => <div key={blog.id}>
                        <h3 className="text-4xl font-bold mb-2">{blog.title}</h3>
                        <Link href={`/blogs/${blog.id}`}>Show Details</Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default BlogsPage;