function Header() {
    const isLogin = false;
    return(
        <header>
            {isLogin ?(
                <div>
                <button>Dashbord</button>
                <button>BasketBall</button>
                </div>
                ):(
                <>
                <button>LOgin</button>
                </>
                )}
       {isLogin && <button>Cart</button>}
        </header>
    )
}
export default Header;