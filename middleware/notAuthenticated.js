import axios from "axios";
export default async function({ store, redirect }) {
    // If the user is authenticated redirect to home page /verifyToken
    if (store.state.token) {
        console.log("not authen");
        return redirect("/chat");
    }
}