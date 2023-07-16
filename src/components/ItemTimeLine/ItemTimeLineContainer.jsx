export default function ItemTimeLineContainer({
  bgColor,
  icon,
  color,
  children
}) {
  return (
    <>
      <li className="target sm:flex-col">
        <span className={bgColor}>
          <i className={`${icon} text-xl text-${color}`}></i>
        </span>
        <div className="w-11/12">{children}</div>
      </li>
    </>
  );
}
