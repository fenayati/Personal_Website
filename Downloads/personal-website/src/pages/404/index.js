import React from 'react'
import Top404 from '../../components/404/Top404'
import Helmet from '../../components/Helmet'
import { getTranslate } from '../../localization'

export default function index() {
  const translate = getTranslate()
  return (
    <>
      <Helmet title={translate.name + "-" + translate.PageNotFound} description={translate.PageNotFound} />
      <Top404 />
    </>
  )
}
