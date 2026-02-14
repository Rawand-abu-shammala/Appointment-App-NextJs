// app/dashboard/page.jsx

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Dashboard() {
  const { isAuthenticated } = getKindeServerSession();

  const ok = await isAuthenticated();

  if (!ok) {
    redirect("/api/auth/login?post_login_redirect_url=/dashboard");
  }

  return (
    <div>
      Dashboard
      <LogoutLink>Logout</LogoutLink>
    </div>
  );
}


// // "use client";
// import React from 'react'
// import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components"

// const Dashboard = () => {
//   return (
//     <div>Dashboard
//       <LogoutLink>Logout</LogoutLink>
//     </div>
//   )
// }

// export default Dashboard