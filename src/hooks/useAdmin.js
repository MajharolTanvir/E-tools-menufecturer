import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminProcess, setAdminProcess] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://e-tools-manufecturer-server.vercel.app/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdminProcess(false);
        });
    }
  }, [user]);

  return [admin, adminProcess];
};

export default useAdmin;
