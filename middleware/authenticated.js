export default function({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.token) {
        console.log("authenticate");
        return redirect("/auth/login");
    }
}