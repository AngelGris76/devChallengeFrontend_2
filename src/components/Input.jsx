import style from './Input.module.css';

const EXTRA_CLASS = {
  sm: style.smallSize,
  md: style.mediumSize,
};

const Input = ({
  size = 'md',
  error,
  label,
  helperText,
  multiline,
  fullWidth,
  startIcon: StartIcon,
  endIcon: EndIcon,
  iconWidth = '1rem',
  ...props
}) => {
  const sizeClass = EXTRA_CLASS[size];
  const extraPadding = StartIcon ? style.extraPadding : '';
  const errorClass = error ? style.error : '';
  const fullWidthClass = fullWidth ? style.fullWidth : '';

  const styled = StartIcon
    ? { paddingLeft: `calc(1.25rem + ${iconWidth})` }
    : {};

  if (multiline) {
    return (
      <label className={`${style.multilineComponent}`}>
        {label && <span className={`${style.labelText}`}>{label}</span>}
        <textarea
          className={style.multilineText}
          cols='30'
          rows='10'
          {...props}
        ></textarea>
      </label>
    );
  }

  return (
    <label className={`${style.component} ${fullWidthClass}`}>
      {label && (
        <span className={`${style.labelText} ${errorClass}`}>{label}</span>
      )}
      <div className={style.inputContainer}>
        {StartIcon && (
          <span className={style.startIcon}>
            <StartIcon width={iconWidth} />
          </span>
        )}
        <input
          className={`${style.input} ${sizeClass} ${extraPadding} ${fullWidthClass}`}
          style={styled}
          aria-invalid={error}
          {...props}
        />
        {EndIcon && (
          <span className={style.endIcon}>
            <EndIcon width={iconWidth || '1rem'} />
          </span>
        )}
      </div>
      {helperText && (
        <span className={`${style.helperText} ${errorClass}`}>
          {helperText}
        </span>
      )}
    </label>
  );
};

export default Input;
