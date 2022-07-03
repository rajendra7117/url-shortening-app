import React, {useContext} from 'react'
import { Context } from '../Context/Context'
import './UrlContainer.scss'

const UrlContainer : React.FC = () => {
  const ctx = useContext(Context)

  

  return (
    <>
     <ul>
      {ctx.urlArray?.map((url) => <li key={`${url.id}`}><a href={`${url.url}`}  target="_blank" >{url.shortLink}</a></li>)}
     </ul>
   </>
  )
}

export default UrlContainer