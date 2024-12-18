const Sider = () => {
    return (
        <aside className="bg-indigo-900 w-64 text-white">
          <div className="p-4">
            <h2 className="font-bold text-2xl">Admin Panel</h2>
            <nav className="mt-4 ml-4">
              <ul>
                <li className="mb-4 flex items-center">
                  <i data-feather="home" className="mr-2"></i>
                  <a href="#" className="hover:underline">Dashboard</a>
                </li>
                <li className="mb-4 flex items-center">
                  <i data-feather="users" className="mr-2"></i>
                  <a href="#" className="hover:underline">Mahasiswa</a>
                </li>
                <li className="flex items-center">
                  <i data-feather="settings" className="mr-2"></i>
                  <a href="#" className="hover:underline">Settings</a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      );
}

export default Sider