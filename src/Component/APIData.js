import axios from 'axios';
import FirebaseData from './FirebaseData';
import {useState,useEffect} from 'react';
import firebaseDb from './firebaseConfig';
import './styles.css';

function APIData(){

   
    
    const [users,setUsers] = useState({});
    const [firebaseData,setFirebaseData] = useState({});
    const [count,setCount] = useState(0); 
    const [currentID, setcurrentID] = useState('')

    useEffect(() => {
        firebaseDb.child('users').on('value',snapShot => {
            if(snapShot.val() != null){
                setFirebaseData(snapShot.val())
            }
        })
 },[])


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setUsers(res.data)
        })
        .catch(err => {
            if(err){
                console.log(err)
            }
        })
    },[])
    
   

    
 

    function add(users){
         
        setCount(count + 1)
       if(currentID === ''){
        firebaseDb.child('users').push(
            users[count],
            err => {
                if(err){
                    console.log(err)
                }else{
                    setcurrentID('')
                }
            })
        }else{
            firebaseDb.child(`users/${currentID}`).set(
                users,
                err => {
                    if(err){
                        console.log(err)
                    }else{
                    setcurrentID('')
                    }
                }
            )
        }
    }

    function onDelete(id){
        if(window.confirm('Are You Sure to Delete This?')){
          firebaseDb.child(`users/${id}`).remove()
        }
  }
    


    return(
        <div className='ApiData'>
        
          <h1>User Data From JsonPlaceholder</h1>
          {
              Object.keys(users).map((id,index) => {
                  return (
                      <ul className='box'  key={id}>
                          <li>{users[id].id}</li>
                          <li>{users[id].name}</li>
                          <li>{users[id].username}</li>
                          <li>{users[id].phone}</li>
                          <li>{users[id].website}</li>

                      </ul>
                      
                  )
              })
          }
          <button   onClick={ () => {add(users)}}>Submit</button>

           <FirebaseData data ={firebaseData} ID ={setcurrentID} id = {currentID} onDelete ={onDelete}/>
        </div>
       
    )
}
export default APIData;