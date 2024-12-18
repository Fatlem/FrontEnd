import Content from "../Components/Content";
import Sider from "../Components/Sider";

const AdminLayout = ({children}) => {
        return (
          <div className='bg-grey-100'>
            <div className='flex flex-row min-h-screen'>
              <Sider />
              {/* <Content /> */}
              {children}
            </div>
          </div>
        );
      }

export default AdminLayout