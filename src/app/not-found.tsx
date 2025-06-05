import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="px-2 w-full text-center">
      <h2 className="text-2xl">Page Not Found</h2>
      <Image
        className="m-auto rounded-xl"
        src="/images/not-found-1024x1024.png"
        width={300}
        height={300}
        sizes="300px"
        alt="404 Not Found: Computer with sad face"
        priority={true}
        title="Page Not Found"
      />
      <Link href="/">Return Home</Link>
    </div>
  );
}
