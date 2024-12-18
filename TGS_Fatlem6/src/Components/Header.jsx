import Button from "./Button";

const Header = () => {
    return (
        <header className="bg-orange-200 p-3 flex justify-end items-center">
            <Button title='Logout' color='bg-indigo-500' />        
        </header>
      );
}

export default Header