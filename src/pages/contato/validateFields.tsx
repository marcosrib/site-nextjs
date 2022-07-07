

export interface Form {
    name: string,
    email:string,
    lastName: string,
    message: string
}

export const validateFields = (form: Form) => {
    const {name, email,lastName, message } = form;
    console.log("validation");
    
   if(name == "") throw new Error("O campo nome é obrigatorio")
   if(email == "") throw new Error("O campo email é obrigatorio")
   if(lastName == "") throw new Error("O campo sobrenome é obrigatorio")
   if(message == "") throw new Error("O campo mensagem é obrigatorio")
    const emailValid = form.name.toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(!emailValid) throw new Error("Email invalid")
}  