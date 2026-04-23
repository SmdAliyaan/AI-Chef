import {currentUser} from @clerk/nextjs/server

export const checkUser = async () => {
    const user = await currentUser();

    if(!user){
        console.log("No user found");
        return null;
    }
}