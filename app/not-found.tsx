//create not found page

export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl lg:text-4xl text-amber-400 font-bold">404 Not Found</h1>
      <p className="text-lg lg:text-2xl text-amber-400">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
