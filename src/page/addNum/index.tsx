import React, { FC } from "react";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { RootState } from "../../store/reducers/reducer";

type Action = () => { type: "ADD" | "MINUS" | "LOGOUT" };
interface AddNumProps {
  name: string;
  count: number;
  addOne: Action;
  minusOne: Action;
  logout: Action;
}

const AddNum: FC<AddNumProps> = ({ name, addOne, count, minusOne, logout }) => {
  const match = useRouteMatch<{ id: string }>();
  return (
    <div>
      <div>{count}</div>
      <p>search：{match.params.id}</p>
      <p>search：{name || "default"}</p>
      <button key={"add"} onClick={addOne}>
        add1
      </button>
      <button key={"minus"} onClick={minusOne}>
        minus1
      </button>
      <button key={"logout"} onClick={logout}>
        退出登录
      </button>
    </div>
  );
};

export default connect(
  (state: RootState) => ({
    name: state.user.userName,
    count: state.count,
  }),
  {
    addOne: () => ({
      type: "ADD",
    }),
    minusOne: () => ({
      type: "MINUS",
    }),
    logout: () => ({
      type: "LOGOUT",
    }),
  }
)(AddNum);
