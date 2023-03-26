
import React, {useEffect ,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getQuestions } from "../rtk/slices/questions-slice";

export default function Student() {
    const [index ,setIndex]= useState(-1);
    const questions = useSelector((state)=>state.questions)
   
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getQuestions())
    
    }, []);
   
    console.log(index);
    const q =questions[index]
    function start(){
      setIndex(0)
    }

  return (
    <div className="container m-auto ">
        <h1>student</h1>
        {index<0 ? <button onClick={()=>{start()}} className="btn btn-danger">Start Quiz</button> :''}
        {
           index>-1 ?  
           <div className=" m-auto w-75 ">
                <div className="border">
                    <div className="mb-3 row">
                        <label for="staticEmail" className="col-sm-2 col-form-label">Question :</label>
                        <div className="col-sm-10">
                        <input type="text" readonly className="form-control-plaintext" id="staticEmail" value={q.ques }/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                    <label for="staticEmail" className="col-2 col-form-label">Answers :</label>

                        <div class="form-check col-3 form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={q.answer1 }/>
                            <label class="form-check-label" for="inlineRadio1">{q.answer1 }</label>
                        </div>
                        <div class="form-check col-3  form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value={q.answer2 }/>
                            <label class="form-check-label" for="inlineRadio2">{q.answer2 }</label>
                        </div>
                        <div class="form-check col-3  form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value={q.answer3 } />
                            <label class="form-check-label" for="inlineRadio3"> {q.answer3 } </label>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-2">
                    
                    <button  onClick={()=>{setIndex(index-1)}}   className="btn btn-primary">previous</button>
                    <button onClick={()=>{setIndex(index+1)}} className="btn btn-primary">next</button>
                </div>
           </div>
           :'' 
        }
      
    </div>
  )
}
