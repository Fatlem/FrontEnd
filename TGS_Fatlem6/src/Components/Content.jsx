import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const Content = () => {
    return (
      <div className="flex flex-col flex-1">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }

  export default Content