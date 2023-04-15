import { useRouter } from "next/router";

export const SessionPage = () => {
  const router = useRouter();

  const sessionName = router.query.session?.toString().replace("-", " ");

  return <div>{sessionName}</div>;
};

export default SessionPage;
