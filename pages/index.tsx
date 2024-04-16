import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const onClickButton = () => {
    router.push("/post");
  };
  
  return (
    <div>
        <h2>Login</h2>
        <div>
            <input type="text" id="username" name="username" placeholder="사용자명" required />
            <input type="password" id="password" name="password" placeholder="비밀번호" required />
            <button onClick={onClickButton}>Login</button>
        </div>
    </div>
  );
}