import axios from "axios";
// import { useRouter } from "next/router";

export default function AuthHelper() {
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
        // router.push("/");
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
        // router.push("/");
        alert(`Bon retour`);
      } else {
        alert("Echec de la connexion");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { signup, login };
}
