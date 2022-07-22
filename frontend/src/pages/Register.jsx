import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    image: '',
    password: '',
    password2: '',
  })

  const { username, image, email, password, password2 } = formData
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user, isLoading, isError, isSuccess, message} = useSelector(state => state.auth)

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }
    // Redirect when logged in
    if(isSuccess || user) {
    navigate('/')
    }
    dispatch(reset())
    
    },[isError, isSuccess, user, message, navigate, dispatch])



  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Les mots de passe ne sont pas identiques')
    } else {
      const userData = {
        username,
        email,
        password,
        image,
      }
      console.log(userData);
      dispatch(register(userData))

    }
  }

  const handleFile = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Incription
        </h1>
        <p>Créer vous un compte pour commencer</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <div className="form-group">
            <input
              onChange={handleFile}
              type="file"
              id="profilPic"
              name="image"
              value={image}
              accept="image/png, image/jpeg, image/png"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={onChange}
              placeholder="Entrez votre nom d'uttisateur"
              required
            />
          </div>

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
            <input
              className="form-control"
              type="password"
              id="password2"
              name="password2"
              value={password2}
              onChange={onChange}
              placeholder="Confirmation du mot de passe"
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

export default Register
