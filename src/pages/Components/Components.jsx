import Add from "../../Counter/Add/Add";
import Tamp from "../../Counter/Tamp/Tamp";
import Timer from "../../Counter/Timer/Timer";
import Variable from "../../Counter/Variable/Variable";
import Counter from "../../Counter/Counter/Counter";

import "./Components.css";

function Components() {
  return (
    <div className="component-container">
      <h2>
        <span className="badge bg-dark">React Component</span>
      </h2>
      <div className="components-container-1">
        <div>
          <Counter name={"Counter"} value={0} />
          <Timer className="timer" name={"Timer"} value={0} />
        </div>
        <div>
          <Add className="add" v1={0} v2={0} />
        </div>
      </div>
      <Tamp className="tamp" name={"Tamp"} />
      <h2>
        <span className="badge bg-dark">นายอมรเศรษฐ์ ธนาปรีชาศิริ รหัส 66015716</span>
      </h2>
    </div>
  );
}

export default Components;
