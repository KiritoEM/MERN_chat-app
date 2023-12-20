export default function AuthHelper() {
  const signup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let form = e.currentTarget;
    let email = form["email"].value;
    let username = form["username"].value;
    let password = form["password"].value;

    console.log(email, username, password);
    
  };

  return { signup };
}
