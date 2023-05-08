import "./Skeleton.scss";

function Skeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton__circle" />
      <div>
        <div className="skeleton__line" />
        <div className="skeleton__line" />
      </div>
    </div>
  );
}

export default Skeleton;
