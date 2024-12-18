import AdminLayout from "./layouts/AdminLayout";

const App = () => {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-purple-200 to-blue-200 flex items-center justify-center p-8">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-lg p-8">
        <AdminLayout />
      </div>
    </div>
  );
};

export default App;
