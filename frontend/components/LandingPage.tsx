import Link from "next/link";
import { Button } from "./ui/button";
import Footer from "./Footer";

function LandingPage() {
  return (
    <section>
      <div className="custom-screen py-40 text-gray-600">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
            Build your SaaS product faster with Blinder
          </h1>
          <p className="max-w-xl mx-auto">
            Blinder making it simple for you to build and grow your SaaS
            applications, or any business idea.
          </p>
          <div className="flex items-center justify-center gap-x-3 font-medium text-sm mt-10">
            <Link href="/my-store">
              <Button variant="default" className="">
                My Store
              </Button>
            </Link>
            <Button className="" variant="outline">
              See Pricing
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Footer />
      </div>
    </section>
  );
}

export default LandingPage;
