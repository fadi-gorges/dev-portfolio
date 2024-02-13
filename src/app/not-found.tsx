import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "",
};

const NotFoundPage = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <h3>404 - Page Not Found</h3>
    </div>
  );
};

export default NotFoundPage;
