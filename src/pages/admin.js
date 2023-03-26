
import React, { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getQuestions } from "../rtk/slices/questions-slice";
export default function Admin() {
    const questions = useSelector((state)=>state.questions)
   
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getQuestions())
    
    }, []);

    const [inputField , setInputField] = useState({
        ques: '',
        answer1: '',
        answer2: '',
        answer3: '',
        correctAns: ''
    })

    const inputsHandler = (e) =>{
        setInputField( { ...inputField,[e.target.name]: e.target.value} )
    }
 
    
    function handleSubmit(e){
        e.preventDefault()
        const arr =JSON.parse(localStorage.getItem('questions'))?JSON.parse(localStorage.getItem('questions')):[]
        
        arr.push(inputField)
        localStorage.setItem('questions' ,JSON.stringify(arr))
        dispatch(getQuestions())
        
    }

    return (
        <>
            <div className='container m-auto w-50  '>
            <h1>admin</h1>

            <form className='text-start' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1" className='form-label p-1'>Question</label>
                
                    <input  type="text" name="ques" onChange={inputsHandler} className="form-control" id="exampleFormControlInput1" placeholder="Question"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1" className='form-label p-1'>Answer 1 </label>
                
                    <input type="text" name="answer1" onChange={inputsHandler} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1" className='form-label p-1'>Answer 2</label>
                
                    <input type="text" name="answer2" onChange={inputsHandler} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1" className='form-label p-1'>Answer 3</label>
                
                    <input type="text" name="answer3" onChange={inputsHandler} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1" className='form-label p-1'> select correct answer</label>
                    <select className="form-control" onChange={inputsHandler} name="correctAns" id="exampleFormControlSelect1">
                    <option>{inputField.answer1}</option>
                    <option>{inputField.answer2}</option>
                    <option>{inputField.answer3}</option>
                
                    </select>
                </div>
                <button type="submit"className="btn btn-primary mt-2">Confirm </button>

            
        
            </form>
            </div>
            <div className="container">
                <h2>All Questions</h2>
                {questions.map((post,i)=>{
                    return(
                       <div key={i} className="bg-dark row m-2 text-white">
                         <span className="col-6">{post.ques}</span>
                        <span className="col-6">{post.correctAns}</span>
                        
                       </div>
                    )
                })}

            </div>

        </>
    )
}
