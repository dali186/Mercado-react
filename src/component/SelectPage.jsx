import { Link } from "react-router-dom";

const SelectPage = ({ descriptions }) => {

    return<>
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-5">
        {/* Header Section */}
        <header className="text-center my-10">
          <h1 className="text-4xl font-bold text-gray-800">Mercado</h1>
          <p className="text-lg text-gray-600 mt-4">What are you doing here?</p>
        </header>
  
        {/* Post Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {descriptions.map((post) => (
            <Link
                key={post.id}
                to={post.link}  // 해당 포스트의 상세 페이지로 이동하는 링크
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
              >
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
                <p className="text-gray-600 mt-2">{post.description}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </>
}

export default SelectPage;