import { Input } from "../../../components";

export default function SignupForm() {
  return (
    <form>
      <Input label="Email" id="email" type="email" placeholder="you@example.com" />
      <Input label="Password" id="password" type="password" />
    </form>
  );
}
