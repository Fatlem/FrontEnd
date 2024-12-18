import { UseFetchData } from "../hooks/useFetchData";

const RenderData = () => {
  const { posts } = UseFetchData();

  return (
    <div className="p-5 bg-white shadow-md rounded-md max-w-4xl mx-auto overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm text-gray-700">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-4 py-2 text-left font-semibold text-gray-600">
                ID
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-600">
                Title
              </th>
              <th className="px-4 py-2 text-left font-semibold text-gray-600">
                Body
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((data, index) => (
              <tr
                key={index}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition`}>
                <td className="px-4 py-3 text-gray-800">{data.id}</td>
                <td className="px-4 py-3 text-gray-800">{data.title}</td>
                <td className="px-4 py-3 text-gray-800">{data.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RenderData;
