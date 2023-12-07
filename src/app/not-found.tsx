import Link from "next/link";
import Footer from "./components/Footer";
import Button from "./components/Button";

export default function NotFound() {
  return (
    <>
      <div className="mt-32 flex flex-col items-center justify-center gap-32">
        <div className="content flex h-full flex-col gap-8 text-center xl:max-w-[502px]">
          <div className="flex flex-col gap-4">
            <div className="">
              <span className="font-semibold uppercase text-red-600">
                ERROR 404 PAGE NOT FOUND
              </span>
              <h1 className="text-5xl font-semibold">
                The page you are looking for is not on this website, please
                check again
              </h1>
            </div>
            <p className="text-lg">
              The system cannot find the page you are looking for, maybe you
              have the wrong path or the page has been deleted.
            </p>
          </div>
          <Link href="/">
            <Button variant="secondary">Back to Home</Button>
          </Link>
        </div>
        <div className="h-full">
          <Footer />
        </div>
      </div>
    </>
  );
}
