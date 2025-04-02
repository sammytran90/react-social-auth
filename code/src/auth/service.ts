import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  GithubAuthProvider, 
  FacebookAuthProvider} from "firebase/auth";
import Cookies from "js-cookie";

const auth = getAuth();
import { useApp } from "../context/AppContext";
import { useRouter } from "next/navigation";

export const loginWithProvider = async (providerName: "google" | "github" | "facebook") => {
  let provider;
  switch (providerName) {
    case "google":
      provider = new GoogleAuthProvider();
      break;
    case "github":
      provider = new GithubAuthProvider();
      break;
    case "facebook":
      provider = new FacebookAuthProvider();
      break;
    default:
      throw new Error("Unsupported provider");
  }

  let result;
  try {
    result = await signInWithPopup(auth, provider);
    const token = await result.user.getIdToken();
    Cookies.set("auth-token", token, { expires: 1 });
    return Promise.resolve(true);
  } catch (error: any) {
    console.error(error);
    return Promise.resolve(false);
  }
};

export const useLoginWithProvider = (providerName: "google" | "github" | "facebook") => {
  const { setNotification } = useApp();
  const router = useRouter();
  
  return () => {
    loginWithProvider(providerName).then((result) => {
      if (result) {
        router.push("/");
      } else {
        setNotification({
          message: "Login failed, please try other provider",
          type: "error",
        });
      }
    });
  };
};
