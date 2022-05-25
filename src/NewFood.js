import { useState } from "react";

const NewFood(){
    
    const [form, setForm] = useState({
        name: '',
        calories: '',
        image: '',
        quantity: ''
    })

    const handleOnSubmit = (event) => {
        event.preventDefault() 
        const newFood = {form}
        props.handleNewFood(newFood)
    }   


    const handleChange = (event) => {    
        const formCopy = {...form};
        formCopy[event.target.name] = event.target.value;
        formCopy["quantity"] = 0;
        setForm(formCopy)
        
    }

   
}

export default NewFood;