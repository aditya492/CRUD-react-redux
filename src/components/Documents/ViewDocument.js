import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { deleteDocument } from "../../store";
import Loader from "react-loader-spinner";


const getDocument = (documents, id) => {
  return documents.filter((document) => document.id === id)[0];
};

const ViewDocument = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const id = parseInt(history.location.pathname.split("/")[2]);
  const documents = useSelector((state) => state.document.documents);
  const document = getDocument(documents, id);

  const deleteDocumentHandler = (e) => {
    setLoading(true);
    setTimeout(() => {
      dispatch(deleteDocument(id));
      setLoading(false);
      history.push("/dashboard");
    }, 5000);
  };
  return (
    <>
      {isLoading && <p style={{textAlign:"center"}}><Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={6000} //3 secs
      /></p>}
      {!document && !isLoading && <p>No such document exist</p>}
      {document && !isLoading && (
        <div style={{textAlign:"center"}}>
          <h2>{document.title}</h2>
          <p>{document.body}</p>
          <button onClick={deleteDocumentHandler}>Delete</button>
        </div>
      )}
    </>
  );
};

export default ViewDocument;