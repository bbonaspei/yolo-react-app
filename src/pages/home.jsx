const Home = ({user}) => {
    return (
        <div>
            {user ? (
                <>Welcome {user.name}</>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Home