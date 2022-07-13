const validation = (values) => {
    let errors={};

    //Throw error if...

    // For creasting new nutrition post
    if(!values.name){
        errors.name="Name of food item required"
    }

    if(!values.category){
        errors.category="Food category required"
    }

    if(!values.imageUrl){
        errors.imageUrl="Insert image URL"
    }

    if(values.quantity <= 0){
        errors.quantity="Quantity cannot be less than 1"
    }


    return errors;
}

export default validation;