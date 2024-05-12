import axios from "axios";
import { useState } from "react";

function Register() {
    const [user, Setuser]=useState({name:'',email:'',username:'',password:''})
    const [validateError, setvalidateError] = useState({})
    const validateform =()=>{
        const errors={}
        if (!user.name) {
            errors.name='Name can not be empty'
        }
        if (!user.email) {
            errors.email='Name can not be empty'
        }
        if (!user.username) {
            errors.username='Name can not be empty'
        }
        if (!user.password) {
            errors.password='Name can not be empty'
        }

        return errors;
    }
    let resp
    const handlesubmit = async (e)=>{
        e.preventDefault()
        const errors = validateform();
        if (Object.keys(errors).length==0) {
            setvalidateError({})
            try {
                 resp = await axios.post('http://localhost:3000/api/auth/register',user)
                if (resp.status===201) {
                    alert(resp.data.message)
                    
            }else{
                console.log(errors
                    
                );
            }
            } catch (error) {
                 console.log(resp);
            }
        }
        else{
            setvalidateError(errors)
        }
    }
    return (
     <div className="container">
     <h1 className="text-center">Register Form</h1>
     <hr/>
     <form onSubmit={handlesubmit}>
        <div className={`form-group mt-3 ${validateError.name ? 'has-error':''}`}>
        <label>Name</label>
        <input type="text" placeholder="@example:Alex" 
        className={`form-control ${validateError.name?'is-invalid':''}`}
        onChange={(e)=>Setuser({...user, name: e.target.value})}/>
        {
            validateError.name && <div className="invalid-feedback">
                Name is required
            </div>
        }
        </div>
        <div className={`form-group mt-3 ${validateError.email?'has-error':''}`}>
        <label className="mt-2">Email</label>
        <input type="email" placeholder="@example:Alex"  
        className={`form-control ${validateError.email?'is-invalid':''}`}
        onChange={(e)=>Setuser({...user, email: e.target.value})}/>
        {
            validateError.email && <div className="invalid-feedback">
                {validateError.email}
            </div>
        }
        </div>
        <div className={`form-group mt-3 ${validateError.name ? 'has-error':''}`}>
        <label className="mt-2">UserName</label>
        <input type="text" placeholder="@example:Alex" 
        className={`form-control ${validateError.username?'is-invalid':''}`} 
        onChange={(e)=>Setuser({...user, username: e.target.value})}/>
        {
            validateError.username && <div className="invalid-feedback">
                Username is required
            </div>
        }
        </div>
        <div className={`form-group mt-3 ${validateError.name ? 'has-error':''}`}>
        <label className="mt-2">Password</label>
        <input type="password" placeholder="@example:Alex" 
        className={`form-control ${validateError.password?'is-invalid':''}`}
        onChange={(e)=>Setuser({...user, password: e.target.value})}/>
        {
            validateError.password && <div className="invalid-feedback">
                Password is required
            </div>
        }
        </div>
        <button type="submit" className="btn mt-2 btn-primary w-100">REGISTER</button>
     </form>
    </div> 
    );
}

export default Register;