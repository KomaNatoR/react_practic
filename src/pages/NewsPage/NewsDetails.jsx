// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
    const params = useParams();
    console.log(params);

    return (
        <div>
            NewsDetails
        </div>
    )
};


export default NewsDetails;