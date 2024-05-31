import { signIn } from "./lib/redux/api/auth";
import { RootState, useAppDispatch, useAppSelector } from "./lib/redux";

export default function App() {
  const dispatch = useAppDispatch();
  const { isLoading, isError, error, token } = useAppSelector((state: RootState) => state.auth);

  const handleClick = () => {
    dispatch(signIn({
      email: "sepuh@gmail.com",
      password: "sepuh123"
    }));
  }

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>Error: {error}</h1>

  return (
    <>
      <button onClick={handleClick}>Login</button>
      <h1>Hello World</h1>
      <h2>{token}</h2>
    </>
  )
}