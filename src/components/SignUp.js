import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Validate } from './helper/Validate';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { notify } from './helper/Toast';
import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css'


const SignUp = () => { // 7

    const [data , setData] = useState({ // 8
        name : "" , 
        email : "" , 
        password : "" , 
        confirmPassword : "" ,
        isAcccepted : false
    })

    const [errors , setErrors] = useState([]) // 24
    const [touched , setTouched] = useState([]) // 28

    useEffect(() => {  // 25
        setErrors(Validate (data , "SignUp")) // 26
        // console.log(errors);
    } , [data , touched]) // 27

    const fucosHandler = (e) => { // 29
        setTouched({...touched , [e.target.name] : true}) // 30
    }

    // 16 full
    const changeHandler = (e) => { 
        console.log(e.target.value);
        if(e.target.name === 'isAccepted') { 
            setData({...data , [e.target.name] : e.target.checked})
        } else { 
            setData({...data , [e.target.name] : e.target.value})
        }
    }

    const navigate = useNavigate() // 37

    const submitHandler = (e) => { // 31
        
        e.preventDefault() // 32
        if(!Object.keys(errors).length) { // 33
            notify("You Logged In Successfully" , "success"); // 34

            setTimeout(() => { // 39
                
                navigate('/HomePage') // 38 :)
            }, 3000);
        } else { 
            notify("Invalid Data" , "unsuccess") // 35
            setTouched({  // 36
                name : true , 
                email : true ,  
                password : true , 
                confirmPassword : true ,  
                isAccepted : true 
            })
        }
    }


    return (
        <div className={styles.container}>

            <form onSubmit={submitHandler} className={styles.formContainer}>
                {/* 9 */}
                <h1 className={styles.header}>SignUp</h1>

                {/* 10 */}
                <div className={styles.formField}>
                    <label>UserName</label>
                    <input className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                        type="text" name='name' value={data.name} onChange={changeHandler} onFocus={fucosHandler} className={styles.formInput} />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>

                {/* 11 */}
                <div className={styles.formField}>
                    <label>E-Mail</label>
                    <input className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                        type="email" name='email' value={data.email} onChange={changeHandler} onFocus={fucosHandler} />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>

                {/* 12 */}
                <div className={styles.formField}>
                    <label>Password</label>
                    <input className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
                        type="password" name='password' value={data.password} onChange={changeHandler} onFocus={fucosHandler} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>

                {/* 13 */}
                <div className={styles.formField}>
                    <label>Confrim Password</label>
                    <input className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput} 
                        type="password" name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} onFocus={fucosHandler} />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>

                {/* 14 */}
                <div className={styles.formField}>
                    <label>Accept The Rules</label>
                    <input className={styles.checkBoxContainer}
                        type="checkbox" name='isAccepted' value={data.isAccepted} onChange={changeHandler} onFocus={fucosHandler} />
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>

                {/* 15 */}
                <div className={styles.formButtons}>
                    <Link to='/login'>Login</Link>
                    <button type='submit' >SignUp</button>
                    
                </div>

            </form>
                <ToastContainer />
        </div>
    );
};

export default SignUp;