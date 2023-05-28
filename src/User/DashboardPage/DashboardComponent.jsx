import { auth } from "../../Config/firebase";
import { signOut } from "firebase/auth";




const DashboardComponent = () => {
    const logout = async () => {
        await signOutFirebase()
            .then((resp) => {
                console.log("keluar");
                localStorage.removeItem("dataUser")
                window.location.href = "/login";
            })
            .catch((resp) => {
                console.log(resp);
            });
    };

    const signOutFirebase = () => {
        return new Promise((resolve, rejects) => {
            signOut(auth)
                .then(() => {
                    resolve(true);
                })
                .catch((error) => {
                    rejects(error);
                });
        });
    };


  return (
      <div>
          <div>DashboardComponent</div>
          <button 
            className="px-10 py-2 rounded-full bg-purple-600"
            onClick={logout}
            >
            Log Out
          </button>
      </div>
  );
}

export default DashboardComponent;