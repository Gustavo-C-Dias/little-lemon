function Link({href, variant, children, ...rest}) {
  const styleVariant = variant === 'button' ? 'yellow-bg' : '';

  return (
    <a
      href={href}
      className={`${variant} ${styleVariant}`}
      {...rest}
    >
      {children}
    </a>
  );
}

export default Link;