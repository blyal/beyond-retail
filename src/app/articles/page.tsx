import Image from "next/image";
import Link from "next/link";

export default function ArticlesHub() {
  return (
    <div className="container mx-auto px-4 pt-60">
      <div>
        {/* TODO: use a more edgey font */}
        <h2 className="uppercase font-bold">Articles</h2>
        {/* (when have more, change to 'Latest Articles') */}
      </div>
      {/* Featured Article */}
      <div className="mb-8">
        <Link
          href="/articles/the-ultimate-guide-to-becoming-a-software-engineer-from-scratch"
          passHref
        >
          <div className="relative cursor-pointer">
            <Image
              src="/code-doorway.png"
              alt="Featured Article"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-4 rounded-b-lg">
              <h2 className="text-xl font-bold">Featured Article Title</h2>
              <p className="text-sm">Category | Nov 21, 2024</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Link
          href="/articles/the-ultimate-guide-to-becoming-a-software-engineer-from-scratch"
          passHref
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
            <Image
              src="/code-doorway.png"
              alt="Article 1"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Article Title 1</h3>
              <p className="text-sm text-gray-500 mb-2">
                Category | Nov 20, 2024
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
