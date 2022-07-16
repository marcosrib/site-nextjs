

export interface Form {
    name: string,
    email:string,
    lastName: string,
    message: string
}

const errors = {
    name: "",
    email:"",
    lastName: "",
    message: ""
}

export const validateFields = (form: Form) => {
   const {name, email,lastName, message } = form;
   resetObject();


   if(name == "") Object.assign(errors, { name: "O campo nome é obrigatorio"});
   
   if(email == "") Object.assign(errors, { email: "O campo email é obrigatorio"})
   if(lastName == "") Object.assign(errors, { lastName:"O campo sobrenome é obrigatorio"})
   if(message == "")  Object.assign(errors, { message:"O campo mensagem é obrigatorio"})
  
  const regExp =  new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$")
   
   if(!regExp.test(email.toLowerCase()))  Object.assign(errors, { email:"Email invalid"})
  
   if(errors.name     !== "" || 
      errors.email    !== "" ||
      errors.lastName !== "" ||
      errors.message  !== "" 
      ) {
        throw new Error(JSON.stringify(errors))
      }


}  
function resetObject() {
    errors.name ="";
    errors.email ="";
    errors.lastName ="";
    errors.message ="";
    
}