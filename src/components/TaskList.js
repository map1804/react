import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1, //tất cả là -1,kích hoạt là 1, ko kích hoạt là 0
    };
  }
  onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.props.onFilter(
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStatus' ? value : this.state.filterStatus
    );
    // set lại state để lưu giá trị người dùng nhập
    this.setState = {
      [name]: value,
    };
    // console.log(this.state);
  };
  render() {
    let { tasks } = this.props; // = let tasks = this.props.tasks
    let { filterName, filterStatus } = this.state;
    let elmTasks = tasks.map((task, index) => {
      return (
        <TaskItem
          key={index}
          task={task}
          index={index}
          onUpdateStatus={this.props.onUpdateStatus}
          onDelete={this.props.onDelete}
          onUpdate={this.props.onUpdate}
        />
      );
    });
    return (
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover ">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tên</th>
                <th className="text-center">Trạng Thái</th>
                <th className="text-center">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input
                    type="text"
                    name="filterName"
                    value={filterName}
                    onChange={this.onChange}
                    className="form-control"
                  />
                </td>
                <td>
                  <select
                    name="filterStatus"
                    value={filterStatus}
                    onChange={this.onChange}
                    className="form-control"
                  >
                    <option value={-1}>Tất Cả</option>
                    <option value={0}>Ẩn</option>
                    <option value={1}>Kích Hoạt</option>
                  </select>
                </td>
                <td></td>
              </tr>
              {elmTasks}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default TaskList;
