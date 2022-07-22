import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useAuthStatus = () => {
  const [loggedIn, setLoggeIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (user) {
      setLoggeIn(true)
    } else {
      setLoggeIn(false)
    }
    setCheckingStatus(false)
  }, [user])

  return { loggedIn, checkingStatus }
}
