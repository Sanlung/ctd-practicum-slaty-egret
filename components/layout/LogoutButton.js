import Link from "next/link";

const LogoutButton = () => (
  <Link href='/'>
    <a>
      <button type='button'>Logout</button>
    </a>
  </Link>
);

export default LogoutButton;
