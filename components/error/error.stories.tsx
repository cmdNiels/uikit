import Error from "./Error";

export default {
	title: "UI/Error",
};

export const Default = () => (
	<Error title="Something went wrong" message="An unexpected error occurred. Please try again later." />
);

export const NotFound = () => <Error title="Page Not Found" message="The page you are looking for does not exist." />;

export const Unauthorized = () => (
	<Error title="Unauthorized" message="You do not have permission to access this resource." />
);

export const ServerError = () => (
	<Error title="Server Error" message="The server encountered an error and could not complete your request." />
);
