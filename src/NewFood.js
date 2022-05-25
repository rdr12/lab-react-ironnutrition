import { useState } from "react";

function AddFood(){
    const [form, setForm] = useState({
        name: '',
        calories: '',
        image: '',
        quantity: ''
    })

    function handleChange = (event) => {      
        const setForm({...form, [event.target.name] = event.target.value})
        
     

    }

    function handleOnSubmit = (event) => {
        event.preventDefault() 
        const newFood = {form}
        props.handleAddFood(newFood)
    }   

}

export default NewFood;