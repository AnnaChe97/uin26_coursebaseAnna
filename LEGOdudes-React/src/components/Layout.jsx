import Header from "./Header";

export default function Layout ({setIsOpen, cartQuantity, children}){
    return (
        <div id="container">
            <Header setIsOpen={setIsOpen} cartQuantity={cartQuantity}/>
            <Nav/>
            {children}
        </div>
    )
}