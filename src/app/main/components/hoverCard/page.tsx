type CategoryCardProps = {
    item: string;
    dropdownData: Record<string, any[]>; // Correct type
    dropdown: string | null;
  };
  
  const CategoryCard = ({ dropdownData, dropdown, item }: CategoryCardProps) => {
    return (
      <div className="bg-white p-6 shadow-lg rounded-lg max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <ul className="text-sm text-gray-700 dark:text-gray-200">
            {Array.isArray(dropdownData[item]) &&
            typeof dropdownData[item][0] === "object" ? (
              dropdownData[item].map((section, secIdx) => (
                <li key={secIdx} className="mb-2">
                  <p className="font-semibold px-4 py-2 text-gray-900 dark:text-white border-b border-black">
                    {section.section}
                  </p>
                  <ul className="ml-4">
                    {section.items.map((subItem: string, subIdx: number) => (
                      <li
                        key={subIdx}
                        className={`transition-all duration-300 ${
                          dropdown === item
                            ? "max-h-[400px] translate-y-0 opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <a
                          href="#"
                          className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))
            ) : (
              dropdownData[item]?.map((dropItem: string, dropIdx: number) => (
                <li key={dropIdx}>
                  <a
                    href="#"
                    className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {dropItem}
                  </a>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    );
  };
  
  export default CategoryCard;
  