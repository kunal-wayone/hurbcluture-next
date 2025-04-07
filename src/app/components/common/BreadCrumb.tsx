import Link from "next/link";

export default function Breadcrumbs({ paths = [] }) {
  return (
    <nav className="text-sm text-gray-500 w-full m-auto p-4 lg:px-16" aria-label="breadcrumb">
      <ol className="flex items-center space-x-1">
        {paths.map((path, index) => {
          const isLast = index === paths.length - 1;
          return (
            <li key={index} className="flex items-center">
              {!isLast ? (
                <>
                  <Link
                    href={path.href}
                    className="hover:underline text-gray-500"
                  >
                    {path.label}
                  </Link>
                 <span className="mx-1 text-gray-500">/</span>
                </>
              ) : (
                <span className="text-gray-500 font-medium">{path.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
