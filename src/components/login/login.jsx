import { useState } from 'react'
import classes from './login.module.css'

const Login = ({onLogin}) => {
    const [login, setLogin] = useState('')
    const [err, setErr] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(login.trim() !== ''){
            onLogin(login.trim())
        }else{
            setErr(true)
        }
    }

  return (
    <div className={classes.login}>
        <form onSubmit={handleSubmit}>
            <input className={err? classes.err : ''} type="text" value={login} onChange={e => {
                setLogin(e.target.value)
                setErr(false)
            }}/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login