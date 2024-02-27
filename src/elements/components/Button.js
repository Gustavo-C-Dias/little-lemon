function Button({variant, children}) {
  variant = variant === 'primary' ? 'yellow-bg' : 'green-bg';

  return (
    <button className={`${variant} button`}>
      {children}
    </button>
  );
}

export default Button;
