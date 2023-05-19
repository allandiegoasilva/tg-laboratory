
export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  loading?: boolean;
  type?: 'submit' | 'button' | 'reset';
  color: string;
}

export default function Button(props : IButtonProps) {

  const { 
    children, 
    loading = false,
    selected = false,
    color,
    ...otherProps 
  } = props;


  let border = 'border-'+color+'-500';
  let text = 'text-'+color+'-500';

  console.log(border);
  console.log(text);

  return (
    <button 
      type={'button'} 
      {...otherProps} 
      className={`
        flex 
        items-center 
        justify-center
        gap-1  
        rounded-full 
        p-3
        px-6
        text-xs
        font-prompt
        uppercase
        border 
        hover:${border}
        hover:${text}
        transition
        ease-in-out
        duration-200
        ${!selected ? 'text-secondary border-secondary' : (border + ' ' + text)}
      `}>
        { loading ?  "carregando" : children}
    </button>
  );
}