const Button = ({ children, text, color = "black" }) => {
  // 이벤트 객체
  // 합성 이벤트 : 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} = {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
