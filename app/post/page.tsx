"use client";
import { useEffect, useState } from 'react'

type Post = {
    userId?: string
    id?: string
    title?: string
    body?: string
}

export default function PostPage() {
    const [articles, setArticles] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setArticles(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
         fetchArticles();
    }, [])

    useEffect(() => {
        async function fetchCustomer() {
            try {
                const res = await fetch("/api/configuration/customer");
                console.info(res);
                const data = await res.json();
                console.info(data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchCustomer();
    }, [])

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div>
            <h2>Articles</h2>
            <ul>
                {articles.map((a) => (
                    <li key={a.id}>{a.title}</li>
                ))}
            </ul>
        </div>
    );
}