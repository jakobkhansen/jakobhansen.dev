import { useRouter } from "next/router";

export default function RecipePage(props) {
  const router = useRouter();

  console.log(router.query.id);
  return <div className="m-auto max-w-2xl">{router.query.id}</div>;
}
