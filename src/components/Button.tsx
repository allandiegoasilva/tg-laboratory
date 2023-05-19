
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


  const colors : any = {
    pink:'text-pink-500 border-pink-500 shadow-pink-500/50',
    purple:'text-purple-500 border-purple-500 shadow-purple-500/50',
    sky: 'text-sky-500 border-sky-500 shadow-sky-500/50'
  }

  console.log(colors[color]);

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
        transition
        ease-in-out
        shadow     
        hover:scale-105    
        duration-200
        ${selected ?  colors[color] : 'text-secondary border-secondary '}
      `}>
        { loading ?  "carregando" : children}
    </button>
  );
}