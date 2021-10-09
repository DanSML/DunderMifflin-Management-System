import React, { InputHTMLAttributes} from "react"

import './styles.scss'

const InputCurrencyMasked: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({...props}) => {

  return (
    <div className="inputMasked">
      <input {...props}/>
    </div>  
  )
}

export { InputCurrencyMasked }