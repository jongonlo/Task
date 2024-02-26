
interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  inputClassName?:string;
  labelClassName?:string;
  type: string;
  onChange: (value: any) => void; 
  onKeyUp: (value: any) => void;
}

export const Input: React.FC<InputProps> = ({label, value, placeholder, onChange, type='text', labelClassName, inputClassName, onKeyUp}) => {

  return (
    <>
      {label && <label className={labelClassName}>{label}</label> }
      <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className={inputClassName} onKeyUp={(e) => onKeyUp(e)}/>
    </>
  )
}
