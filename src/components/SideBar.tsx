import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function SideBar() {
  const { login, register, logout, isAuthenticated, user } = useKindeAuth();

  return (
    <section
      className="col-[2/3] row-[2/3] bg-stone-50 border-l
                      border-black/[0.08] px-2 py-2 flex flex-col"
    >
      <AddTodoForm />
      <div className="mt-auto">
        {isAuthenticated ? (
          <>
            <p> Loged in as : {user?.email}</p>
            <Button buttonType="secondary" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button onClick={login} buttonType="secondary">
              log in
            </Button>
            <Button onClick={register} buttonType="secondary">
              Register
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
