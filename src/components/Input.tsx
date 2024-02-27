
interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  inputClassName?:string;
  labelClassName?:string;
  type: string;
  _default?: boolean;
  onChange: (value: any) => void; 
  onKeyUp: (value: any) => void;
}

export const Input: React.FC<InputProps> = ({label, value, placeholder, onChange, type='text', labelClassName, inputClassName, onKeyUp, _default = true}) => { 

  return (
    <>
      {label && <label className={labelClassName}>{label}</label> }
      <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} 
      className={_default? 'w-full mt-2 h-10 p-3 text-gray-800 rounded-md border-2 border-gray-400 focus:outline-none focus-visible:border-cyan-400 focus-visible:border-4' : inputClassName}
      onKeyUp={(e) => onKeyUp(e)}/>
    </>
  )
}
