function User({user}) {
    // console.log(props.name)
    return(
        <div>
            <hr />
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <h1>{user.email}</h1>
        </div>
    )
}
export default User;