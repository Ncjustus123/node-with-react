import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Exercise = props =>(
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
        <Link to ={"/edit"+props.exercise._id}></Link>| <a href="#" onClick={() =>{props.deleteExercise(props.exercise._id)}}>delete</a>
    </td> 
  </tr> 
)

export default class ExerciseList extends Component{
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {exercise:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
        .then(response => {
            this.setState({ exerxise: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteExercise(id){
        axios.delete('http://localhost:5000/exercise/+ id')
        .then(res => console.log(res.data));
        this.setState({
            exercise:this.state.exercise.filter(el =>  el._id !== id)
        })
    }
 
    exerciseList(){
       return this.state.exercise.map(curentexercise =>{
         return <Exercise exercise={curentexercise} deleteExercise={this.deleteExercise} key={curentexercise._id}/>;  
       }) 
    }

    render() {
       return(
          <div>
              <h3>Logged Exercise</h3>
              <table className="table">
                <thead className="thead-light">
                  <tr>
                     <th>Username</th>
                     <th>Description</th>
                     <th>Duration</th>
                     <th>Date</th>
                     <th>Actions</th>    
                   </tr>  
                 </thead>
                <tbody>
                  {this.exerciseList()}
               </tbody> 
             </table>
           </div> 

        )
    }
}