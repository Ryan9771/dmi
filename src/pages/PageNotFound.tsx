import { HashLink } from "react-router-hash-link";

function PageNotFound() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <p className="text-4xl">Page not found</p>
      <HashLink className="mt-4 text-2xl font-semibold" to="/#">
        <u>Go Back!</u>
      </HashLink>
    </div>
  );
}

export default PageNotFound;
