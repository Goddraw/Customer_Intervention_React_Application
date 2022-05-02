import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const InterventionDetails = () => {
  const { id } = useParams();
  const {
    data: intervention,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/Interventions/" + id);

  return (
    <div className="intervention-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {intervention && (
        <article>
          <h2>{intervention.title}</h2>
          <p>Written by {intervention.author}</p>
          <div> {intervention.body}</div>
        </article>
      )}
    </div>
  );
};

export default InterventionDetails;
