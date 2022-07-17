import { Button } from "antd";
import React, { useEffect, useRef, useState } from "react";

interface PostData {
  id?: number;
  userId?: number;
  body?: string;
  title?: string;
}

const getPosts: (id: number) => Promise<PostData> = (id) => {
  return new Promise((resolve) => {
    fetch(`http://jsonplaceholder.typicode.com/posts/${id}`).then(
      (response) => {
        resolve(response.json());
      }
    );
  });
};

const UseEffectDemo = () => {
  const [post, setPost] = useState<PostData>({});
  const [id, setId] = useState(1);

  const handleResize = () => {
    console.log("窗口事件监听");
  };

  useEffect(() => {
    /** 定时器 */
    const timer = setInterval(() => console.log("timer"), 1000);

    /** 事件监听 */
    window.addEventListener("resize", handleResize);

    /** 请求数据 */
    getPosts(id).then((res) => {
      setPost(res);
    });

    return () => {
      /** 清除副作用 */
      clearInterval(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [id]);

  return (
    <div>
      <h1>UseEffect demo</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h2>{post.title}</h2>
        <div>{post.body}</div>
      </div>
      <Button type="primary" onClick={() => setId(id + 1)}>
        更换文章
      </Button>
    </div>
  );
};

export default UseEffectDemo;
