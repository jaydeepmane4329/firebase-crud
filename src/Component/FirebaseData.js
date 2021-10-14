
import {useState,useEffect} from 'react';
import './style.css'

function FirebaseData(props){

  const initialValues = {
    name : '',
    username : '',
    email: '',
    website: '',
    mobile :'',
}

  const [inputText,setInputText] = useState(initialValues);

  useEffect(() =>{
    if(props.id === ' '){
             setInputText(
               {...initialValues})
    }else{
      setInputText({...props.data[props.id]})
    }
},[props.id,props.data])


  function handleChange(event){
     const {name,value} = event.target
     setInputText({
       ...inputText,
       [name] : value,
     }
     )
  }

    return(
        <div>
            
            <h1>Firebase Data</h1>

            <div className='form' className="needs-validation" >
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label for="validationCustom01"> name</label>
      <input type="text" className="form-control" name='name' id="validationCustom01" placeholder="First name" value={inputText.name} required onChange={handleChange}/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">username</label>
      <input type="text" className="form-control" value={inputText.username} name='username'id="validationCustom02" onChange={handleChange} placeholder="Last name" required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label for="validationCustomUsername">Email</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupPrepend">@</span>
        </div>
        <input type="text" className="form-control"value={inputText.email} name='email'id="validationCustomUsername"onChange={handleChange} placeholder="Email" aria-describedby="inputGroupPrepend" required/>
        <div className="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
  </div>
  <div className="form-row" >
    <div className="col-md-6 mb-3">
      <label for="validationCustom03">website</label>
      <input type="text" class="form-control"name='website'value={inputText.website} id="validationCustom03"onChange={handleChange} placeholder="website" required/>
      <div className="invalid-feedback">
      </div>
    </div>
  </div>
  <div className="form-group">
  </div>
  <input  className="btn btn-primary" type="submit" value={props.id === '' ? 'submit' : 'update'} />
</div>
        <div className='data'>
            <table  cellPadding='20px' border='1px'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Website</th>
                    <th>Email</th>
                    <th>EDIT DELETE</th>

                </tr>
            {
                Object.keys(props.data).map(id => {
                    return(
                        <tr key={id}>
                            <td>{props.data[id].id}</td>
                            <td>{props.data[id].name}</td>
                            <td>{props.data[id].username}</td>
                            <td>{props.data[id].website}</td>
                            <td>{props.data[id].email}</td>
                            <td><p onClick={()  => {props.ID(id)}}><i class="fas fa-edit"></i></p>
                            <p onClick={ () => {props.onDelete(id)}}><i class="fas fa-trash-alt"></i></p></td>
                        </tr>
                    )
                })
           
           }
            </table>
            </div>
        </div>
    )
}
export default FirebaseData;