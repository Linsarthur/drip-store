import { Link } from "react-router";

const Notfound = () => {
  return (
    <>
      <h1>Not found, nunca nem vi!</h1>
      <Link to={-1}> Voltar </Link>
    </>
  );
};

export default Notfound;
