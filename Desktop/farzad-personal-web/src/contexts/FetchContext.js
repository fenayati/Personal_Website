import React, { createContext, useContext, useState } from 'react'
import { lang } from '../localization'
import { CircularProgress, Grid, Modal } from '@material-ui/core'

const FetchContext = createContext({
  fetchGet: (url) => { }
})
export { FetchContext }

function FetchContextProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const fetchGet = (url) => {
    setLoading(true)
    return new Promise((res, rej) => {
      var status
      fetch(url, {
        method: "GET",
        headers: {
          'content-type': 'application/json',
          "localization": lang
        }
      }).then(response => {
        status = response.status
        return response.json()
      }).then(responsJson => {
        res({ status: status, data: responsJson })
        setLoading(false)
      }).catch((e) => {
        res({ status: 500, data: [] })
        setLoading(false)
      })
    })
  }
  return (
    <FetchContext.Provider
      value={{ fetchGet }}
    >
      {children}
      <Modal open={loading}>
        <Grid container style={{ height: "100vh" }} justify="center" alignItems="center" >
          <CircularProgress color="primary" />
        </Grid>
      </Modal>
    </FetchContext.Provider>
  )
}
export default FetchContextProvider
