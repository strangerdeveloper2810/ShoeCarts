import React from "react";
export default function Cart(props) {
  return (
    <div>
      <h3>Carts</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Product 1</td>
            <td>
              <img src="https://i.pravatar.cc?u=1" alt="item" width={50} />
            </td>
            <td>1.000</td>
            <td>10</td>
            <td>10.000</td>
            <td>
                <button className="btn btn-danger">Del</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
