import Link from "next/link";

export default function Breadcrumbs({ paths = [], color = "text-gray-500" }) {
  return (
    <nav
      className="text-sm text-gray-500 w-full m-auto p-4 lg:px-16"
      aria-label="breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        {paths.map((path, index) => {
          const isLast = index === paths.length - 1;
          return (
            <li key={index} className="flex items-center">
              {!isLast ? (
                <>
                  <Link
                    href={path.href}
                    className={`hover:underline text-xs lg:text-base ${color} capitalize`}
                  >
                    {path.label}
                  </Link>
                  <span className={`mx-1 ${color}`}>/</span>
                </>
              ) : (
                <span className={`${color} text-xs lg:text-base font-medium capitalize`}>
                  {path.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
