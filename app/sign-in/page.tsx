import { SignIn } from "@stackframe/stack";
import Link from "next/link";

export default function page() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <SignIn />
        <Link href="/">Go Back Home</Link>
      </div>
    </div>
  );
}
