import { useParams } from "react-router-dom";

function Property() {
    const { id } = useParams();
    return <h1>Property {id}</h1>;
}

export default Property