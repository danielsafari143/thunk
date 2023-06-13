import { useSelector , useDispatch } from "react-redux";
import { fetchUser } from "../store/users/usersSlice";
import { useEffect } from "react";

const Container = () => {
    const {users ,  isLoading , error} = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser())
    } , [])

    if(isLoading) {
        return <h4>Loading...</h4>
    }
    if(error) {
        return <h4>Page not found</h4>
    };
   
    return(  
        users.map((item) => {
            return  (
                <div key={item.id.value}>
                    <h3>{`${item.name.first} ${item.name.last}`}</h3>
                    <img src={item.picture.medium} alt=""/>
                </div>
            )
        })
    )
};

export default Container;