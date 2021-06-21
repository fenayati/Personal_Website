import React, { createContext, useState, useEffect, useContext } from 'react'
import { FetchContext } from './FetchContext'
import Apis from '../constants/Apis'

const SiteInfoContext = createContext({
  siteInfo: {}
})
export { SiteInfoContext }

export default function SiteInfoContextProvider({ children }) {
  let { fetchGet } = useContext(FetchContext)
  const [siteInfo, setSiteInfo] = useState({})
  useEffect(() => {
    fetchGet(Apis.GetSiteInfo).then(({ status, data }) => {
      if (status === 200) {
        setSiteInfo(data.site)
      }
    })
  }, [])
  return (
    <SiteInfoContext.Provider value={{
      siteInfo
    }} >
      {children}
    </SiteInfoContext.Provider>
  )

}
