import './button.css'

const Button = ({ label }) => {

  const alertClick = () => {
    alert('A label desse botão é Baixar CV !');
  };

  return (
    <button onClick={alertClick} className='btn'>{label}</button>
  );
};

export default Button;