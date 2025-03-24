import React from 'react'

const RadioButtonHigh = (props) => {
  return (
    <div className='flex justify-center items-center text-end gap-2 sub-option'>
        <p className='mr-8'>{props.subject}</p>
        <div>
            <svg className=' absolute arrowDes' width="19" height="81" viewBox="0 0 19 81" style={{margin:"-29px "}} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 0.52832V20.7642L1 38.4057L18 56.0472V80.434" stroke="#33FCFF" strokeWidth="1px"/>
            </svg>
             <svg className='radioHigh absolute' width="24" height="25" viewBox="0 0 24 25" style={{margin:"-5px"}} fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M11.999 24.2266C9.36878 24.2266 6.71303 23.3596 4.49139 21.6001C-0.666903 17.4692 -1.50959 9.8959 2.62725 4.71952C6.7641 -0.456861 14.3483 -1.27285 19.5066 2.85806C22.0091 4.87251 23.5924 7.72845 23.9244 10.8904C24.2819 14.0778 23.3626 17.2142 21.3707 19.7132C18.9959 22.6711 15.523 24.2266 11.999 24.2266ZM4.61907 6.32598C1.35045 10.3804 2.01438 16.3472 6.10016 19.6112C10.1604 22.8751 16.1358 22.2121 19.4045 18.1322C20.9877 16.1687 21.7027 13.6953 21.4218 11.1964C21.1409 8.69743 19.9152 6.42798 17.9234 4.87251C13.8376 1.58309 7.88768 2.24607 4.61907 6.32598Z" fill="#33FCFF"/>
                 <path d="M19 12.2266C19 16.0825 15.8559 19.2266 12 19.2266C8.14407 19.2266 5 16.0825 5 12.2266C5 8.37063 8.14407 5.22656 12 5.22656C15.8559 5.22656 19 8.37063 19 12.2266Z" fill="#33FCFF"/>
            </svg>

            <svg className='regular-radio' width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 6.72656C11.5 9.7555 9.02894 12.2266 6 12.2266C2.97106 12.2266 0.5 9.7555 0.5 6.72656C0.5 3.69762 2.97106 1.22656 6 1.22656C9.02894 1.22656 11.5 3.69762 11.5 6.72656Z" stroke="white" stroke-opacity="0.4"/>
            </svg>

        </div>

    </div>
  )
}

export default RadioButtonHigh