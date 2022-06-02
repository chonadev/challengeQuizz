import React, { useEffect, useState } from "react";
import { fetchQuestionnaires } from "../services/Questionnaire.service";

export const Questionnaire = () => {
  const [questionnaire, setQuestionnaire] = useState([]);

  useEffect(() => {
    fetchQuestionnaires().then( data => {
      setQuestionnaire(data);
    })
  }, [])
  

  return (
    <div className="container mt-3">
      <div className="row">
        { questionnaire && questionnaire.map( item =>
          <div class="col py-3">
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body text-center">
                <div className="card-title text-uppercase">{ item.title }</div>
                <h6 class="card-subtitle mb-2 text-muted">
                  { item.questions ? item.questions.length : 'NONE' } Questions
                </h6>
                <hr/>
                <div>
                  <button type="button" className="btn btn-primary card-link"> play </button>
                  <a href="#" className="card-link"> edit </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
