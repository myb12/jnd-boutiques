import Link from "next/link";
import React from "react";

const Login = () => {

  return (
    <div className="bg-white shadow-1 rounded-[10px] mb-9">
      <div
        className="flex items-center gap-0.5 py-5 px-5.5"
      >
        Returning customer?
        <Link href="/login?callbackUrl=/checkout" className="flex items-center gap-2.5 pl-1 font-medium text-dark">
          Click here to login
        </Link>
      </div>
    </div>
  );
};

export default Login;
