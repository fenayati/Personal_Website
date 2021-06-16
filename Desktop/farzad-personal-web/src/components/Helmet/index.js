import React from 'react'
import { Helmet } from "react-helmet";

export default function Index({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
