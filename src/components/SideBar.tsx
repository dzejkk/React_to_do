import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";
import useSounds from "../hooks/useSounds.js";

export default function SideBar() {
  const { login, register, logout, isAuthenticated, user } = useKindeAuth();
  const { playMainCLick } = useSounds();

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
            <Button
              onClick={async () => {
                playMainCLick();
                await login();
              }}
              buttonType="secondary"
            >
              log in
            </Button>
            <Button
              onClick={async () => {
                await register();
                playMainCLick();
              }}
              buttonType="secondary"
            >
              Register
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
