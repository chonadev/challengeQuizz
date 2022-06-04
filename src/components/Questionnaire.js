import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchQuestionnaires from "../services/Questionnaire.service";
import { isAutenticated } from "../services/Utils";

export const Questionnaire = () => {
  const [questionnaire, setQuestionnaire] = useState([]);
  const navigate = useNavigate();

  if (!isAutenticated()) {
    navigate('login');
  }

  useEffect(() => {
    fetchQuestionnaires().then( data => {
      setQuestionnaire(data);
    })
  }, [])
  

  return (
    <div className="container mt-3">
      <div className="row">
        { questionnaire && questionnaire.map( item =>
          <div className="col py-3" key={item.id}>
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body text-center">
                <div className="card-title text-uppercase">{ item.title }</div>
                <h6 className="card-subtitle mb-2 text-muted">
                  { item.questions ? item.questions.length : 'NONE' } Questions
                </h6>
                <hr/>
                <div>
                  <button type="button" className="btn btn-primary card-link"> play </button>
                  <a href="/#" className="card-link"> edit </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
