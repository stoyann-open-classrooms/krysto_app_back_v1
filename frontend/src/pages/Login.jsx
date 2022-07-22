import { useState } from 'react'
import { toast } from 'react-toastify'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const dispatch = useDispatch()

  const { user, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth,
  )

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }
    dispatch(login(userData))
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Connexion
        </h1>
        <p>Connecter vous pour commencer...</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Entrez votre e-mail"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Entrez votre mot de passe."
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Envoyer</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
