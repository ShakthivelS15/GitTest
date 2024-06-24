import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadPost = async () => {
            setLoading(true);

            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts/"
            );

            setPosts(response.data);

            setLoading(false);
        };

        loadPost();
    }, []);

    return (
        <div className="App">
            {loading ? (
                <h4>Loading...</h4>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>USER ID</th>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>BODY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((item) => (
                            <tr key={item.id}>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default App;
