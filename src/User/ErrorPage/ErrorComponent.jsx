import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an asdasd unexpected error has occurred.</p>
        <p>ubah 1</p>
        <p>ubah 2</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        </div>
    )
}
export default ErrorComponent;