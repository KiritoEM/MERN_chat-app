import axios from "axios";
import { useRouter } from "next/router";
import { useToken } from "@/hooks/useToken";

export default function AuthHelper() {
  //import router
  const router = useRouter();

  //import token hooks
  const { setLocalToken } = useToken();

  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let form = e.currentTarget;
    let email = form["email"].value;
    let username = form["username"].value;
    let password = form["password"].value;

    try {
      const response = await axios.post("http://localhost:8000/auth/signup", {
        username: username,
        email: email,
        password: password,
      });

      if (response.status === 200) {
        setLocalToken(response.data.token);
        router.push("/accueil");
        alert(`Bienvenue ${username}`);
      } else {
        alert("Echec de l' inscription");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const extractFirstPart = (email: string) => {
    const firstPartMatch = email.match(/^[^.@-]+/);

    const firstPart = firstPartMatch ? firstPartMatch[0] : "";

    return firstPart;
  };

  const signupWithFirebase = async (email: string) => {
    const username = extractFirstPart(email);

    try {
      const response = await axios.post("http://localhost:8000/auth/signup", {
        username: username,
        email: email,
        password: "Firebase Password",
      });

      if (response.status === 200) {
        setLocalToken(response.data.token);
        router.push("/accueil");
        alert(`Bienvenue ${username}`);
      } else {
        alert("Echec de l' inscription");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let form = e.currentTarget;
    let email = form["email"].value;
    let password = form["password"].value;

    try {
      const response = await axios.post("http://localhost:8000/auth/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        setLocalToken(response.data.token);
        router.push("/accueil");
        alert(`Bon retour`);
      } else {
        alert("Echec de la connexion");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { signup, login, signupWithFirebase };
}
